import useReveal from "../hooks/useReveal";
import useAutoSlide from "../hooks/useAutoSlide";
import { HERO_SLIDES } from "../data/universityData";
import Icon from "./Icon";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
export default function Hero() {
  const [idx, setIdx] = useAutoSlide(HERO_SLIDES.length, 5000);
  const [ref, vis] = useReveal(0);
  const { mobile } = useBreakpoint();
  const sl = HERO_SLIDES[idx];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--navy)",
        overflow: "hidden",
      }}
    >
      {}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === idx ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.url})` }}
        />
      ))}
      {}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(110deg, rgba(13,31,60,.94) 0%, rgba(13,31,60,.72) 55%, rgba(13,31,60,.48) 100%)",
        }}
      />

      {}
      {!mobile && (
        <div
          className="float-y"
          style={{
            position: "absolute",
            top: "18%",
            right: "8%",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "1.5px solid rgba(200,149,42,.22)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      )}

      {}
      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: mobile ? "100px 20px 60px" : "0 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {}
        <div className={`rv ${vis ? "in" : ""}`} style={{ marginBottom: 18 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(200,149,42,.14)",
              border: "1px solid rgba(200,149,42,.3)",
              borderRadius: 100,
              padding: "6px 16px",
            }}
          >
            <div
              className="pulse-dot"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--gold)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "var(--gold-lt)",
                fontSize: ".7rem",
                fontWeight: 700,
                letterSpacing: ".13em",
                textTransform: "uppercase",
              }}
            >
              {sl.tag}
            </span>
          </div>
        </div>

        {}
        <h1
          className={`rv d1 ${vis ? "in" : ""}`}
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: mobile
              ? "clamp(2rem,8vw,3rem)"
              : "clamp(2.8rem,6vw,4.8rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.12,
            marginBottom: 18,
            whiteSpace: "pre-line",
          }}
        >
          {sl.heading}
        </h1>

        {}
        <p
          className={`rv d2 ${vis ? "in" : ""}`}
          style={{
            fontSize: mobile ? ".95rem" : "1.05rem",
            color: "rgba(255,255,255,.7)",
            lineHeight: 1.85,
            maxWidth: 560,
            marginBottom: 30,
          }}
        >
          {sl.sub}
        </p>

        {}
        <div
          className={`rv d3 ${vis ? "in" : ""} hero-btns`}
          style={{
            display: "flex",
            gap: 12,
            marginBottom: mobile ? 36 : 56,
            flexWrap: "wrap",
          }}
        >
          <button className="btn-gold">
            Explore Programs <Icon name="arrow" size={15} color="#fff" />
          </button>
          <button className="btn-outline">
            <Icon name="play" size={16} color="#fff" /> Virtual Tour
          </button>
        </div>

        {}
        <div
          className={`rv d4 ${vis ? "in" : ""} hero-stat-strip`}
          style={{
            display: "flex",
            borderTop: "1px solid rgba(255,255,255,.12)",
            paddingTop: 24,
            gap: 0,
          }}
        >
          {[
            { v: "17+", l: "Colleges" },
            { v: "50+", l: "Programs" },
            { v: "5K+", l: "Students" },
            { v: "95%", l: "Placements" },
          ].map((st, i) => (
            <div
              key={st.l}
              className="stat-divider"
              style={{
                flex: "1 1 0",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,.12)" : "none",
                paddingRight: 16,
                paddingLeft: i > 0 ? 16 : 0,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: mobile ? "1.8rem" : "2.2rem",
                  fontWeight: 800,
                  color: "var(--gold-lt)",
                  lineHeight: 1,
                }}
              >
                {st.v}
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  color: "rgba(255,255,255,.48)",
                  marginTop: 3,
                  fontWeight: 600,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                }}
              >
                {st.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {}
      <div
        style={{
          position: "absolute",
          bottom: mobile ? 16 : 32,
          right: mobile ? 16 : 32,
          zIndex: 4,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <button
          onClick={() =>
            setIdx((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
          }
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(255,255,255,.12)",
            border: "1px solid rgba(255,255,255,.24)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="chevL" size={16} color="#fff" />
        </button>
        {HERO_SLIDES.map((_, i) => (
          <div
            key={i}
            className={`hero-dot ${i === idx ? "on" : ""}`}
            onClick={() => setIdx(i)}
          />
        ))}
        <button
          onClick={() => setIdx((i) => (i + 1) % HERO_SLIDES.length)}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(255,255,255,.12)",
            border: "1px solid rgba(255,255,255,.24)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="chevR" size={16} color="#fff" />
        </button>
      </div>

      {}
      {!mobile && (
        <div
          style={{
            position: "absolute",
            bottom: 38,
            left: 36,
            zIndex: 4,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "1.9rem",
              fontWeight: 800,
              color: "var(--gold-lt)",
            }}
          >
            0{idx + 1}
          </span>
          <div
            style={{
              width: 40,
              height: 1,
              background: "rgba(255,255,255,.28)",
            }}
          />
          <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.36)" }}>
            0{HERO_SLIDES.length}
          </span>
        </div>
      )}
    </section>
  );
}

