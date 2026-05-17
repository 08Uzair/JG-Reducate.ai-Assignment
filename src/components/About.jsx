import useReveal from "../hooks/useReveal";
import Icon from "./Icon";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
export default function About() {
  const [ref, vis] = useReveal();
  const { mobile, tablet } = useBreakpoint();
  const isMobTablet = mobile || tablet;

  const pillars = [
    {
      icon: "building",
      ic: "#3182ce",
      bg: "#ebf4ff",
      t: "Legacy Since 1965",
      s: "60 years under ASIA Charitable Trust",
    },
    {
      icon: "globe",
      ic: "#319795",
      bg: "#e6fffa",
      t: "Global Curriculum",
      s: "Internationally benchmarked programmes",
    },
    {
      icon: "rocket",
      ic: "#dd6b20",
      bg: "#fff5eb",
      t: "Startup Ecosystem",
      s: "Incubation & entrepreneurship support",
    },
    {
      icon: "shield",
      ic: "#e53e3e",
      bg: "#fff5f5",
      t: "UGC Approved",
      s: "Nationally recognised credentials",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: mobile ? "64px 20px" : "100px 32px",
        background: "var(--stone)",
      }}
    >
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: isMobTablet ? "1fr" : "1fr 1fr",
            gap: mobile ? 40 : 72,
            alignItems: "center",
          }}
        >
          {}
          <div>
            <div
              className={`rv ${vis ? "in" : ""}`}
              style={{ marginBottom: 14 }}
            >
              <span className="sec-tag">About JG University</span>
            </div>
            <h2
              className={`rv d1 ${vis ? "in" : ""}`}
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: mobile
                  ? "clamp(1.7rem,6vw,2.2rem)"
                  : "clamp(2rem,3.5vw,2.8rem)",
                fontWeight: 800,
                color: "var(--navy)",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Education That Evolves
              <br />
              With Industry Demand
            </h2>
            <p
              className={`rv d2 ${vis ? "in" : ""}`}
              style={{
                color: "var(--muted)",
                lineHeight: 1.85,
                fontSize: ".95rem",
                marginBottom: 12,
              }}
            >
              JG University is a UGC approved institution sponsored by the ASIA
              Charitable Trust — six decades of educational leadership, managing
              17 colleges and 3 schools across Gujarat.
            </p>
            <p
              className={`rv d3 ${vis ? "in" : ""}`}
              style={{
                color: "var(--muted)",
                lineHeight: 1.85,
                fontSize: ".95rem",
                marginBottom: 28,
              }}
            >
              Our pedagogy bridges cognitive learning with real-world
              application, producing graduates who are employment-ready from day
              one.
            </p>

            {}
            <div
              className={`rv d4 ${vis ? "in" : ""} pillar-grid`}
              style={{
                display: "grid",
                gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
                gap: 12,
              }}
            >
              {pillars.map((p) => (
                <div
                  key={p.t}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    background: "#fff",
                    borderRadius: 14,
                    padding: "14px 12px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: p.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={p.icon} size={17} color={p.ic} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "var(--navy)",
                        fontSize: ".84rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.t}
                    </div>
                    <div
                      style={{
                        color: "var(--muted)",
                        fontSize: ".75rem",
                        marginTop: 2,
                        lineHeight: 1.45,
                      }}
                    >
                      {p.s}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div
            className={`${isMobTablet ? "rv" : "rvr"} ${vis ? "in" : ""}`}
            style={{ position: "relative" }}
          >
            {}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                right: -12,
                bottom: -12,
                background: "var(--gold)",
                borderRadius: 22,
                opacity: 0.1,
              }}
            />
            <div
              style={{
                borderRadius: 22,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80"
                alt="JG University Campus"
                style={{
                  width: "100%",
                  height: mobile ? 240 : 440,
                  objectFit: "cover",
                }}
                loading="lazy"
              />
              {}
              <div
                className="about-img-overlay"
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  background: "rgba(255,255,255,.96)",
                  borderRadius: 14,
                  padding: "14px 16px",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    borderRight: "1px solid var(--border)",
                    paddingRight: 16,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "1.7rem",
                      fontWeight: 800,
                      color: "var(--gold)",
                      lineHeight: 1,
                    }}
                  >
                    17+
                  </div>
                  <div
                    style={{
                      fontSize: ".62rem",
                      color: "var(--muted)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginTop: 2,
                    }}
                  >
                    Colleges
                  </div>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "var(--navy)",
                      fontSize: ".85rem",
                    }}
                  >
                    ASIA Charitable Trust
                  </div>
                  <div
                    style={{
                      color: "var(--muted)",
                      fontSize: ".76rem",
                      marginTop: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    60+ years of educational excellence across Gujarat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

