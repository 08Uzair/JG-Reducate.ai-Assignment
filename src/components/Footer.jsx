import Icon from "./Icon";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
export default function Footer() {
  const { mobile } = useBreakpoint();
  const cols = {
    Programs: [
      "BBA & MBA",
      "B.Tech Courses",
      "MCA & MSc IT",
      "B.Com & M.Com",
      "Certificate Courses",
      "PhD Programs",
    ],
    Explore: [
      "About JG University",
      "Campus Life",
      "Research & Innovation",
      "Industry Partners",
      "Alumni Network",
      "Faculty",
    ],
    Connect: [
      "Admissions Office",
      "Student Portal",
      "Events & Webinars",
      "Career Services",
      "Media & Press",
      "Contact Us",
    ],
  };
  return (
    <footer
      style={{
        background: "#08111f",
        padding: mobile ? "48px 20px 24px" : "60px 32px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.5fr 1fr 1fr 1fr",
            gap: mobile ? 32 : 36,
            marginBottom: 44,
          }}
        >
          {}
          <div className="footer-brand">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 9,
                  background: "linear-gradient(135deg,#c8952a,#e6b040)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name="graduation" size={17} color="#fff" />
              </div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#fff",
                }}
              >
                JG University
              </span>
            </div>
            <p
              style={{
                fontSize: ".82rem",
                lineHeight: 1.85,
                maxWidth: 240,
                color: "rgba(255,255,255,.38)",
              }}
            >
              A new-age, tech-driven university preparing the next generation of
              global leaders through experiential education.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              {[
                { n: "globe", c: "#3182ce" },
                { n: "mail", c: "#38a169" },
                { n: "phone", c: "#dd6b20" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: s.c + "18",
                    border: `1px solid ${s.c}28`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Icon name={s.n} size={15} color={s.c} />
                </div>
              ))}
            </div>
          </div>

          {}
          {Object.entries(cols).map(([sec, links]) => (
            <div key={sec}>
              <div
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: ".74rem",
                  letterSpacing: ".09em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {sec}
              </div>
              {links.map((l) => (
                <div key={l} style={{ marginBottom: 9 }}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255,255,255,.38)",
                      textDecoration: "none",
                      fontSize: ".82rem",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--gold-lt)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,.38)")
                    }
                  >
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {}
        <div
          className="footer-legal"
          style={{
            borderTop: "1px solid rgba(255,255,255,.07)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p style={{ fontSize: ".74rem", color: "rgba(255,255,255,.24)" }}>
            © 2026 JG University · UGC Approved · ASIA Charitable Trust · All
            rights reserved.
          </p>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(255,255,255,.24)",
                  fontSize: ".72rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,.6)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,.24)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

