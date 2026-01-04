-- Insert categories
INSERT INTO public.categories (name, description, icon) VALUES
  ('Analgetici i antipiretici', 'Lijekovi protiv bolova i temperature', '💊'),
  ('Antibiotici', 'Lijekovi za infekcije', '🦠'),
  ('Vitamini i suplementi', 'Dodaci prehrani i vitamini', '💪'),
  ('Preparati za kožu', 'Kreme, masti i gelovi', '🧴'),
  ('Probavni sistem', 'Lijekovi za probavu', '🌿'),
  ('Respiratorni sistem', 'Lijekovi za disanje i prehladu', '🫁'),
  ('Kardiovaskularni sistem', 'Lijekovi za srce i krvne sudove', '❤️'),
  ('Dijabetes', 'Lijekovi za šećernu bolest', '💉')
ON CONFLICT (name) DO NOTHING;

-- Insert sample medicines
INSERT INTO public.medicines (name, description, category, price, stock_quantity, requires_prescription, manufacturer, dosage, image_url) VALUES
  -- Bez recepta (OTC)
  ('Brufen 400mg', 'Ibuprofen tableta za ublažavanje bolova i temperature', 'Analgetici i antipiretici', 8.50, 150, false, 'Abbott', '400mg, 20 tableta', '/placeholder.svg?height=300&width=300'),
  ('Paracetamol 500mg', 'Paracetamol tableta protiv bolova i groznice', 'Analgetici i antipiretici', 4.20, 200, false, 'Hemofarm', '500mg, 20 tableta', '/placeholder.svg?height=300&width=300'),
  ('Aspirin C', 'Šumeće tablete sa vitaminom C za prehladu i gripu', 'Analgetici i antipiretici', 12.00, 120, false, 'Bayer', '10 šumećih tableta', '/placeholder.svg?height=300&width=300'),
  ('Vitamin C 1000mg', 'Vitamin C za jačanje imuniteta', 'Vitamini i suplementi', 15.00, 180, false, 'Pharmavit', '1000mg, 30 tableta', '/placeholder.svg?height=300&width=300'),
  ('Multivitamin Complex', 'Kompletna formula multivitamina i minerala', 'Vitamini i suplementi', 22.50, 90, false, 'Centrum', '30 tableta', '/placeholder.svg?height=300&width=300'),
  ('Probiotik Forte', 'Probiotik sa 10 milijardi bakterija', 'Probavni sistem', 28.00, 60, false, 'Lactobacillus', '30 kapsula', '/placeholder.svg?height=300&width=300'),
  ('Bepanthen mast', 'Krema za njegu i zaštitu kože', 'Preparati za kožu', 18.50, 75, false, 'Bayer', '100g', '/placeholder.svg?height=300&width=300'),
  ('Strepsils pastile', 'Pastile za grlo sa vitaminom C', 'Respiratorni sistem', 7.80, 140, false, 'Reckitt Benckiser', '24 pastile', '/placeholder.svg?height=300&width=300'),
  ('Sinupret forte', 'Biljni preparat za sinuse', 'Respiratorni sistem', 24.00, 85, false, 'Bionorica', '20 tableta', '/placeholder.svg?height=300&width=300'),
  ('Omega 3', 'Riblje ulje sa omega-3 masnim kiselinama', 'Vitamini i suplementi', 32.00, 100, false, 'Nordic Naturals', '60 kapsula', '/placeholder.svg?height=300&width=300'),
  
  -- Sa receptom
  ('Amoksicilin 500mg', 'Antibiotik širokoga spektra', 'Antibiotici', 15.80, 80, true, 'Sandoz', '500mg, 16 kapsula', '/placeholder.svg?height=300&width=300'),
  ('Ciprocinal 500mg', 'Antibiotik za liječenje infekcija', 'Antibiotici', 28.50, 45, true, 'Krka', '500mg, 10 tableta', '/placeholder.svg?height=300&width=300'),
  ('Norvasc 5mg', 'Lijek za visok krvni pritisak', 'Kardiovaskularni sistem', 35.00, 50, true, 'Pfizer', '5mg, 30 tableta', '/placeholder.svg?height=300&width=300'),
  ('Metformin 850mg', 'Lijek za dijabetes tip 2', 'Dijabetes', 18.00, 60, true, 'Merck', '850mg, 60 tableta', '/placeholder.svg?height=300&width=300'),
  ('Concor 5mg', 'Beta blokator za srce', 'Kardiovaskularni sistem', 42.00, 40, true, 'Merck', '5mg, 30 tableta', '/placeholder.svg?height=300&width=300')
ON CONFLICT DO NOTHING;

-- Insert some sample reservations
INSERT INTO public.reservations (medicine_id, customer_name, customer_email, customer_phone, quantity, status, notes) 
SELECT 
  id, 
  'Test Korisnik', 
  'test@example.com', 
  '+387 61 123 456', 
  1, 
  'pending',
  'Molim rezervisati za sutra'
FROM public.medicines 
WHERE name = 'Brufen 400mg'
LIMIT 1
ON CONFLICT DO NOTHING;
