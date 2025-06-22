
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorCount = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const incrementAndGetCount = async () => {
      try {
        // Call the function to increment visitor count
        const { data, error } = await supabase.rpc('increment_visitor_count');
        
        if (error) {
          console.error('Error incrementing visitor count:', error);
          // Fallback to getting current count
          const { data: countData, error: fetchError } = await supabase
            .from('visitor_count')
            .select('count')
            .eq('id', 1)
            .single();
          
          if (!fetchError && countData) {
            setVisitCount(countData.count);
          }
        } else {
          setVisitCount(data);
        }
      } catch (error) {
        console.error('Error with visitor count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    incrementAndGetCount();
  }, []);

  return { visitCount, isLoading };
};
