
-- Create a table to store the global visitor count
CREATE TABLE public.visitor_count (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial row
INSERT INTO public.visitor_count (id, count) VALUES (1, 0);

-- Create a function to increment visitor count
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.visitor_count 
  SET count = count + 1, updated_at = now() 
  WHERE id = 1
  RETURNING count INTO new_count;
  
  RETURN new_count;
END;
$$;

-- Make the table readable by anonymous users
ALTER TABLE public.visitor_count ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visitor count" 
  ON public.visitor_count 
  FOR SELECT 
  USING (true);
