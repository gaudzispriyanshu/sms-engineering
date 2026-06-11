import { useState } from 'react';
import {
  BatteryCharging,
  Building2,
  ChevronRight,
  CircuitBoard,
  Cog,
  Download,
  ExternalLink,
  Factory,
  Filter,
  Gauge,
  Globe2,
  Hammer,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react';

const productGroups = [
  {
    title: 'Concrete Pump & Batching Plant Spares',
    icon: Truck,
    image: '/images/concrete-pump.jpg',
    items: [
      'Schwing Stetter Pump Spare Parts',
      'Putzmeister Pump Spare Parts',
      'Sany Pump Spare Parts',
      'Concrete Pump Pipe Lines',
      'End Hose',
      'Pipe Bends',
      'Pipe Clamp',
      'Delivery Cylinders',
      'Piston Ram',
      'Sliding Valve',
      'Cleaning Ball',
      'Batching Plant Spare Parts',
    ],
  },
  {
    title: 'Hydraulic Systems & Industrial Machinery',
    icon: Gauge,
    image: '/images/hydraulic-system.jpg',
    items: [
      'Hydraulic Industrial Machinery',
      'Hydraulic Hose Pipe',
      'Hydraulic Control Systems',
      'Hydraulic Valves',
      'Hydraulic Filters',
      'High Pressure Filters',
      'Line Pressure Regulators',
      'Plunger Assembly',
      'Liquid Filters',
      'Air Filters',
    ],
  },
  {
    title: 'Diesel Generators & Engine Parts',
    icon: Zap,
    image: '/images/generator-set.jpg',
    items: [
      'Diesel Generator Sets 15 KVA - 1500 KVA',
      'Cummins Engine Parts',
      'Caterpillar Engine Parts',
      'Detroit Diesel Spare Parts',
      'Kirloskar Engine Parts',
      'Engine Valves',
      'Valve Guides',
      'Cylinder Heads',
      'Piston, Ring Set',
      'Batteries/Inverters',
    ],
  },
  {
    title: 'Earth Moving Equipment Spares',
    icon: Hammer,
    image: '/images/earth-mover.jpg',
    items: [
      'Earth Moving Spare Parts',
      'Spare Parts For JCB',
      'Spare Parts For Volvo Equipments',
      'Spare Parts For Caterpillar Equipments',
      'Spare Parts For HM 2021',
      'Track Rollers Double Flange',
      'Track Rollers Single Flange',
      'Bottom Rollers',
      'Carrier Roller',
      'Upper Roller',
      'Idlers, Sprockets',
      'Idler Wheels',
    ],
  },
  {
    title: 'Electrical & Control Panels',
    icon: CircuitBoard,
    image: '/images/electrical-panel.jpg',
    items: [
      'Power Distribution Boards',
      'Electric Control Panels',
      'PLC Panels',
      'AMF Panel',
      'Manual Panel',
      'Vibrator Motor',
      'Vibrator Meter',
    ],
  },
  {
    title: 'Wear Parts, Seals & Fabrication',
    icon: Cog,
    image: '/images/wear-parts.jpg',
    items: [
      'Sealing Cone',
      'Sealing Ring',
      'O Ring Kit',
      'Castings',
      'Skip Wire',
      'Scrape Wire',
      'Ground Engaging Tools',
    ],
  },
];

const highlights = [
  { value: '2003', label: 'Established' },
  { value: '15–1500', label: 'KVA DG Sets' },
  { value: '5+', label: 'Export Countries' },
  { value: 'Multi-brand', label: 'Spares Support' },
];

const exportCountries = ['Nepal', 'Bhutan', 'Bangladesh', 'Tanzania', 'Kenya'];

const whyUs = [
  {
    icon: ShieldCheck,
    title: 'ISO 9001 Certified',
    text: 'Quality management systems in place — every part is sourced to meet industrial-grade standards.',
  },
  {
    icon: Globe2,
    title: 'Import & Export',
    text: 'American and European sourced spare parts supplied across India and exported to 5+ countries.',
  },
  {
    icon: Wrench,
    title: 'Service Background',
    text: 'Hands-on experience in DG set service, maintenance and industrial equipment support since 2003.',
  },
  {
    icon: Filter,
    title: 'Wide Inventory',
    text: 'Filters, engine spares, hydraulic systems, pump spares and earth moving components under one roof.',
  },
];

function App() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', requirement: '', details: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry: ${form.requirement || 'General'} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nRequirement: ${form.requirement}\n\nDetails:\n${form.details}`
    );
    window.location.href = `mailto:sms_engineering36@yahoo.com?subject=${subject}&body=${body}`;
  }
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-red-100 bg-white/95 shadow-md backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <a href="#" className="flex flex-col items-center">
            <div className="flex h-16 w-[240px] items-center overflow-hidden bg-white sm:h-20 sm:w-[360px]">
              <img
                src="/sms-engineering-logo-white.png"
                className="h-full w-full object-contain"
                alt="SMS Engineering"
              />
            </div>
            <span className="w-full text-center text-[9px] font-black tracking-[0.25em] text-red-600 uppercase border-t border-red-200 pt-0.5">
              ✦ ISO 9001 Certified ✦
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-slate-700 md:flex">
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#products" className="hover:text-red-600">Products</a>
            <a href="#rmc" className="rounded-full bg-red-50 px-3 py-1 text-red-700 ring-1 ring-red-200 hover:bg-red-100">RMC Plants</a>
            <a href="#exports" className="hover:text-red-600">Exports</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/sms-engineering-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50 sm:flex"
            >
              <Download size={15} /> Brochure
            </a>
            <a
              href="tel:+919910232610"
              className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <Phone size={17} />
              <span className="hidden sm:inline">+91 99102 32610</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-white text-slate-950">
        <img
          src="/images/hero-bg.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          alt="Industrial machinery workshop"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-red-50/75" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              <Factory size={17} /> Industrial spares · DG sets · Hydraulics · Ready Mix Concrete
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Reliable engineering supply partner since{' '}
              <span className="text-red-600">2003</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              SMS Engineering supplies and exports imported machinery spares, hydraulic filters, engine parts, earth moving spares and concrete pump components — backed by two decades of hands-on industry experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white shadow-xl shadow-red-200 transition hover:bg-red-700"
              >
                Explore Products <ChevronRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-red-200 bg-white px-6 py-3 font-bold text-red-700 transition hover:border-red-600 hover:bg-red-50"
              >
                Send Enquiry
              </a>
              <a
                href="/sms-engineering-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                <Download size={17} /> Download Brochure
              </a>
            </div>
          </div>

          <div className="grid content-end gap-4 sm:grid-cols-2 lg:pt-20">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-red-100 bg-white/85 p-5 shadow-lg shadow-red-100/60 backdrop-blur"
              >
                <p className="text-3xl font-black text-red-700">{item.value}</p>
                <p className="mt-1 text-sm font-bold text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>

        {/* ── ABOUT ── */}
        <section id="about" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">About SMS Engineering</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                From DG sets to imported machinery spares
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Established in 2003, SMS Engineering began with diesel generator set sales, service and maintenance. Over the years, the business expanded into importing quality machinery parts from American and European countries, while serving industries that need dependable spares and quick technical support.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The range now includes hydraulic filters, Caterpillar engine parts, Cummins engine parts, Detroit Diesel spare parts, ground engaging tools for earth moving equipment, concrete pump spares and electrical control systems.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-5 py-3 w-fit">
                <Star className="text-red-600 fill-red-600" size={20} />
                <span className="font-black text-red-700 text-sm tracking-wide uppercase">ISO 9001 : 2015 Certified Company</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-2xl shadow-red-100/60">
              <img
                src="/images/about-factory.jpg"
                alt="SMS Engineering workshop"
                className="h-72 w-full object-cover lg:h-96"
              />
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 xl:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-red-100 bg-white p-6 shadow-sm shadow-red-100/50"
              >
                <item.icon className="mb-4 text-red-600" size={34} />
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section id="products" className="border-y border-red-100 bg-red-50 py-16 text-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Product Range</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Spares and systems for concrete, power, hydraulic and earth moving industries
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                A broad range under one roof, selected for dependable use across industrial and construction requirements.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {productGroups.map((group) => (
                <article
                  key={group.title}
                  className="overflow-hidden rounded-xl border border-red-100 bg-white shadow-xl shadow-red-100/70"
                >
                  {group.image && (
                    <div className="h-44 overflow-hidden">
                      <img
                        src={group.image}
                        alt={group.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-red-50 text-red-600">
                        <group.icon size={26} />
                      </span>
                      <h3 className="text-xl font-black leading-tight">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-sm font-semibold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── RMC ── */}
        <section id="rmc" className="relative overflow-hidden bg-slate-950 py-20 text-white">
          {/* subtle background texture */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

            {/* tag + heading + image split */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block rounded-full border border-red-500/40 bg-red-600/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-red-400">
                  Ready Mix Concrete
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                  We supply <span className="text-red-500">Ready Mix Concrete</span>{' '}
                  across Delhi NCR
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  SMS Engineering operates its own RMC plant supplying all grades of ready mix concrete — from standard residential mixes to high-strength custom designs — delivered to your site across Delhi NCR.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['M10', 'M15', 'M20', 'M25', 'M30', 'M35', 'M40', 'M45', 'M50', 'Custom Mix'].map((grade) => (
                    <span key={grade} className="rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1.5 text-sm font-black text-red-300">
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* image collage */}
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/images/rmc-plant.jpg"
                  alt="Ready mix concrete plant"
                  className="col-span-2 h-52 w-full rounded-xl object-cover"
                />
                <img
                  src="/images/rmc-pouring.jpg"
                  alt="Concrete pouring on construction site"
                  className="h-36 w-full rounded-xl object-cover"
                />
                <img
                  src="/images/transit-mixer.jpg"
                  alt="Transit mixer concrete truck"
                  className="h-36 w-full rounded-xl object-cover"
                />
              </div>
            </div>

            {/* 4 feature cards */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Building2,
                  title: 'Own RMC Plant',
                  text: 'We operate our own batching plant — quality controlled at the source, not sourced through middlemen.',
                },
                {
                  icon: Truck,
                  title: 'All Grades',
                  text: 'Standard grades M10–M50 and custom mix designs as per your structural or IS code requirements.',
                },
                {
                  icon: MapPin,
                  title: 'Delhi NCR Delivery',
                  text: 'On-site delivery across Delhi, Noida, Gurugram, Faridabad and Ghaziabad with transit mixers.',
                },
                {
                  icon: ShieldCheck,
                  title: 'ISO 9001 Quality',
                  text: 'Every batch produced under ISO 9001 certified quality management. Cube test reports provided.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-red-500/40 hover:bg-white/10"
                >
                  <card.icon className="mb-4 text-red-500" size={32} />
                  <h3 className="mb-2 text-lg font-black">{card.title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{card.text}</p>
                </div>
              ))}
            </div>

            {/* who we serve strip */}
            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-center text-xs font-black uppercase tracking-widest text-red-400">Who We Supply To</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
                {['Residential Buildings', 'Commercial Projects', 'Infrastructure & Roads', 'Industrial Flooring', 'Bridges & Flyovers', 'Government Projects'].map((use) => (
                  <span key={use} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> {use}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+919910232610"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 font-black text-white shadow-xl shadow-red-900/50 transition hover:bg-red-500"
              >
                <Phone size={18} /> Call for RMC Quote
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 font-bold text-white transition hover:border-white/50 hover:bg-white/10"
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </section>

        {/* ── EXPORTS ── */}
        <section id="exports" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Global Reach</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Exporting to 5+ countries
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  SMS Engineering exports quality industrial spare parts across South Asia and Africa, serving customers who trust us for genuine parts and reliable delivery.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {exportCountries.map((country) => (
                    <span
                      key={country}
                      className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2 font-bold text-red-700"
                    >
                      <Globe2 size={16} /> {country}
                    </span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-2xl shadow-red-100/60">
                <img
                  src="/images/exports.jpg"
                  alt="Industrial export operations"
                  className="h-72 w-full object-cover lg:h-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="bg-red-600 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                Need Spare parts, machinery or RMC?
              </h2>
              <p className="mt-2 text-red-100">
                Call or send an enquiry — the team responds quickly with availability and pricing.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919910232610"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-red-600 shadow-lg transition hover:bg-red-50"
              >
                <Phone size={18} /> +91 99102 32610
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-xl border border-red-100 bg-white shadow-2xl shadow-red-100/80 md:grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-red-700 p-8 text-white sm:p-10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-red-100">Contact</p>
                <h2 className="mt-3 text-3xl font-black">Send your requirement</h2>
                <p className="mt-4 leading-7 text-red-50">
                  Share the part name, machine model, quantity or project requirement. The team can help with DG sets, filters, hydraulic components, control panels and construction equipment spares.
                </p>
                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <Phone className="mt-1 shrink-0 text-red-100" />
                    <div>
                      <p className="font-bold">Phone</p>
                      <a href="tel:+919910232610" className="text-red-50 hover:text-white">
                        +91 99102 32610
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-1 shrink-0 text-red-100" />
                    <div>
                      <p className="font-bold">Email</p>
                      <a href="mailto:sms_engineering36@yahoo.com" className="text-red-50 hover:text-white">
                        sms_engineering36@yahoo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="mt-1 shrink-0 text-red-100" />
                    <div>
                      <p className="font-bold">Address</p>
                      <p className="text-red-50">205, 2nd Floor, Plot No.-9, Nehru Complex</p>
                      <p className="text-red-50">Pandav Nagar, Delhi - 110092, India</p>
                      <p className="mt-1 text-sm text-red-200">Contact: Mr. Santosh Thakur</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="mt-1 shrink-0 text-red-100" />
                    <div>
                      <p className="font-bold">Alternate Phone</p>
                      <a href="tel:01143018330" className="text-red-50 hover:text-white">011 43018330</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ExternalLink className="mt-1 shrink-0 text-red-100" />
                    <div>
                      <p className="font-bold">Website</p>
                      <a
                        href="https://www.smsconcretesolution.in"
                        className="text-red-50 hover:text-white"
                      >
                        www.smsconcretesolution.in
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Download className="mt-1 shrink-0 text-red-100" />
                    <div>
                      <p className="font-bold">Company Brochure</p>
                      <a
                        href="/sms-engineering-brochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-50 hover:text-white underline"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BatteryCharging className="mt-1 shrink-0 text-red-100" />
                    <div>
                      <p className="font-bold">Core Supply</p>
                      <p className="text-red-50">DG sets, machinery spares, hydraulics and control systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Your Name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-500/30"
                      placeholder="Full name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-500/30"
                      placeholder="+91 _____ _____"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-500/30"
                    placeholder="your@email.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Requirement Type</span>
                  <select
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-500/30"
                  >
                    <option value="">Select requirement...</option>
                    <option>Ready Mix Concrete (RMC)</option>
                    <option>Diesel Generator Set</option>
                    <option>Hydraulic / Industrial Machinery</option>
                    <option>Concrete Pump Spare Parts</option>
                    <option>Earth Moving Equipment Spares</option>
                    <option>Electrical / PLC / AMF Panel</option>
                    <option>Other Machinery Parts</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">
                    Part Details / Machine Model / Quantity
                  </span>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe the part, machine model, brand, and quantity needed..."
                    className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-500/30"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 py-4 font-black text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-red-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:items-start">
              <div className="h-14 w-[200px]">
                <img
                  src="/sms-engineering-logo-white.png"
                  className="h-full w-full object-contain"
                  alt="SMS Engineering"
                />
              </div>
              <p className="w-full text-center text-[9px] font-black tracking-[0.25em] text-red-600 uppercase border-t border-red-200 pt-0.5">
                ✦ ISO 9001 Certified ✦
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center md:items-end md:text-right">
              <p className="text-sm text-slate-600">&copy; 2026 SMS Engineering. Established 2003.</p>
              <a
                href="https://www.smsconcretesolution.in"
                className="text-sm font-semibold text-red-600 hover:text-red-700"
              >
                www.smsconcretesolution.in
              </a>
              <p className="mt-1 text-xs text-slate-400">
                205, 2nd Floor, Plot No.-9, Nehru Complex, Pandav Nagar, Delhi - 110092
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
