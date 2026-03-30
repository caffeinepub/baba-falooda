import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  ShoppingCart,
  Star,
  Twitter,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- Types ----------
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Review {
  name: string;
  location: string;
  quote: string;
  initials: string;
}

// ---------- Data ----------
const menuItems: MenuItem[] = [
  {
    name: "Rose Falooda",
    description:
      "Classic rose syrup, chilled milk, vermicelli & basil seeds topped with vanilla ice cream",
    price: "\u20b980",
    image: "/assets/generated/rose-falooda.dim_600x700.jpg",
  },
  {
    name: "Kulfi Falooda",
    description:
      "Creamy homemade kulfi on a bed of rose falooda with saffron & pistachios",
    price: "\u20b9120",
    image: "/assets/generated/kulfi-falooda.dim_600x700.jpg",
  },
  {
    name: "Rabdi Falooda",
    description:
      "Rich thick rabdi layered over our signature falooda with saffron strands",
    price: "\u20b9150",
    image: "/assets/generated/rabdi-falooda.dim_600x700.jpg",
  },
  {
    name: "Special Dry Fruit Falooda",
    description:
      "Our premium falooda loaded with cashews, almonds, pistachios & raisins",
    price: "\u20b9180",
    image: "/assets/generated/dryfruits-falooda.dim_600x700.jpg",
  },
];

const reviews: Review[] = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    quote:
      "Best falooda in all of Mumbai! The rose falooda is absolutely divine. I've been coming here since childhood and it never disappoints. Pure nostalgia in every sip!",
    initials: "PS",
  },
  {
    name: "Arjun Mehta",
    location: "Tourist",
    quote:
      "Visited during Eid and the line was massive but totally worth it. The Special Dry Fruit Falooda is out of this world. Will definitely be back next time I'm in Mumbai!",
    initials: "AM",
  },
  {
    name: "Fatima Shaikh",
    location: "Mahim",
    quote:
      "We're regulars here \u2014 almost every evening after visiting the Dargah. Baba's falooda is more than just a drink, it's a feeling. No one makes it like this!",
    initials: "FS",
  },
  {
    name: "Rohit Kapoor",
    location: "Food Blogger",
    quote:
      "Reviewed 100s of food stalls in Mumbai and Baba Falooda is genuinely one of the top 5. The rabdi falooda is unforgettably good. Must visit!",
    initials: "RK",
  },
];

