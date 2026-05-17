import useReveal from "../hooks/useReveal";
import Icon from "./Icon";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
export default function CTA() {
  const [ref, vis] = useReveal();
  const { mobile } = useBreakpoint();
  const contacts = [
    { icon: "phone", ic: "#38a169", t: "+91 79 4000 0000" },
    { icon: "mail", ic: "#3182ce", t: "admissions@jguni.in" },
    { icon: "pin", ic: "#e53e3e", t: "Ahmedabad, Gujarat" },
  ];
  return (
    <section
      id="contact"
      style={{
        padding: mobile ? "72px 20px" : "110px 32px",
        background: "linear-gradient(135deg,var(--navy) 0%,#1a3a6e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=40)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(200,149,42,.16) 0%, transparent 60%)",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className={`rv ${vis ? "in" : ""}`}>
          <span className="sec-tag" style={{ color: "var(--gold-lt)" }}>
            Start Your Journey
          </span>
        </div>
        <h2
          className={`rv d1 ${vis ? "in" : ""}`}
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: mobile
              ? "clamp(1.8rem,7vw,2.6rem)"
              : "clamp(2.2rem,5vw,3.4rem)",
            fontWeight: 800,
            color: "#fff",
            marginTop: 16,
            lineHeight: 1.18,
          }}
        >
          Ready to Build a Future
          <br />
          Beyond the Ordinary?
        </h2>
        <p
          className={`rv d2 ${vis ? "in" : ""}`}
          style={{
            color: "rgba(255,255,255,.62)",
            lineHeight: 1.9,
            margin: "18px auto 36px",
            maxWidth: 500,
            fontSize: mobile ? ".93rem" : "1rem",
          }}
        >
          Join thousands of students who chose JG University for education that
          blends academic rigour with real-world relevance. Admissions 2026–27
          are open.
        </p>

        <div
          className={`rv d3 ${vis ? "in" : ""} cta-btn-row`}
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 44,
          }}
        >
          <button
            className="btn-gold"
            style={{ fontSize: ".96rem", padding: "14px 30px" }}
          >
            Apply for Admission <Icon name="arrow" size={15} color="#fff" />
          </button>
          <button
            className="btn-outline"
            style={{ fontSize: ".96rem", padding: "14px 30px" }}
          >
            Download Brochure
          </button>
        </div>

        <div
          className={`rv d4 ${vis ? "in" : ""} contact-row`}
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {contacts.map((c) => (
            <div
              key={c.t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                color: "rgba(255,255,255,.65)",
                fontSize: ".88rem",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: c.ic + "22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name={c.icon} size={14} color={c.ic} />
              </div>
              {c.t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

