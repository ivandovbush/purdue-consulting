
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  year: string;
  motivation: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const applicationData: ApplicationData = await req.json();
    console.log("Received application data:", applicationData);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #D4AF37; text-align: center; margin-bottom: 30px;">
          New PECC Application Submission
        </h1>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Applicant Information</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Name:</strong> 
            <span>${applicationData.firstName} ${applicationData.lastName}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Email:</strong> 
            <span>${applicationData.email}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Major:</strong> 
            <span>${applicationData.major}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Year:</strong> 
            <span>${applicationData.year}</span>
          </div>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Why do they want to join PECC?</h3>
          <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #D4AF37;">
            <p style="margin: 0; line-height: 1.6; color: #333;">
              ${applicationData.motivation.replace(/\n/g, '<br>')}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">
            Submitted on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "PECC Applications <onboarding@resend.dev>",
      to: ["ivandovbush1@gmail.com"],
      subject: `New PECC Application - ${applicationData.firstName} ${applicationData.lastName}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Application submitted and email sent successfully!" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-application function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to send application email",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