const whyUs = [
  {
    icon: "\ud83c\udf3f",
    title: "Fresh Ingredients",
    desc: "We use only the freshest basil seeds, premium rose syrup, and real dairy",
  },
  {
    icon: "\ud83d\udcb0",
    title: "Affordable Price",
    desc: "Premium taste at street-food prices. Starting at just \u20b980",
  },
  {
    icon: "\ud83d\udccd",
    title: "Famous Local Spot",
    desc: "A legendary stall near Mahim Dargah visited by thousands daily",
  },
  {
    icon: "\u2764\ufe0f",
    title: "Loved by Thousands",
    desc: "30+ years of loyal customers, from locals to Bollywood celebrities",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

// ---------- ScrollReveal Hook ----------
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-in-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// ---------- Section Wrapper ----------
function RevealSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-in-hidden ${className}`}>
      {children}
    </div>
  );
}

// ---------- Stars ----------
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.slice(0, count).map((k) => (
        <Star key={k} className="w-4 h-4 fill-brand-gold text-brand-gold" />
      ))}
    </div>
  );
}

// ---------- Main App ----------
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-poppins min-h-screen bg-brand-blush">
      {/* ===== STICKY HEADER ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex flex-col leading-tight">
              <span className="text-xl font-black text-brand-rose tracking-tight">
                \ud83e\udd64 BABA FALOODA
              </span>
              <span className="text-xs text-brand-muted font-medium tracking-widest uppercase">
                A Mahim Legend
              </span>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              data-ocid="nav.panel"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-sm font-medium text-brand-charcoal hover:text-brand-rose transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#menu"
                data-ocid="header.primary_button"
                className="hidden sm:inline-flex items-center gap-1 px-5 py-2 rounded-full bg-brand-rose text-white text-sm font-semibold hover:bg-brand-rose-light transition-colors shadow-sm"
              >
                Order Now
              </a>
              <button
                type="button"
                className="lg:hidden p-2 text-brand-charcoal"
                onClick={() => setMobileOpen(!mobileOpen)}
                data-ocid="nav.toggle"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileOpen && (
            <div
              className="lg:hidden border-t border-border pb-4 pt-3 flex flex-col gap-1"
              data-ocid="nav.modal"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="block py-2 px-3 text-sm font-medium text-brand-charcoal hover:text-brand-rose hover:bg-brand-blush rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#menu"
                data-ocid="nav.primary_button"
                className="mt-2 mx-3 text-center px-5 py-2.5 rounded-full bg-brand-rose text-white text-sm font-semibold"
              >
                Order Now
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1400x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-2xl">
            <span className="hero-animate-1 inline-block mb-4 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
              Near Mahim Dargah, Mumbai
            </span>
            <h1 className="hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight mt-4">
              Mumbai's Famous
              <br />
              <span style={{ color: "#f9a8b0" }}>Baba Falooda</span>
            </h1>
            <p className="hero-animate-3 mt-5 text-lg text-white/85 font-light leading-relaxed">
              Taste the Real Falooda Near Mahim Dargah.
              <br />
              <span className="text-base text-white/70">
                Over 30 years of pure bliss in every sip.
              </span>
            </p>
            <div className="hero-animate-4 flex flex-wrap gap-4 mt-8">
              <a
                href="#menu"
                data-ocid="hero.primary_button"
                className="px-8 py-3 rounded-full bg-brand-rose text-white font-semibold text-sm shadow-lg hover:bg-brand-rose-light transition-colors"
              >
                View Menu
              </a>
              <a
                href="#menu"
                data-ocid="hero.secondary_button"
                className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-brand-rose transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-brand-rose font-semibold text-sm uppercase tracking-widest mb-2">
                Since 1994
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-charcoal uppercase">
                Our Story
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-brand-rose mx-auto" />
            </div>
          </RevealSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <p className="text-base text-brand-charcoal leading-relaxed mb-6">
                Baba Falooda has been a beloved institution near Mahim Dargah
                for over 30 years. What started as a humble street cart has
                grown into Mumbai's most talked-about falooda destination.
                Thousands of locals and tourists visit daily, drawn by the
                authentic taste, generous portions, and the magic of our secret
                rose syrup recipe passed down through generations.
              </p>
              <p className="text-base text-brand-muted leading-relaxed mb-8">
                The iconic stall is as much a part of Mahim as the Dargah
                itself. Whether you're a first-time visitor or a lifelong
                regular, every cup of Baba Falooda carries a little piece of
                Mumbai's heart.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { val: "30+", label: "Years" },
                  { val: "10K+", label: "Daily Visitors" },
                  { val: "100%", label: "Fresh Ingredients" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center bg-brand-blush rounded-2xl px-6 py-4 min-w-[90px]"
                  >
                    <span className="text-2xl font-black text-brand-rose">
                      {badge.val}
                    </span>
                    <span className="text-xs font-medium text-brand-muted mt-0.5">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/generated/gallery-4.dim_600x500.jpg"
                  alt="Mahim Dargah at dusk"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-semibold text-sm bg-brand-rose/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    \ud83d\udccd Near Mahim Dargah, Mumbai
                  </span>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== MENU SECTION ===== */}
      <section id="menu" className="py-20 bg-brand-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-brand-rose font-semibold text-sm uppercase tracking-widest mb-2">
                What We Serve
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-charcoal uppercase">
                Our Menu
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-brand-rose mx-auto" />
              <p className="mt-4 text-brand-muted">Every sip tells a story</p>
            </div>
          </RevealSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="menu.list"
          >
            {menuItems.map((item, i) => (
              <RevealSection key={item.name}>
                <div
                  data-ocid={`menu.item.${i + 1}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="overflow-hidden aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brand-charcoal text-base mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-brand-rose">
                        {item.price}
                      </span>
                      <button
                        type="button"
                        data-ocid={`menu.edit_button.${i + 1}`}
                        className="p-2 rounded-full bg-brand-rose text-white hover:bg-brand-rose-light transition-colors shadow-sm"
                        aria-label="Add to cart"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-brand-rose font-semibold text-sm uppercase tracking-widest mb-2">
                Our Vibes
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-charcoal uppercase">
                Gallery
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-brand-rose mx-auto" />
              <p className="mt-4 text-brand-muted">Moments &amp; Memories</p>
            </div>
          </RevealSection>

          <RevealSection>
            <div
              className="grid grid-cols-2 lg:grid-cols-3 gap-4"
              data-ocid="gallery.list"
            >
              {/* Large left image spanning 2 rows */}
              <div
                className="group relative row-span-2 rounded-2xl overflow-hidden shadow-card"
                data-ocid="gallery.item.1"
              >
                <img
                  src="/assets/generated/gallery-1.dim_600x500.jpg"
                  alt="Falooda glasses lineup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ minHeight: "400px" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Our Signature Falooda \ud83e\udd64
                  </span>
                </div>
              </div>

              {[
                {
                  src: "gallery-2.dim_600x500.jpg",
                  alt: "Mumbai street crowd at night",
                  label: "Evening Rush \ud83c\udf19",
                  id: 2,
                },
                {
                  src: "gallery-3.dim_600x500.jpg",
                  alt: "Rose falooda flat lay",
                  label: "Rose Falooda \ud83c\udf39",
                  id: 3,
                },
                {
                  src: "gallery-4.dim_600x500.jpg",
                  alt: "Mahim Dargah at dusk",
                  label: "Mahim Dargah \u2728",
                  id: 4,
                },
              ].map((img) => (
                <div
                  key={img.id}
                  className="group relative rounded-2xl overflow-hidden shadow-card"
                  data-ocid={`gallery.item.${img.id}`}
                >
                  <img
                    src={`/assets/generated/${img.src}`}
                    alt={img.alt}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-brand-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-brand-rose font-semibold text-sm uppercase tracking-widest mb-2">
                The Baba Difference
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-charcoal uppercase">
                Why Choose Us
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-brand-rose mx-auto" />
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <RevealSection key={item.title}>
                <div
                  data-ocid={`why.item.${i + 1}`}
                  className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-brand-charcoal text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-brand-rose font-semibold text-sm uppercase tracking-widest mb-2">
                Customer Love
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-charcoal uppercase">
                What Our Customers Say
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-brand-rose mx-auto" />
            </div>
          </RevealSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="reviews.list"
          >
            {reviews.map((r, i) => (
              <RevealSection key={r.name}>
                <div
                  data-ocid={`reviews.item.${i + 1}`}
                  className="bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-brand-rose flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal text-sm">
                        {r.name}
                      </p>
                      <p className="text-xs text-brand-muted">{r.location}</p>
                    </div>
                  </div>
                  <Stars />
                  <p className="text-sm text-brand-muted italic leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section id="location" className="py-20 bg-brand-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-brand-rose font-semibold text-sm uppercase tracking-widest mb-2">
                Come Visit Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-charcoal uppercase">
                Find Us
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-brand-rose mx-auto" />
            </div>
          </RevealSection>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <RevealSection>
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <iframe
                  title="Mahim Dargah Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8416!3d19.0434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6e99ddb7f77%3A0x66f6b1a1c6a5e77!2sMahim%20Dargah!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </RevealSection>

            <RevealSection>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-black text-brand-charcoal mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-rose" />
                  Our Location
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="text-brand-rose mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-charcoal text-sm">
                        Address
                      </p>
                      <p className="text-brand-muted text-sm mt-1">
                        Near Mahim Dargah, Mahim,
                        <br />
                        Mumbai - 400016, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-brand-rose mt-0.5">
                      <Clock className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-charcoal text-sm">
                        Timings
                      </p>
                      <p className="text-brand-muted text-sm mt-1">
                        Open Daily: 5:00 PM \u2013 1:00 AM
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-brand-rose mt-0.5">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-charcoal text-sm">
                        Phone
                      </p>
                      <p className="text-brand-muted text-sm mt-1">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://goo.gl/maps/mahimdargah"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="location.primary_button"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-rose text-white font-semibold text-sm hover:bg-brand-rose-light transition-colors shadow-sm"
                >
                  Get Directions <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-brand-rose font-semibold text-sm uppercase tracking-widest mb-2">
                Reach Out
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-charcoal uppercase">
                Get in Touch
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-brand-rose mx-auto" />
            </div>
          </RevealSection>

          <RevealSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              {[
                {
                  icon: <Phone className="w-7 h-7" />,
                  title: "Call Us",
                  value: "+91 98765 43210",
                },
                {
                  icon: <Clock className="w-7 h-7" />,
                  title: "Hours",
                  value: "5:00 PM \u2013 1:00 AM (Daily)",
                },
                {
                  icon: <Instagram className="w-7 h-7" />,
                  title: "Instagram",
                  value: "@babafalooda_mahim",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-brand-blush rounded-2xl p-6 text-center shadow-card"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-rose/10 flex items-center justify-center text-brand-rose mx-auto mb-3">
                    {item.icon}
                  </div>
                  <p className="font-bold text-brand-charcoal text-sm mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-brand-muted">{item.value}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection>
            <div className="flex items-center justify-center gap-5">
              {[
                {
                  icon: <Instagram className="w-5 h-5" />,
                  label: "Instagram",
                  href: "#",
                },
                {
                  icon: <Facebook className="w-5 h-5" />,
                  label: "Facebook",
                  href: "#",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  label: "Twitter",
                  href: "#",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  data-ocid="contact.link"
                  className="w-11 h-11 rounded-full border-2 border-brand-rose text-brand-rose flex items-center justify-center hover:bg-brand-rose hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-brand-rose text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="text-2xl font-black tracking-tight mb-1">
                \ud83e\udd64 BABA FALOODA
              </div>
              <p className="text-white/70 text-xs uppercase tracking-widest mb-4">
                A Mahim Legend
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Mumbai's most loved falooda since 1994. Every cup is crafted
                with love and tradition.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-5 text-white/60">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-5 text-white/60">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/70" />
                  <span className="text-sm text-white/80">
                    Near Mahim Dargah, Mahim, Mumbai - 400016
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 text-white/70" />
                  <span className="text-sm text-white/80">+91 98765 43210</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-white/70" />
                  <span className="text-sm text-white/80">
                    5:00 PM \u2013 1:00 AM (Daily)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/70">
            <span>
              \u00a9 {new Date().getFullYear()} Baba Falooda. All rights
              reserved. Made with \u2764\ufe0f in Mumbai
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-xs"
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
