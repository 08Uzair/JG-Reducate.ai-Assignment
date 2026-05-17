import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { PROGRAMS } from "../data/universityData";
import Icon from "./Icon";
import {useBreakpoint} from "../hooks/useBreakpoint.js"
export default function Programs() {
  const [ref, vis] = useReveal();
  const [tab, setTab] = useState(0);
  const { mobile } = useBreakpoint();
  const p = PROGRAMS[tab];

  return (
    <section
      id="programs"
      style={{
        padding: mobile ? "64px 20px" : "100px 32px",
        background: "var(--cream)",
      }}
    >
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
        {}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className={`rv ${vis ? "in" : ""}`}>
            <span className="sec-tag">Academic Programmes</span>
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
              lineHeight: 1.2,
            }}
          >
            Programmes Designed for
            <br />
            Tomorrow's Leaders
          </h2>
          <p
            className={`rv d2 ${vis ? "in" : ""}`}
            style={{
              color: "var(--muted)",
              maxWidth: 460,
              margin: "12px auto 0",
              lineHeight: 1.8,
              fontSize: ".93rem",
            }}
          >
            Every curriculum built for future industry needs — from foundations
            to frontiers.
          </p>
        </div>

        {}
        <div
          className={`rv d3 ${vis ? "in" : ""}`}
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {PROGRAMS.map((pr, i) => (
            <button
              key={pr.tab}
              className={`prog-tab ${tab === i ? "on" : ""}`}
              onClick={() => setTab(i)}
            >
              <Icon
                name={pr.icon}
                size={15}
                color={tab === i ? "#fff" : pr.ic}
              />
              {pr.tab}
            </button>
          ))}
        </div>

        {}
        <div
          className={`rv d4 ${vis ? "in" : ""} prog-grid`}
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)",
            gap: 12,
          }}
        >
          {p.courses.map((c) => (
            <div
              key={c.name}
              className="card"
              style={{
                padding: "18px 16px",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: p.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name={c.icon} size={19} color={c.ic} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 700,
                    color: "var(--navy)",
                    fontSize: ".86rem",
                    lineHeight: 1.35,
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 7,
                    background: p.bg,
                    borderRadius: 100,
                    padding: "3px 10px",
                  }}
                >
                  <Icon name="check" size={12} color={p.ic} />
                  <span
                    style={{ fontSize: ".68rem", color: p.ic, fontWeight: 700 }}
                  >
                    {c.dur}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`rv d5 ${vis ? "in" : ""}`}
          style={{ textAlign: "center", marginTop: 32 }}
        >
          <button className="btn-gold">
            View All Programmes <Icon name="arrow" size={15} color="#fff" />
          </button>
        </div>
      </div>
    </section>
  );
}

