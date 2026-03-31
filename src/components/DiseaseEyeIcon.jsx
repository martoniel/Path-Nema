/**
 * DiseaseEyeIcon
 * Renders a unique mini SVG eye illustration for each disease type.
 * Drop-in replacement for {disease.icon} emoji in DiseaseCard.
 *
 * Usage:
 *   import DiseaseEyeIcon from './DiseaseEyeIcon'
 *   <DiseaseEyeIcon name={disease.name} size={28} />
 */

const ICONS = {

  conjunctivitis: ({ s }) => (
    // Bloodshot — red vessels across white sclera
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="#fff0f0"/>
      {/* blood vessels */}
      <path d="M3 10 Q8 8 13 12"  stroke="#e05050" strokeWidth="1"   fill="none" opacity="0.8"/>
      <path d="M3 13 Q7 16 12 14" stroke="#e05050" strokeWidth="0.8" fill="none" opacity="0.7"/>
      <path d="M37 10 Q32 8 27 12"  stroke="#e05050" strokeWidth="1"   fill="none" opacity="0.8"/>
      <path d="M37 14 Q32 16 27 13" stroke="#e05050" strokeWidth="0.8" fill="none" opacity="0.7"/>
      <path d="M15 4 Q17 8 18 12"  stroke="#e05050" strokeWidth="0.7" fill="none" opacity="0.5"/>
      {/* iris */}
      <circle cx="20" cy="12" r="6.5" fill="#5a7a6a"/>
      <circle cx="20" cy="12" r="4"   fill="#111"/>
      <circle cx="22" cy="10" r="1.5" fill="white" opacity="0.6"/>
      {/* eyelids */}
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  cataract: ({ s }) => (
    // Cloudy milky lens
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7" fill="#7a9080"/>
      {/* cloudy overlay */}
      <circle cx="20" cy="12" r="6.5" fill="#ddd8b8" opacity="0.9"/>
      {/* spokes */}
      <path d="M20 6 Q20.5 9 20 12"  stroke="#c8b070" strokeWidth="2"   fill="none" opacity="0.6"/>
      <path d="M25 8 Q22 10 20 12"   stroke="#c8b070" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M15 8 Q18 10 20 12"   stroke="#c8b070" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M20 18 Q19.5 15 20 12" stroke="#d0c080" strokeWidth="1.5" fill="none" opacity="0.4"/>
      {/* dim pupil */}
      <circle cx="20" cy="12" r="2.5" fill="#302818" opacity="0.6"/>
      <circle cx="21.5" cy="10.5" r="1" fill="white" opacity="0.3"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  glaucoma: ({ s }) => (
    // Dilated pupil + pressure halos
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7"  fill="#8899aa"/>
      {/* enlarged pupil */}
      <circle cx="20" cy="12" r="5.5" fill="#08080e"/>
      {/* halo rings */}
      <circle cx="20" cy="12" r="7"  fill="none" stroke="#aabbee" strokeWidth="1.2" strokeDasharray="2 1.5" opacity="0.8"/>
      <circle cx="20" cy="12" r="9"  fill="none" stroke="#ddeeff" strokeWidth="0.7" opacity="0.4"/>
      <circle cx="20" cy="12" r="11" fill="none" stroke="#ffeedd" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="22" cy="10" r="1.5" fill="white" opacity="0.35"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  diabeticRetinopathy: ({ s }) => (
    // Dot haemorrhages + tortuous vessels
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7" fill="#3a2210"/>
      <circle cx="20" cy="12" r="4" fill="#080404"/>
      {/* haemorrhage dots */}
      <circle cx="14" cy="10" r="1.2" fill="#8B1010"/>
      <circle cx="25" cy="14" r="1"   fill="#8B1010"/>
      <circle cx="16" cy="16" r="1.1" fill="#aa1818"/>
      <circle cx="27" cy="10" r="0.9" fill="#cc2020"/>
      <circle cx="11" cy="13" r="0.8" fill="#aa1818"/>
      {/* tortuous vessel */}
      <path d="M12 8 Q14 11 13 14 Q12 17 15 19" stroke="#8B1010" strokeWidth="1" fill="none" opacity="0.7"/>
      <circle cx="22" cy="10" r="1.5" fill="white" opacity="0.5"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  macularDegeneration: ({ s }) => (
    // Central grey blur + drusen specks
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7" fill="#5a7060"/>
      {/* central blur */}
      <circle cx="20" cy="12" r="5.5" fill="#888" opacity="0.75"/>
      <circle cx="20" cy="12" r="3"   fill="#666" opacity="0.8"/>
      {/* drusen */}
      <circle cx="15" cy="10" r="1"   fill="#aaa" opacity="0.7"/>
      <circle cx="25" cy="11" r="0.9" fill="#aaa" opacity="0.6"/>
      <circle cx="17" cy="15" r="1"   fill="#999" opacity="0.6"/>
      <circle cx="23" cy="14" r="0.7" fill="#aaa" opacity="0.5"/>
      <circle cx="22" cy="10" r="1.2" fill="white" opacity="0.25"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  cornealUlcer: ({ s }) => (
    // Off-centre white opacity patch + inflammatory ring
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7" fill="#4a6a7a"/>
      <circle cx="20" cy="12" r="4" fill="#0a0a10"/>
      {/* ulcer patch */}
      <ellipse cx="17" cy="9" rx="4" ry="3.2" fill="white" opacity="0.9"/>
      <ellipse cx="17" cy="9" rx="4" ry="3.2" fill="none" stroke="#ccddd8" strokeWidth="0.8" opacity="0.7"/>
      {/* inflammatory ring */}
      <ellipse cx="17" cy="9" rx="5.5" ry="4.5" fill="none" stroke="#e08080" strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.6"/>
      <circle cx="22" cy="10" r="1.5" fill="white" opacity="0.4"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  uveitis: ({ s }) => (
    // Inflamed red iris + ciliary flush + keratic precipitates
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="#fff0f0"/>
      <circle cx="20" cy="12" r="7"   fill="#8B2020"/>
      {/* ciliary flush */}
      <circle cx="20" cy="12" r="8"   fill="none" stroke="#d04040" strokeWidth="2" opacity="0.6"/>
      <circle cx="20" cy="12" r="3.5" fill="#0a0404"/>
      {/* keratic precipitates at bottom */}
      <circle cx="17" cy="18" r="0.9" fill="#e08080" opacity="0.9"/>
      <circle cx="20" cy="19" r="0.9" fill="#e08080" opacity="0.9"/>
      <circle cx="23" cy="18" r="0.9" fill="#e08080" opacity="0.9"/>
      <circle cx="22" cy="10" r="1.5" fill="white" opacity="0.35"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  retinalDetachment: ({ s }) => (
    // Dark curtain from top + photopsia sparks
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7" fill="#2a3a4a"/>
      <circle cx="20" cy="12" r="4" fill="#080c10"/>
      {/* detachment curtain */}
      <path d="M13 5 Q18 8 22 6 Q27 4 28 8 L28 13 Q23 10 20 12 Q17 14 13 12 Z" fill="#0a0a18" opacity="0.88"/>
      {/* photopsia sparks */}
      <circle cx="12" cy="8"  r="1"   fill="white" opacity="0.9"/>
      <circle cx="29" cy="6"  r="0.8" fill="white" opacity="0.8"/>
      <circle cx="16" cy="4"  r="0.7" fill="white" opacity="0.7"/>
      <circle cx="22" cy="10" r="1.5" fill="white" opacity="0.4"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  dryEye: ({ s }) => (
    // Dull matte surface, punctate dots, no bright highlight
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="#f0e8d8"/>
      <circle cx="20" cy="12" r="7" fill="#7a6850" opacity="0.9"/>
      <circle cx="20" cy="12" r="4" fill="#1a1008"/>
      {/* punctate dryness dots */}
      <circle cx="15" cy="10" r="0.9" fill="#c0a080" opacity="0.7"/>
      <circle cx="19" cy="8"  r="0.8" fill="#c0a080" opacity="0.6"/>
      <circle cx="24" cy="11" r="0.9" fill="#c0a080" opacity="0.7"/>
      <circle cx="26" cy="9"  r="0.7" fill="#b89870" opacity="0.6"/>
      <circle cx="14" cy="14" r="0.7" fill="#b89870" opacity="0.5"/>
      {/* no bright highlight — dry surface */}
      <circle cx="22" cy="10" r="1"   fill="white" opacity="0.2"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      {/* lower lid slightly apart */}
      <path d="M1 12 Q10 20 20 21 Q30 20 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  keratoconus: ({ s }) => (
    // Vogt's striae + Fleischer ring
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7"   fill="#6B4A20"/>
      {/* Fleischer ring */}
      <circle cx="20" cy="12" r="6.5" fill="none" stroke="#9B7A40" strokeWidth="1.2" opacity="0.65"/>
      {/* Vogt's striae */}
      <path d="M19 5 Q19.3 8.5 19 12 Q19.3 15.5 19 19" stroke="#c8a060" strokeWidth="0.8" fill="none" opacity="0.55"/>
      <path d="M21 5 Q21.3 8.5 21 12 Q21.3 15.5 21 19" stroke="#c8a060" strokeWidth="0.7" fill="none" opacity="0.45"/>
      {/* Munson's sign — lower lid tenting */}
      <path d="M12 19 Q16 21.5 20 22 Q24 21.5 28 19" stroke="#9B7A40" strokeWidth="1" fill="none" opacity="0.7"/>
      <circle cx="20" cy="12" r="3.5" fill="#0a0804"/>
      <circle cx="22" cy="10" r="1.2" fill="white" opacity="0.4"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  subconjunctivalHaemorrhage: ({ s }) => (
    // Vivid red scleral patch, normal iris
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      {/* red patch temporal side */}
      <path d="M26 5 Q34 4 38 9 Q39 12 38 15 Q34 19 26 19 Q22 14 24 12 Q22 10 26 5 Z" fill="#cc1a1a" opacity="0.88"/>
      {/* normal iris on nasal side */}
      <circle cx="16" cy="12" r="6.5" fill="#4a6a5a"/>
      <circle cx="16" cy="12" r="4"   fill="#0a0a0a"/>
      <circle cx="18" cy="10" r="1.5" fill="white" opacity="0.55"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  pterygium: ({ s }) => (
    // Fleshy wedge growing from nasal side + feeder vessel
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      {/* pterygium wedge */}
      <path d="M1 12 Q8 9 16 11.5 Q18 12 16 12.5 Q8 15 1 12 Z" fill="#e8c8a0" opacity="0.9"/>
      {/* Stocker's line */}
      <path d="M15.5 11 Q16 12 15.5 13" stroke="#8B6040" strokeWidth="1.2" fill="none" opacity="0.85"/>
      {/* feeder vessel */}
      <path d="M2 12 Q9 11.5 15 12" stroke="#e05050" strokeWidth="0.7" fill="none" opacity="0.75"/>
      <circle cx="22" cy="12" r="6.5" fill="#4a6a5a"/>
      <circle cx="22" cy="12" r="4"   fill="#0a0a0a"/>
      <circle cx="24" cy="10" r="1.5" fill="white" opacity="0.55"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),

  // ── fallback: clean normal eye ──
  default: ({ s }) => (
    <svg viewBox="0 0 40 24" width={s} height={s * 0.6}>
      <ellipse cx="20" cy="12" rx="19" ry="11" fill="white"/>
      <circle cx="20" cy="12" r="7"   fill="#2a7a5a"/>
      <circle cx="20" cy="12" r="4"   fill="#0a0a0a"/>
      <circle cx="22" cy="10" r="1.8" fill="white" opacity="0.65"/>
      <path d="M1 12 Q10 3 20 2 Q30 3 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
      <path d="M1 12 Q10 21 20 22 Q30 21 39 12" stroke="#2effc0" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
}

/** Maps disease name string → icon key */
function resolveKey(name = '') {
  const n = name.toLowerCase()
  if (n.includes('conjunctiv'))                          return 'conjunctivitis'
  if (n.includes('cataract'))                            return 'cataract'
  if (n.includes('glaucom'))                             return 'glaucoma'
  if (n.includes('diabetic') || n.includes('retinopat')) return 'diabeticRetinopathy'
  if (n.includes('macula') || n.includes('macular'))     return 'macularDegeneration'
  if (n.includes('corneal ulcer') || n.includes('ulcer')) return 'cornealUlcer'
  if (n.includes('uveitis') || n.includes('uveit'))      return 'uveitis'
  if (n.includes('detach'))                              return 'retinalDetachment'
  if (n.includes('dry eye') || n.includes('keratoconj')) return 'dryEye'
  if (n.includes('keratocon'))                           return 'keratoconus'
  if (n.includes('subconj') || n.includes('haemorrhage') || n.includes('hemorrhage')) return 'subconjunctivalHaemorrhage'
  if (n.includes('pterygium'))                           return 'pterygium'
  return 'default'
}

export default function DiseaseEyeIcon({ name, size = 46 }) {
  const key  = resolveKey(name)
  const Icon = ICONS[key] || ICONS.default
  return <Icon s={size} />
}
