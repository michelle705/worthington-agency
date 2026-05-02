import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Navigation } from "@/components/Navigation";

const CDN = "https://worthington-agency-v1777320173.websitepro-cdn.com";
const SITE = "https://worthington.marketingservices.dev";

const NAVY_DARK = "#141E32";
const NAVY = "#1C2B47";
const GOLD = "#C4963A";
const GOLD_DARK = "#A07828";
const CREAM = "#F5F1E8";
const CREAM_MID = "#E2D9C8";
const BORDER = "#D5CCBA";

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'Montserrat', sans-serif";

const contactSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Required"),
  message: z.string().min(5, "Required"),
});
type ContactForm = z.infer<typeof contactSchema>;

const scroll = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", margin: "0 auto 40px" }}>
      <div style={{ width: 60, height: 1, background: BORDER }} />
      <div style={{ width: 6, height: 6, background: GOLD, transform: "rotate(45deg)" }} />
      <div style={{ width: 60, height: 1, background: BORDER }} />
    </div>
  );
}

function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", margin: "0 auto 40px" }}>
      <div style={{ width: 60, height: 1, background: "rgba(196,150,58,0.4)" }} />
      <div style={{ width: 6, height: 6, background: GOLD, transform: "rotate(45deg)" }} />
      <div style={{ width: 60, height: 1, background: "rgba(196,150,58,0.4)" }} />
    </div>
  );
}

