-- LV Mobile Detailing Database Schema
-- Supabase PostgreSQL

-- Leads / Contact Form Submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  zip TEXT,
  vehicle_type TEXT,
  service TEXT,
  message TEXT,
  photo_urls TEXT[],
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  vehicle TEXT,
  service TEXT,
  photo_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bookings (optional calendar integration)
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  service TEXT NOT NULL,
  scheduled_date DATE NOT NULL,
  scheduled_time TEXT NOT NULL,
  duration_hours NUMERIC(3,1),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Public can insert leads (form submissions)
CREATE POLICY "Anyone can submit a lead" ON leads FOR INSERT WITH CHECK (true);

-- Public can read featured reviews
CREATE POLICY "Anyone can read reviews" ON reviews FOR SELECT USING (true);

-- Index for performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_reviews_featured ON reviews(is_featured) WHERE is_featured = true;
CREATE INDEX idx_bookings_date ON bookings(scheduled_date);

-- Seed featured reviews
INSERT INTO reviews (author, rating, text, vehicle, service, is_featured, source) VALUES
('Michael R.', 5, 'Absolutely incredible work! My Tesla Model 3 looks better than the day I bought it. The ceramic coating is flawless and the attention to detail is unmatched. Highly recommend LV Mobile Detailing!', 'Tesla Model 3', 'Ceramic Coating', true, 'google'),
('Sarah K.', 5, 'Best detailing service in Las Vegas! They came to my home in Summerlin and did a full interior detail on my Range Rover. Every surface was spotless. Will definitely use again!', 'Range Rover Sport', 'Interior Detail', true, 'google'),
('David L.', 5, 'Had a 2-step paint correction done on my BMW M4. The swirl marks are completely gone and the paint looks like glass. These guys know what they''re doing!', 'BMW M4', 'Paint Correction', true, 'google'),
('Jennifer M.', 5, 'Family-owned and it shows — they treat your car like their own. Got the full detail package for my Mercedes and it''s never looked this good. Professional, on time, and fairly priced.', 'Mercedes GLE', 'Full Detail', true, 'google'),
('Robert T.', 5, 'They detailed our 38ft RV before a cross-country trip. Outstanding work on such a large vehicle. The exterior was gleaming and the interior smelled brand new. Great value!', '38ft Class A RV', 'RV Detailing', true, 'google'),
('Amanda W.', 5, 'I''ve tried several detailing services in Henderson and LV Mobile is by far the best. Quick response, arrived on time, and my Audi Q7 looks showroom-ready. The convenience of mobile service is unbeatable.', 'Audi Q7', 'Exterior Detail', true, 'google'),
('Carlos G.', 5, 'Had my boat detailed before lake season. They did an amazing job removing water stains and oxidation. The gel coat looks brand new! Highly professional team.', '24ft Pontoon', 'Marine Detailing', true, 'google'),
('Lisa P.', 5, 'Second time using LV Mobile Detailing and they''re consistently excellent. Got the exterior wash + ceramic coating on my Porsche Cayenne. Worth every penny!', 'Porsche Cayenne', 'Ceramic Coating', true, 'google')
ON CONFLICT DO NOTHING;