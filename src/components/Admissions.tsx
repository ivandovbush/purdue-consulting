
import React from 'react';

const Admissions = () => {
  const steps = [
    {
      step: "01",
      title: "Application",
      description: "Submit your application including resume, and personal statement demonstrating your passion for consulting.",
      timeline: "Rolling Admissions"
    },
    {
      step: "02",
      title: "Final Selection",
      description: "Join our elite cohort after a final evaluation of your potential for leadership and commitment to excellence.",
      timeline: "1 Week After Application Submission"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-warm-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-[#FEF7E5]">
            Admissions <span className="text-yellow-500">Process</span>
          </h2>
          <div className="w-20 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-[#FEF7E5] text-lg max-w-2xl mx-auto font-inter">
            Our open application process welcomes all students eager to grow, while our strike policy
            ensures commitment and accountability throughout their consulting journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-24 bg-gradient-to-b from-warm-brown to-warm-brown/20"></div>
                )}
                
                <div className="flex items-start space-x-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-500 text-[#FEF7E5] rounded-full flex items-center justify-center font-space-grotesk font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="bg-[#FEF7E5] backdrop-blur-sm border border-light-tan rounded-lg p-6 hover:border-warm-brown/50 transition-all duration-300 shadow-lg">
                      <h3 className="font-space-grotesk font-semibold text-xl text-warm-dark mb-3">
                        {step.title}
                      </h3>
                      <p className="text-warm-brown font-inter leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-block bg-warm-brown/20 text-warm-brown px-3 py-1 rounded-full text-sm font-inter font-medium">
                        {step.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admission Stats */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-warm-brown/10 to-transparent p-8 rounded-lg border border-light-tan shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-space-grotesk font-bold text-yellow-500 mb-2">82%</div>
                  <div className="text-yellow-500 text-sm font-inter">Job Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-space-grotesk font-bold text-yellow-500 mb-2">3.7+</div>
                  <div className="text-yellow-500 text-sm font-inter">Average GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-space-grotesk font-bold text-yellow-500 mb-2">1 week</div>
                  <div className="text-yellow-500 text-sm font-inter">Application Review Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
