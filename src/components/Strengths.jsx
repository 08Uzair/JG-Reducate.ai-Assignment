import useReveal from "../hooks/useReveal";
import { STRENGTHS } from "../data/universityData";
import Icon from "./Icon";
import {useBreakpoint} from "../hooks/useBreakpoint.js"
export default function Strengths() {
  const [ref, vis] = useReveal();
  const { mobile } = useBreakpoint();

  return (
    <section
      style={{
        padding: mobile ? "64px 20px" : "100px 32px",
        background: "var(--stone)",
      }}
    >
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className={`rv ${vis ? "in" : ""}`}>
            <span className="sec-tag">Our Strengths</span>
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
              marginTop: 12,
            }}
          >
            The JG Difference
          </h2>
        </div>
        <div
          className="strengths-grid"
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)",
            gap: 16,
          }}
        >
          {STRENGTHS.map((s, i) => (
            <div
              key={s.num}
              className={`card rv d${i + 1} ${vis ? "in" : ""}`}
              style={{ padding: "28px 24px" }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <Icon name={s.icon} size={24} color={s.ic} />
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  color: "var(--navy)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  color: s.ic,
                  fontSize: ".74rem",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  margin: "6px 0 9px",
                }}
              >
                {s.label}
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: ".85rem",
                  lineHeight: 1.75,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

