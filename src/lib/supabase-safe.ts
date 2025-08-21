import { supabase } from "@/integrations/supabase/client";

// Safe wrapper for Supabase operations that handles paused/unavailable instances
export const safeSupabaseCall = async <T>(
  operation: () => Promise<T>,
  fallback?: T
): Promise<T | null> => {
  try {
    const result = await operation();
    return result;
  } catch (error) {
    console.warn('Supabase operation failed (instance may be paused):', error);
    return fallback || null;
  }
};

// Check if Supabase is available
export const checkSupabaseHealth = async (): Promise<boolean> => {
  try {
    const { error } = await supabase.from('_health_check_').select('*').limit(1);
    // If we get an error about table not existing, Supabase is actually working
    // If we get a network error, Supabase is down/paused
    return true;
  } catch (error) {
    console.warn('Supabase health check failed:', error);
    return false;
  }
};

// Safe Supabase client with automatic error handling
export const safeSupabase = {
  from: (table: string) => ({
    select: async (columns = '*') => {
      return safeSupabaseCall(async () => {
        const { data, error } = await supabase.from(table).select(columns);
        if (error) throw error;
        return data;
      });
    },
    insert: async (data: any) => {
      return safeSupabaseCall(async () => {
        const { data: result, error } = await supabase.from(table).insert(data);
        if (error) throw error;
        return result;
      });
    },
    update: async (data: any) => ({
      eq: async (column: string, value: any) => {
        return safeSupabaseCall(async () => {
          const { data: result, error } = await supabase.from(table).update(data).eq(column, value);
          if (error) throw error;
          return result;
        });
      }
    }),
    delete: async () => ({
      eq: async (column: string, value: any) => {
        return safeSupabaseCall(async () => {
          const { data: result, error } = await supabase.from(table).delete().eq(column, value);
          if (error) throw error;
          return result;
        });
      }
    })
  }),
  auth: {
    signUp: async (credentials: any) => {
      return safeSupabaseCall(() => supabase.auth.signUp(credentials));
    },
    signIn: async (credentials: any) => {
      return safeSupabaseCall(() => supabase.auth.signInWithPassword(credentials));
    },
    signOut: async () => {
      return safeSupabaseCall(() => supabase.auth.signOut());
    },
    getUser: async () => {
      return safeSupabaseCall(() => supabase.auth.getUser());
    }
  }
};