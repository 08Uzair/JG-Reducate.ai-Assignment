import { useEffect, useState } from "react";
import Icon from "./Icon";
import {useBreakpoint} from "../hooks/useBreakpoint.js"
export default function Navbar() {
 const [solid, setSolid] = useState(false);
  const [open, setOpen]   = useState(false);
  const { mobile } = useBreakpoint();
 
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
 
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
    setOpen(false);
  };
 
  const links = [
    { id:"about",        label:"About"     },
    { id:"programs",     label:"Programs"  },
    { id:"campus",       label:"Campus"    },
    { id:"testimonials", label:"Alumni"    },
    { id:"contact",      label:"Contact"   },
  ];
 
  const logoColor = solid ? "var(--navy)" : "#fff";
  const linkColor = solid ? "var(--navy)" : "rgba(255,255,255,.88)";
 
  return (
    <>
      <nav className={`navbar ${solid ? "solid" : ""}`}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", height:68 }}>
          {}
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:40, height:40, borderRadius:10, background:"linear-gradient(135deg,#c8952a,#e6b040)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Icon name="graduation" size={19} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:700, fontSize:"1.05rem", color:logoColor, lineHeight:1.15 }}>JG University</div>
              <div style={{ fontSize:".58rem", fontWeight:600, color:solid ? "var(--gold)" : "rgba(240,208,128,.8)", letterSpacing:".1em", textTransform:"uppercase" }}>UGC Approved · Est. 1965</div>
            </div>
          </div>
 
          {}
          {!mobile && (
            <div style={{ display:"flex", gap:24, alignItems:"center" }}>
              {links.map(l => (
                <button key={l.id} className="nav-link" onClick={() => go(l.id)} style={{ color:linkColor }}>{l.label}</button>
              ))}
              <button className="btn-gold" onClick={() => go("contact")} style={{ padding:"10px 20px", fontSize:".84rem" }}>
                Apply Now <Icon name="arrow" size={14} color="#fff" />
              </button>
            </div>
          )}
 
          {}
          {mobile && (
            <button onClick={() => setOpen(o => !o)} style={{ background:"none", border:"none", cursor:"pointer", padding:6, display:"flex", alignItems:"center" }}>
              {open
                ? <Icon name="close" size={22} color={solid ? "var(--navy)" : "#fff"} />
                : <Icon name="menu"  size={22} color={solid ? "var(--navy)" : "#fff"} />
              }
            </button>
          )}
        </div>
      </nav>
 
      {}
      {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}
      <div className={`drawer ${open ? "open" : ""}`}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:68, borderBottom:"1px solid var(--border)", flexShrink:0 }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:700, fontSize:"1.1rem", color:"var(--navy)" }}>JG University</div>
          <button onClick={() => setOpen(false)} style={{ background:"none", border:"none", cursor:"pointer", padding:4 }}>
            <Icon name="close" size={20} color="var(--navy)" />
          </button>
        </div>
        <div style={{ flex:1, overflowY:"auto", paddingTop:16, display:"flex", flexDirection:"column", gap:4 }}>
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              style={{ background:"none", border:"none", textAlign:"left", padding:"14px 0", fontSize:"1rem", fontWeight:600, color:"var(--navy)", borderBottom:"1px solid var(--border)", cursor:"pointer", fontFamily:"inherit" }}>
              {l.label}
            </button>
          ))}
          <button className="btn-gold" onClick={() => go("contact")} style={{ marginTop:24, justifyContent:"center", padding:"14px" }}>
            Apply Now <Icon name="arrow" size={15} color="#fff" />
          </button>
        </div>
      </div>
    </>
  );
}

