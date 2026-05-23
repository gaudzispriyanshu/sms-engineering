import {
  BatteryCharging,
  ChevronRight,
  CircuitBoard,
  Cog,
  Factory,
  Filter,
  Gauge,
  Globe2,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
  ExternalLink,
} from 'lucide-react';

const productGroups = [
  {
    title: 'Concrete Pump & Batching Plant Spares',
    icon: Truck,
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
  { value: '15-1500', label: 'KVA DG Sets' },
  { value: 'SAARC', label: 'Export Markets' },
  { value: 'Multi-brand', label: 'Spares Support' },
];

function App() {
  const featuredProducts = productGroups.flatMap((group) => group.items).slice(0, 28);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-xl font-black tracking-tight sm:text-2xl">
            SMS <span className="text-orange-500">ENGINEERING</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="tel:+919910232610"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            <Phone size={17} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&q=80&w=1600"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          alt="Industrial machinery workshop"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200">
              <Factory size={17} /> Industrial spares, DG sets, hydraulics and concrete equipment support
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Reliable engineering supply partner since <span className="text-orange-500">2003</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              SMS Engineering has grown step by step from DG set sales, service and maintenance into a supplier and exporter of imported machinery spares, hydraulic filters, engine parts, earth moving spares and concrete pump components.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white shadow-xl shadow-orange-950/30 transition hover:bg-orange-600"
              >
                Explore Products <ChevronRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Send Enquiry
              </a>
            </div>
          </div>

          <div className="grid content-end gap-4 sm:grid-cols-2 lg:pt-20">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="bg-white py-18">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">About SMS Engineering</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                From DG sets to imported machinery spares
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Established in 2003, SMS Engineering began with diesel generator set sales, service and maintenance. Over the years, the business expanded into importing quality machinery parts from American and European countries, while serving industries that need dependable spares and quick technical support.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The range now includes hydraulic filters, Caterpillar engine parts, Cummins engine parts, Detroit Diesel spare parts, ground engaging tools for earth moving equipment, concrete pump spares and electrical control systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: 'Quality Focused', text: 'Products are selected to match the quality expectations of industrial users.' },
                { icon: Globe2, title: 'Import & Export', text: 'Imported spare parts with export support for SAARC countries including Nepal, Bhutan and Bangladesh.' },
                { icon: Wrench, title: 'Service Background', text: 'Hands-on experience in DG set service, maintenance and industrial equipment support.' },
                { icon: Filter, title: 'Wide Inventory', text: 'Filters, engine spares, hydraulic systems, pump spares and earth moving components.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-stone-50 p-6 shadow-sm">
                  <item.icon className="mb-4 text-orange-500" size={34} />
                  <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">Product Range</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Spares and systems for concrete, power, hydraulic and earth moving industries
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                A broad range under one roof, selected for dependable use across industrial and construction requirements.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {productGroups.map((group) => (
                <article key={group.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-orange-500/15 text-orange-300">
                      <group.icon size={26} />
                    </span>
                    <h3 className="text-xl font-black leading-tight">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">Quick Catalogue</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Popular items customers ask for</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This is a compact view for fast scanning on mobile and desktop. Customers can still ask for any related spare or machinery part through the enquiry form.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((product) => (
                  <div key={product} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm font-semibold text-slate-700">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-200/70 md:grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-slate-950 p-8 text-white sm:p-10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">Contact</p>
                <h2 className="mt-3 text-3xl font-black">Send your requirement</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Share the part name, machine model, quantity or project requirement. The team can help with DG sets, filters, hydraulic components, control panels and construction equipment spares.
                </p>
                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <Phone className="mt-1 shrink-0 text-orange-400" />
                    <div>
                      <p className="font-bold">Phone</p>
                      <a href="tel:+919910232610" className="text-slate-300 hover:text-white">+91 99102 32610</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="mt-1 shrink-0 text-orange-400" />
                    <div>
                      <p className="font-bold">Service Area</p>
                      <p className="text-slate-300">India and SAARC export markets</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ExternalLink className="mt-1 shrink-0 text-orange-400" />
                    <div>
                      <p className="font-bold">Website</p>
                      <a href="https://www.smsconcretesolution.in" className="text-slate-300 hover:text-white">
                        www.smsconcretesolution.in
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <BatteryCharging className="mt-1 shrink-0 text-orange-400" />
                    <div>
                      <p className="font-bold">Core Supply</p>
                      <p className="text-slate-300">DG sets, machinery spares, hydraulics and control systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5 p-6 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Your Name</span>
                    <input type="text" className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Phone Number</span>
                    <input type="tel" className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Requirement Type</span>
                  <select className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30">
                    <option>Select requirement...</option>
                    <option>Diesel Generator Set</option>
                    <option>Hydraulic / Industrial Machinery</option>
                    <option>Concrete Pump Spare Parts</option>
                    <option>Earth Moving Equipment Spares</option>
                    <option>Electrical / PLC / AMF Panel</option>
                    <option>Other Machinery Parts</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Part Details / Machine Model / Quantity</span>
                  <textarea rows={5} className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30" />
                </label>

                <button className="w-full rounded-lg bg-orange-500 py-4 font-black text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600">
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-slate-400">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm">&copy; 2026 SMS Engineering. Established 2003.</p>
          <a href="https://www.smsconcretesolution.in" className="mt-2 inline-block text-sm font-semibold text-orange-400 hover:text-orange-300">
            www.smsconcretesolution.in
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
