import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import { CAMPUS_IMAGES } from "../data/universityData";
import Icon from "./Icon";
import {useBreakpoint} from "../hooks/useBreakpoint.js"
export default function Campus() {
  const [ref, vis] = useReveal();
  const { mobile, width } = useBreakpoint();
  const [offset, setOffset] = useState(0);

  const CARD_W = mobile ? width - 72 : 300;
  const GAP = 16;
  const STEP = CARD_W + GAP;
  const visible = mobile ? 1 : Math.floor((Math.min(width, 1200) - 48) / STEP);
  const maxOff = Math.max(0, (CAMPUS_IMAGES.length - visible) * STEP);

  const prev = () => setOffset((o) => Math.max(0, o - STEP));
  const next = () => setOffset((o) => Math.min(maxOff, o + STEP));

  useEffect(() => {
    setOffset(0);
  }, [mobile]);

  return (
    <section
      id="campus"
      style={{
        padding: mobile ? "64px 0 48px" : "100px 0",
        background: "var(--navy)",
        overflow: "hidden",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: mobile ? "0 20px" : "0 32px",
        }}
      >
        {}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 32,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div className={`rv ${vis ? "in" : ""}`}>
              <span className="sec-tag" style={{ color: "var(--gold)" }}>
                Campus Gallery
              </span>
            </div>
            <h2
              className={`rv d1 ${vis ? "in" : ""}`}
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: mobile
                  ? "clamp(1.7rem,6vw,2.2rem)"
                  : "clamp(2rem,3.5vw,2.8rem)",
                fontWeight: 800,
                color: "#fff",
                marginTop: 12,
              }}
            >
              Life at JG University
            </h2>
            {!mobile && (
              <p
                className={`rv d2 ${vis ? "in" : ""}`}
                style={{
                  color: "rgba(255,255,255,.5)",
                  fontSize: ".9rem",
                  marginTop: 8,
                  maxWidth: 400,
                  lineHeight: 1.75,
                }}
              >
                World-class infrastructure, innovation labs, and vibrant student
                life.
              </p>
            )}
          </div>
          <div
            className={`rv d3 ${vis ? "in" : ""}`}
            style={{ display: "flex", gap: 10, alignItems: "center" }}
          >
            <button
              onClick={prev}
              disabled={offset === 0}
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background:
                  offset === 0
                    ? "rgba(255,255,255,.06)"
                    : "rgba(255,255,255,.14)",
                border: "1px solid rgba(255,255,255,.2)",
                cursor: offset === 0 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                name="chevL"
                size={16}
                color={offset === 0 ? "rgba(255,255,255,.3)" : "#fff"}
              />
            </button>
            <button
              onClick={next}
              disabled={offset >= maxOff}
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background:
                  offset >= maxOff ? "rgba(255,255,255,.06)" : "var(--gold)",
                border: "none",
                cursor: offset >= maxOff ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                name="chevR"
                size={16}
                color={offset >= maxOff ? "rgba(255,255,255,.3)" : "#fff"}
              />
            </button>
          </div>
        </div>
      </div>

      {}
      <div
        style={{
          overflow: "hidden",
          paddingLeft: mobile ? 20 : Math.max(32, (width - 1200) / 2 + 32),
        }}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {CAMPUS_IMAGES.map((img, i) => (
            <div
              key={i}
              className="campus-card"
              style={{
                width: CARD_W,
                height: mobile ? 200 : 230,
                flexShrink: 0,
              }}
            >
              <img src={img.url} alt={img.cap} loading="lazy" />
              <div className="campus-cap">{img.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

