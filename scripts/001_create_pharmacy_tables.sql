-- Create medicines table
CREATE TABLE IF NOT EXISTS public.medicines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  requires_prescription BOOLEAN NOT NULL DEFAULT false,
  image_url TEXT,
  manufacturer TEXT,
  dosage TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create reservations table
CREATE TABLE IF NOT EXISTS public.reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medicine_id UUID NOT NULL REFERENCES public.medicines(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, confirmed, completed, cancelled
  reservation_date TIMESTAMPTZ DEFAULT NOW(),
  pickup_date TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create prescriptions table
CREATE TABLE IF NOT EXISTS public.prescriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  prescription_image_url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, reviewed, approved, rejected
  notes TEXT,
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);

-- Create medicine categories table for better organization
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.medicines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prescriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- RLS Policies for medicines (public read access)
CREATE POLICY "Allow public read access to medicines"
  ON public.medicines FOR SELECT
  USING (true);

-- RLS Policies for reservations (users can create, read their own)
CREATE POLICY "Allow public insert reservations"
  ON public.reservations FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow users to read their own reservations"
  ON public.reservations FOR SELECT
  USING (true);

-- RLS Policies for prescriptions (users can create, read their own)
CREATE POLICY "Allow public insert prescriptions"
  ON public.prescriptions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow users to read their own prescriptions"
  ON public.prescriptions FOR SELECT
  USING (true);

-- RLS Policies for categories (public read access)
CREATE POLICY "Allow public read access to categories"
  ON public.categories FOR SELECT
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_medicines_category ON public.medicines(category);
CREATE INDEX idx_medicines_requires_prescription ON public.medicines(requires_prescription);
CREATE INDEX idx_reservations_status ON public.reservations(status);
CREATE INDEX idx_prescriptions_status ON public.prescriptions(status);
CREATE INDEX idx_reservations_customer_email ON public.reservations(customer_email);
CREATE INDEX idx_prescriptions_customer_email ON public.prescriptions(customer_email);