export default function Home() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", message: "" },
  });

  function onSubmit(values: ContactForm) {
    console.log(values);
    toast.success("Thank you! We'll be in touch shortly.");
    form.reset();
  }

  return (
    <div style={{ fontFamily: sans }}>
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          background: NAVY_DARK,
          backgroundImage: `
            radial-gradient(ellipse at 30% 40%, rgba(31,48,85,0.8) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 60%, rgba(20,30,50,0.6) 0%, transparent 60%)
          `,
          position: "relative",
          padding: "72px 24px 96px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 7px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 7px)
            `,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
          {/* Large premium logo */}
          <img
            src={`${CDN}/wp-content/uploads/2026/03/logo.webp`}
            alt="Worthington Agency"
            style={{
              height: "clamp(200px, 28vw, 320px)",
              width: "auto",
              maxWidth: 600,
              margin: "0 auto 32px",
              display: "block",
              filter: "sepia(0.15) saturate(1.5) hue-rotate(-5deg) brightness(1.12)",
              animation: "fadeUp 0.8s ease both",
            }}
          />

          {/* Coming badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(196,150,58,0.4)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 28,
              animation: "fadeUp 0.8s 0.1s ease both",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: GOLD,
                animation: "pulse 2s infinite",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: GOLD,
                fontFamily: sans,
              }}
            >
              Zephyrhills, FL
            </span>
          </div>

          <h1
            style={{
              fontFamily: serif,
              fontSize: "clamp(48px, 7.5vw, 80px)",
              fontWeight: 600,
              fontStyle: "italic",
              color: CREAM_MID,
              lineHeight: 1.1,
              marginBottom: 16,
              animation: "fadeUp 0.8s 0.2s ease both",
            }}
          >
            Where Insurance Feels Personal Again
          </h1>

          <p
            style={{
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 500,
              margin: "0 auto 40px",
              animation: "fadeUp 0.8s 0.3s ease both",
              fontFamily: sans,
            }}
          >
            Protect what matters most with guidance you can trust. Worthington Agency provides
            tailored insurance for home, auto, life, and business that fits your needs.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeUp 0.8s 0.4s ease both",
            }}
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scroll("#contact"); }}
              data-testid="button-get-quote"
              style={{
                background: GOLD,
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: 2,
                border: `1px solid ${GOLD}`,
                transition: "all 0.2s",
                fontFamily: sans,
              }}
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:8137837288"
              data-testid="button-speak-agent"
              style={{
                background: "transparent",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.35)",
                transition: "all 0.2s",
                fontFamily: sans,
              }}
            >
              Speak With an Agent
            </a>
          </div>

          {/* Bottom rule */}
          <div
            style={{
              width: 60,
              height: 2,
              background: `linear-gradient(90deg, ${GOLD_DARK}, ${GOLD})`,
              margin: "52px auto 0",
              opacity: 0.5,
            }}
          />
        </div>
      </section>

      {/* ── HOME & AUTO — SPLIT ───────────────────────────────────────────── */}
      <section
        style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", minHeight: 540 }}>
          {/* Left: photo */}
          <div
            style={{
              flex: "1 1 380px",
              minHeight: 380,
              backgroundImage: `url(/founder.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
          {/* Right: content */}
          <div
            style={{
              flex: "1 1 380px",
              background: NAVY_DARK,
              display: "flex",
              alignItems: "center",
              padding: "72px 56px",
            }}
          >
            <div style={{ maxWidth: 440 }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "3.5px",
                  textTransform: "uppercase",
                  color: GOLD,
                  marginBottom: 16,
                  fontFamily: sans,
                }}
              >
                Florida Specialists
              </p>
              <h2
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(30px, 3.5vw, 44px)",
                  fontWeight: 600,
                  color: CREAM_MID,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                Home and auto insurance just for Floridians
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.85,
                  marginBottom: 36,
                  fontFamily: sans,
                }}
              >
                Save money and get the ease of one bill, one deductible and one contact with
                insurance through AAA.
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scroll("#contact"); }}
                data-testid="button-learn-more"
                style={{
                  display: "inline-block",
                  background: GOLD,
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "13px 28px",
                  borderRadius: 2,
                  fontFamily: sans,
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE THAT FITS YOUR LIFE ─────────────────────────────────── */}
      <section id="coverage" style={{ background: CREAM, padding: "88px 48px", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "3.5px",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 16,
                fontFamily: sans,
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 600,
                color: NAVY,
                marginBottom: 20,
              }}
            >
              Coverage That Fits Your Life
            </h2>
            <Divider />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: 0,
              border: `1px solid ${BORDER}`,
              background: BORDER,
            }}
          >
            {[
              {
                img: `${CDN}/wp-content/uploads/2026/04/home-insurance-image.webp`,
                title: "Home Insurance",
                desc: "Your home is more than a structure; it's where life happens. We help you protect it with coverage that accounts for expected and unexpected moments.",
              },
              {
                img: `${CDN}/wp-content/uploads/2026/04/auto-insurance-image.webp`,
                title: "Auto Insurance",
                desc: "From daily commutes to long road trips, we'll help you find coverage that keeps you moving forward with confidence.",
              },
              {
                img: `${CDN}/wp-content/uploads/2026/04/life-insurance-image.webp`,
                title: "Life Insurance",
                desc: "Protecting the people you love most is what life insurance is truly about: providing security when it matters most.",
              },
              {
                img: `${CDN}/wp-content/uploads/2026/04/commercial-insurance-image.webp`,
                title: "Commercial Insurance",
                desc: "Your business deserves protection that works as hard as you do. We provide coverage solutions tailored to your industry and goals.",
              },
              {
                img: `${CDN}/wp-content/uploads/2026/04/person-working-on-laptop.webp`,
                title: "Other Services",
                desc: "Go beyond insurance with added services that support your finances, travel, and everyday needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CREAM,
                  padding: "44px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: `1px solid rgba(196,150,58,0.3)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: 52, height: 52, objectFit: "cover" }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: serif,
                    fontSize: 20,
                    fontWeight: 600,
                    color: NAVY,
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: "#3A4D6A", lineHeight: 1.75, fontFamily: sans }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER / ABOUT ───────────────────────────────────────────────── */}
      <section
        id="about"
        style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
      >
        <div style={{ background: CREAM, padding: "88px 48px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "3.5px",
                  textTransform: "uppercase",
                  color: GOLD,
                  marginBottom: 16,
                  fontFamily: sans,
                }}
              >
                About Us
              </p>
              <h2
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(30px, 3.5vw, 44px)",
                  fontWeight: 600,
                  color: NAVY,
                  lineHeight: 1.15,
                  marginBottom: 22,
                }}
              >
                Insurance, Built Around People – Not Policies
              </h2>
              <p style={{ fontSize: 14, color: "#3A4D6A", lineHeight: 1.85, marginBottom: 16, fontFamily: sans }}>
                At Worthington Agency, we believe insurance should feel simple, supportive, and
                personal. That's why we take the time to understand your story before recommending
                any coverage.
              </p>
              <p style={{ fontSize: 14, color: "#3A4D6A", lineHeight: 1.85, marginBottom: 16, fontFamily: sans }}>
                We proudly offer a full range of insurance solutions, helping individuals,
                families, and businesses protect what matters most. Our approach is straightforward:
                listen carefully, explain clearly, and guide you with honesty every step of the way.
              </p>
              <p style={{ fontSize: 14, color: "#3A4D6A", lineHeight: 1.85, marginBottom: 36, fontFamily: sans }}>
                Because when insurance feels personal again, everything changes — you feel
                confident, informed, and truly protected.
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scroll("#contact"); }}
                data-testid="button-lets-talk"
                style={{
                  display: "inline-block",
                  background: GOLD,
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "13px 28px",
                  borderRadius: 2,
                  fontFamily: sans,
                }}
              >
                Let's Talk
              </a>
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ─────────────────────────────────────────────────── */}
      <section
        id="team"
        style={{ background: CREAM, padding: "88px 48px", borderBottom: `1px solid ${BORDER}` }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "3.5px",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 16,
                fontFamily: sans,
              }}
            >
              Our People
            </p>
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 600,
                color: NAVY,
                marginBottom: 20,
              }}
            >
              Meet the Team
            </h2>
            <Divider />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 1, background: BORDER }}>
            {[
              {
                img: `${CDN}/wp-content/uploads/2026/04/Fareshta-Majid.webp`,
                name: "Fareshta Majid",
                bio: "Fareshta Majid is a Business Management graduate with a minor in Organizational Leadership, bringing nearly a decade of sales experience, including six years in real estate. Known for her client-first approach, she has earned multiple awards for excellence by consistently delivering results with professionalism and care.\n\nCertified in project management, Fareshta combines strong organizational skills with the ability to lead initiatives, manage timelines, and execute with precision. She is deeply committed to providing exceptional customer service, ensuring every client experience is thoughtful, seamless, and detail-driven.\n\nGrounded in integrity and a strong ethical foundation, Fareshta approaches every opportunity with honesty, discipline, and a drive for continuous growth. Outside of her career, she is a devoted wife and mother who values family, faith, and community—principles that guide both her personal life and professional impact.",
              },
              {
                img: `${CDN}/wp-content/uploads/2026/04/Rodney-Bueno.webp`,
                name: "Rodney Bueno",
                bio: "Rodney Bueno brings over 10 years of experience in the insurance industry, beginning his career with New York Life in life insurance before transitioning into property and casualty with AAA (Auto Club Group). With a strong background supporting both agents and clients, Rodney is known for building genuine relationships and delivering dependable, client-focused service.\n\nHis experience and dedication allow him to provide well-rounded guidance and a seamless experience for every client he works with.\n\nOutside of insurance, Rodney is an accomplished vocalist with recording and stage experience. As a founding member and current board member of the Wesley Chapel Theater Group, he has been actively involved in producing local shows for over five years, contributing to the arts and community he proudly serves.",
              },
            ].map((member) => (
              <div
                key={member.name}
                style={{ background: CREAM, display: "flex", flexDirection: "column" }}
              >
                <div style={{ overflow: "hidden", maxHeight: 340 }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", height: 340, objectFit: "cover", objectPosition: "top", display: "block" }}
                  />
                </div>
                <div style={{ padding: "40px 40px 48px", borderTop: `3px solid ${GOLD}` }}>
                  <h3
                    style={{
                      fontFamily: serif,
                      fontSize: 26,
                      fontWeight: 600,
                      color: NAVY,
                      marginBottom: 20,
                    }}
                  >
                    {member.name}
                  </h3>
                  {member.bio.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: 13,
                        color: "#3A4D6A",
                        lineHeight: 1.85,
                        marginBottom: 14,
                        fontFamily: sans,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ─────────────────────────────────────────────────── */}
      <section style={{ background: CREAM_MID, padding: "88px 48px", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 600,
                color: NAVY,
                marginBottom: 20,
              }}
            >
              Our Promise to You
            </h2>
            <Divider />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              background: BORDER,
              border: `1px solid ${BORDER}`,
            }}
          >
            {[
              {
                img: `${CDN}/wp-content/uploads/2026/04/Personalized-People-First-Approach.webp`,
                title: "Personalized, People-First Approach",
                desc: "We take the time to understand your needs and build coverage around your life, not just your policy.",
              },
              {
                img: `${CDN}/wp-content/uploads/2026/04/Clear-Guidance-No-Confusion.webp`,
                title: "Clear Guidance, No Confusion",
                desc: "Insurance can feel overwhelming. We simplify your options and explain everything in plain, honest language.",
              },
              {
                img: `${CDN}/wp-content/uploads/2026/04/Support-That-Stays-With-You.webp`,
                title: "Support That Stays With You",
                desc: "From your first quote to future updates, we're here with responsive service and ongoing support you can rely on.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  background: CREAM,
                  padding: "48px 36px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: `1px solid rgba(196,150,58,0.3)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    style={{ width: 72, height: 72, objectFit: "cover" }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: serif,
                    fontSize: 22,
                    fontWeight: 600,
                    color: NAVY,
                    marginBottom: 14,
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontSize: 13, color: "#3A4D6A", lineHeight: 1.75, fontFamily: sans }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS ───────────────────────────────────────────── */}
      <section
        id="testimonials"
        style={{
          background: NAVY_DARK,
          padding: "88px 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 7px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 7px)
            `,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "3.5px",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 16,
                fontFamily: sans,
              }}
            >
              Testimonials
            </p>
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 600,
                fontStyle: "italic",
                color: CREAM_MID,
                marginBottom: 20,
              }}
            >
              What Our Clients Say
            </h2>
            <GoldDivider />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "rgba(196,150,58,0.15)" }}>
            {[
              '"My agent Philena made it happen! I now have a great policy at a good savings. She made the process so easy. Should have done this sooner!"',
              '"Philena (my agent) was absolutely wonderful with communication and finding the best policy for my individual needs. Because of the way she treated me, I switched from another agency to AAA. I have already recommended this agency to my family members."',
              '"Philena Worthington is such a great agent and made my purchase experience about as easy as any one could possible imagine. She also saved me money which is great."',
            ].map((quote, i) => (
              <div
                key={i}
                style={{
                  background: NAVY,
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
                data-testid={`card-testimonial-${i}`}
              >
                {/* Gold quote mark */}
                <div
                  style={{
                    fontFamily: serif,
                    fontSize: 64,
                    color: GOLD,
                    lineHeight: 0.8,
                    marginBottom: 24,
                    opacity: 0.6,
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    fontFamily: serif,
                    fontSize: 17,
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                    flex: 1,
                  }}
                >
                  {quote}
                </p>
                <div style={{ display: "flex", gap: 3 }}>
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} style={{ color: GOLD, fontSize: 14 }}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR RESOURCES ─────────────────────────────────────────────────── */}
      <section
        id="resources"
        style={{ background: CREAM, padding: "88px 48px", borderBottom: `1px solid ${BORDER}` }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 16,
              fontFamily: sans,
            }}
          >
            Learn More
          </p>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 600,
              color: NAVY,
              marginBottom: 20,
            }}
          >
            Our Resources
          </h2>
          <Divider />
          <p
            style={{
              fontSize: 14,
              color: "#3A4D6A",
              lineHeight: 1.85,
              marginBottom: 36,
              fontFamily: sans,
            }}
          >
            Stay informed with helpful tips, simple explanations, and real-world advice to help
            you make smarter insurance decisions.
          </p>
          <a
            href="https://worthington.marketingservices.dev/resources/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-learn-more-resources"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "13px 32px",
              borderRadius: 2,
              fontFamily: sans,
            }}
          >
            Learn More
          </a>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: NAVY_DARK,
          padding: "88px 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 7px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 7px)
            `,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 16,
              fontFamily: sans,
            }}
          >
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(30px, 4.5vw, 52px)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Let's Talk About What Matters to You
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              marginBottom: 40,
              fontFamily: sans,
            }}
          >
            Ready to protect what matters most? Reach out and we'll find the right coverage for
            your family, home, or business.
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, textAlign: "left", marginBottom: 48 }}
          >
            {([
              { field: "firstName" as const, label: "First Name", placeholder: "First Name", type: "text" },
              { field: "lastName" as const, label: "Last Name", placeholder: "Last Name", type: "text" },
              { field: "email" as const, label: "Email", placeholder: "Email", type: "email" },
              { field: "phone" as const, label: "Phone", placeholder: "Phone", type: "tel" },
            ] as const).map(({ field, label, placeholder, type }) => (
              <div key={field}>
                <label
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: 6,
                    fontFamily: sans,
                  }}
                >
                  {label}
                </label>
                <input
                  {...form.register(field)}
                  data-testid={`input-${field.replace(/([A-Z])/g, "-$1").toLowerCase()}`}
                  placeholder={placeholder}
                  type={type}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: 13,
                    color: NAVY,
                    background: CREAM,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 2,
                    outline: "none",
                    fontFamily: sans,
                  }}
                />
                {form.formState.errors[field] && (
                  <p style={{ color: "#f87171", fontSize: 11, marginTop: 4 }}>
                    {form.formState.errors[field]?.message}
                  </p>
                )}
              </div>
            ))}
            <div style={{ gridColumn: "1 / -1" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 6,
                  fontFamily: sans,
                }}
              >
                Message
              </label>
              <textarea
                {...form.register("message")}
                data-testid="input-message"
                placeholder="Tell us what you need..."
                rows={4}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontSize: 13,
                  color: NAVY,
                  background: CREAM,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 2,
                  outline: "none",
                  resize: "vertical",
                  fontFamily: sans,
                }}
              />
              {form.formState.errors.message && (
                <p style={{ color: "#f87171", fontSize: 11, marginTop: 4 }}>
                  {form.formState.errors.message?.message}
                </p>
              )}
            </div>
            <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
              <button
                type="submit"
                data-testid="button-submit"
                style={{
                  background: GOLD,
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "14px 40px",
                  borderRadius: 2,
                  border: `1px solid ${GOLD}`,
                  cursor: "pointer",
                  fontFamily: sans,
                }}
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact details */}
          <div
            style={{
              display: "flex",
              gap: 28,
              justifyContent: "center",
              flexWrap: "wrap",
              paddingTop: 32,
              borderTop: "1px solid rgba(196,150,58,0.2)",
            }}
          >
            {[
              { icon: "📞", text: "(813) 783-7288", href: "tel:8137837288" },
              { icon: "✉", text: "Info@worthington.agency", href: "mailto:Info@worthington.agency" },
              { icon: "📍", text: "35366 Pure Water Way, Zephyrhills FL 33541", href: "#" },
            ].map((c) => (
              <a
                key={c.text}
                href={c.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  fontFamily: sans,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: NAVY_DARK,
          borderTop: "1px solid rgba(196,150,58,0.2)",
          padding: "28px 48px",
        }}
      >
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <img
            src={`${CDN}/wp-content/uploads/2026/03/logo.webp`}
            alt="Worthington Agency"
            style={{ height: 36, width: "auto", opacity: 0.65 }}
          />
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {["Home Insurance", "Auto Insurance", "Life Insurance", "Commercial"].map((s, i, arr) => (
              <span key={s} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: sans }}>
                  {s}
                </span>
                {i < arr.length - 1 && <span style={{ color: GOLD, opacity: 0.4, fontSize: 10 }}>◆</span>}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { label: "Facebook", href: "https://www.facebook.com/people/Worthington-Agency/61583586433297/" },
              { label: "Instagram", href: "https://www.instagram.com/worthington_agency/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/worhtington-agency" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  fontFamily: sans,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            maxWidth: 1040,
            margin: "20px auto 0",
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)", fontFamily: sans }}>
            © {new Date().getFullYear()} Worthington Agency. All rights reserved.
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)", fontFamily: sans }}>
            Designed by Shark Branding Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
