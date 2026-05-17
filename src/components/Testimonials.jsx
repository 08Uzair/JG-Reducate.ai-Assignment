import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import { TESTIMONIALS } from "../data/universityData";
import Icon from "./Icon";
import {useBreakpoint} from "../hooks/useBreakpoint.js"
export default function Testimonials() {
   const [ref, vis]    = useReveal();
  const { mobile, width } = useBreakpoint();
  const [offset, setOffset] = useState(0);
 
  const CARD_W  = mobile ? Math.min(width - 64, 340) : 340;
  const GAP     = 20;
  const STEP    = CARD_W + GAP;
  const visible = mobile ? 1 : Math.floor((Math.min(width, 1200) - 48) / STEP);
  const maxOff  = Math.max(0, (TESTIMONIALS.length - visible) * STEP);
 
  const prev = () => setOffset(o => Math.max(0, o - STEP));
  const next = () => setOffset(o => Math.min(maxOff, o + STEP));
 
  useEffect(() => { setOffset(0); }, [mobile]);
 
  return (
    <section id="testimonials" style={{ padding: mobile ? "64px 0 48px" : "100px 0", background:"var(--cream)", overflow:"hidden" }}>
      <div ref={ref} style={{ maxWidth:1200, margin:"0 auto", padding: mobile ? "0 20px" : "0 32px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:32, flexWrap:"wrap", gap:16 }}>
          <div>
            <div className={`rv ${vis ? "in" : ""}`}><span className="sec-tag">Student Stories</span></div>
            <h2 className={`rv d1 ${vis ? "in" : ""}`}
              style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: mobile ? "clamp(1.7rem,6vw,2.2rem)" : "clamp(2rem,3.5vw,2.8rem)", fontWeight:800, color:"var(--navy)", marginTop:12 }}>
              Voices That Define Us
            </h2>
          </div>
          <div className={`rv d2 ${vis ? "in" : ""}`} style={{ display:"flex", gap:10 }}>
            <button onClick={prev} disabled={offset === 0}
              style={{ width:42, height:42, borderRadius:"50%", background:"#fff", border:"1px solid var(--border)", cursor: offset===0 ? "not-allowed" : "pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Icon name="chevL" size={16} color={offset===0 ? "#ccc" : "var(--navy)"} />
            </button>
            <button onClick={next} disabled={offset >= maxOff}
              style={{ width:42, height:42, borderRadius:"50%", background: offset>=maxOff ? "#fff" : "var(--navy)", border:"1px solid " + (offset>=maxOff ? "var(--border)" : "var(--navy)"), cursor: offset>=maxOff ? "not-allowed" : "pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Icon name="chevR" size={16} color={offset>=maxOff ? "#ccc" : "#fff"} />
            </button>
          </div>
        </div>
      </div>
 
      <div style={{ overflow:"hidden", paddingLeft: mobile ? 20 : Math.max(32, (width - 1200) / 2 + 32) }}>
        <div style={{ display:"flex", gap:GAP, transition:"transform .55s cubic-bezier(.22,1,.36,1)", transform:`translateX(-${offset}px)` }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card" style={{ width:CARD_W }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                <Icon name="quote" size={28} color="var(--gold)" />
                <div style={{ display:"flex", gap:2 }}>
                  {[...Array(t.stars)].map((_, j) => <Icon key={j} name="star" size={12} color="var(--gold)" />)}
                </div>
              </div>
              <p style={{ color:"#374151", lineHeight:1.8, fontSize:".88rem", marginBottom:20 }}>{t.text}</p>
              <div style={{ display:"flex", gap:11, alignItems:"center", borderTop:"1px solid var(--border)", paddingTop:16 }}>
                <div style={{ width:42, height:42, borderRadius:"50%", background:t.clr+"1a", border:`2px solid ${t.clr}30`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, color:t.clr, fontSize:".85rem", flexShrink:0 }}>{t.init}</div>
                <div>
                  <div style={{ fontWeight:700, color:"var(--navy)", fontSize:".88rem" }}>{t.name}</div>
                  <div style={{ color:"var(--gold)", fontSize:".73rem", fontWeight:600, marginTop:2 }}>{t.prog}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

