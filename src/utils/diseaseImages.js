/**
 * diseaseImages.js
 * Maps disease names to local images in public/diseases/
 * Automatically checks for -1 and -2 variants
 */

const DISEASE_IMAGE_MAP = {
  // ── Conjunctival ──
  'acute bacterial conjunctivitis':       'acute-bacterial-conjunctivitis',
  'gonococcal conjunctivitis':            'gonococcal-conjunctivitis',
  'viral conjunctivitis':                 'viral-conjunctivitis',
  'epidemic keratoconjunctivitis':        'viral-conjunctivitis',
  'allergic conjunctivitis':              'allergic-conjunctivitis',
  'vernal keratoconjunctivitis':          'allergic-conjunctivitis',
  'trachoma':                             'trachoma',
  'chlamydial conjunctivitis':            'chlamydial-conjunctivitis',
  'adult inclusion conjunctivitis':       'chlamydial-conjunctivitis',
  'pterygium':                            'pterygium',
  'subconjunctival hemorrhage':           'subconjunctival-hemorrhage',
  'subconjunctival haemorrhage':          'subconjunctival-hemorrhage',
  'conjunctival squamous cell carcinoma': 'conjunctival-scc',
  'ossn':                                 'conjunctival-scc',

  // ── Corneal ──
  'bacterial keratitis':                  'bacterial-keratitis',
  'corneal ulcer':                        'bacterial-keratitis',
  'herpes simplex keratitis':             'hsv-keratitis',
  'hsv keratitis':                        'hsv-keratitis',
  'herpes zoster ophthalmicus':           'herpes-zoster-ophthalmicus',
  'hzo':                                  'herpes-zoster-ophthalmicus',
  'acanthamoeba keratitis':               'acanthamoeba-keratitis',
  'fungal keratitis':                     'fungal-keratitis',
  'keratoconus':                          'keratoconus',
  'corneal dystrophies':                  'corneal-dystrophies',
  'fuchs endothelial dystrophy':          'corneal-dystrophies',
  'neurotrophic keratopathy':             'neurotrophic-keratopathy',
  'exposure keratopathy':                 'exposure-keratopathy',

  // ── Scleral ──
  'episcleritis':                         'episcleritis',
  'scleritis':                            'scleritis',

  // ── Uveal ──
  'acute anterior uveitis':               'acute-anterior-uveitis',
  'iritis':                               'acute-anterior-uveitis',
  'iridocyclitis':                        'acute-anterior-uveitis',
  'posterior uveitis':                    'posterior-uveitis',
  'chorioretinitis':                      'posterior-uveitis',
  'sympathetic ophthalmia':               'sympathetic-ophthalmia',
  'vogt-koyanagi-harada':                 'vkh-syndrome',
  'vkh syndrome':                         'vkh-syndrome',
  'behcet disease':                       'behcet-disease',
  'uveal melanoma':                       'uveal-melanoma',
  'choroidal melanoma':                   'uveal-melanoma',

  // ── Glaucoma ──
  'primary open angle glaucoma':          'poag',
  'poag':                                 'poag',
  'open angle glaucoma':                  'poag',
  'acute angle closure glaucoma':         'acute-angle-closure-glaucoma',
  'aacg':                                 'acute-angle-closure-glaucoma',
  'angle closure glaucoma':               'acute-angle-closure-glaucoma',
  'normal tension glaucoma':              'normal-tension-glaucoma',
  'ntg':                                  'normal-tension-glaucoma',
  'congenital glaucoma':                  'congenital-glaucoma',
  'buphthalmos':                          'congenital-glaucoma',
  'infantile glaucoma':                   'congenital-glaucoma',
  'secondary glaucoma':                   'secondary-glaucoma',
  'neovascular glaucoma':                 'secondary-glaucoma',

  // ── Lens ──
  'cataract':                             'cataract',
  'nuclear sclerosis':                    'cataract',
  'posterior subcapsular cataract':       'cataract',
  'ectopia lentis':                       'ectopia-lentis',
  'lens dislocation':                     'ectopia-lentis',

  // ── Vitreous ──
  'posterior vitreous detachment':        'pvd',
  'pvd':                                  'pvd',
  'vitreous hemorrhage':                  'vitreous-hemorrhage',
  'vitreous haemorrhage':                 'vitreous-hemorrhage',
  'asteroid hyalosis':                    'asteroid-hyalosis',

  // ── Retinal ──
  'diabetic retinopathy':                 'diabetic-retinopathy',
  'proliferative diabetic retinopathy':   'diabetic-retinopathy',
  'rhegmatogenous retinal detachment':    'retinal-detachment',
  'retinal detachment':                   'retinal-detachment',
  'age-related macular degeneration':     'amd',
  'amd':                                  'amd',
  'macular degeneration':                 'amd',
  'central retinal artery occlusion':     'crao',
  'crao':                                 'crao',
  'central retinal vein occlusion':       'crvo',
  'crvo':                                 'crvo',
  'branch retinal artery occlusion':      'brao-brvo',
  'branch retinal vein occlusion':        'brao-brvo',
  'brao':                                 'brao-brvo',
  'brvo':                                 'brao-brvo',
  'retinitis pigmentosa':                 'retinitis-pigmentosa',
  'stargardt disease':                    'stargardt-disease',
  'macular hole':                         'macular-hole',
  'epiretinal membrane':                  'epiretinal-membrane',
  'macular pucker':                       'epiretinal-membrane',
  'central serous chorioretinopathy':     'cscr',
  'cscr':                                 'cscr',
  'retinopathy of prematurity':           'rop',
  'rop':                                  'rop',

  // ── Neuro-ophthalmology ──
  'optic neuritis':                       'optic-neuritis',
  'papilloedema':                         'papilloedema',
  'papilledema':                          'papilloedema',
  'third nerve palsy':                    'third-nerve-palsy',
  'cn iii palsy':                         'third-nerve-palsy',
  'fourth nerve palsy':                   'fourth-nerve-palsy',
  'superior oblique palsy':               'fourth-nerve-palsy',
  'sixth nerve palsy':                    'sixth-nerve-palsy',
  'lateral rectus palsy':                 'sixth-nerve-palsy',
  'horner syndrome':                      'horner-syndrome',
  'nystagmus':                            'nystagmus',
  'internuclear ophthalmoplegia':         'ino',
  'ino':                                  'ino',

  // ── Orbital ──
  'orbital cellulitis':                   'orbital-cellulitis',
  'thyroid eye disease':                  'thyroid-eye-disease',
  'graves orbitopathy':                   'thyroid-eye-disease',
  'cavernous sinus thrombosis':           'cavernous-sinus-thrombosis',

  // ── Eyelid ──
  'chalazion':                            'chalazion',
  'meibomian cyst':                       'chalazion',
  'blepharitis':                          'blepharitis',
  'entropion':                            'entropion-ectropion',
  'ectropion':                            'entropion-ectropion',
  'ptosis':                               'ptosis',
  'eyelid tumors':                        'eyelid-tumors',
  'basal cell carcinoma':                 'eyelid-tumors',

  // ── Strabismus ──
  'esotropia':                            'esotropia',
  'convergent squint':                    'esotropia',
  'exotropia':                            'exotropia',
  'divergent squint':                     'exotropia',

  // ── Dry Eye ──
  'dry eye disease':                      'dry-eye-disease',
  'dry eye':                              'dry-eye-disease',
  'keratoconjunctivitis sicca':           'dry-eye-disease',
  'sjogren syndrome':                     'sjogren-syndrome',

  // ── Infections ──
  'ocular toxoplasmosis':                 'ocular-toxoplasmosis',
  'toxoplasmosis':                        'ocular-toxoplasmosis',
  'ocular toxocariasis':                  'ocular-toxocariasis',
  'ocular onchocerciasis':                'ocular-onchocerciasis',
  'river blindness':                      'ocular-onchocerciasis',
  'ocular tuberculosis':                  'ocular-tuberculosis',
  'ocular syphilis':                      'ocular-syphilis',

  // ── Paediatric ──
  'amblyopia':                            'amblyopia',
  'lazy eye':                             'amblyopia',
  'retinoblastoma':                       'retinoblastoma',
  'leukocoria':                           'leukocoria',

  // ── Trauma ──
  'hyphema':                              'hyphema',
  'chemical eye injury':                  'chemical-eye-injury',
  'alkali burn':                          'chemical-eye-injury',
  'penetrating ocular injury':            'penetrating-injury',
  'open globe':                           'penetrating-injury',
  'blow-out fracture':                    'blowout-fracture',
  'blowout fracture':                     'blowout-fracture',
  'orbital fracture':                     'blowout-fracture',

  // ── Refractive ──
  'myopia':                               'myopia',
  'short-sightedness':                    'myopia',
  'hypermetropia':                        'hypermetropia',
  'hyperopia':                            'hypermetropia',
  'astigmatism':                          'hypermetropia',
  'presbyopia':                           'presbyopia',

  // ── Systemic ──
  'hypertensive retinopathy':             'hypertensive-retinopathy',
  'sarcoidosis':                          'sarcoidosis-eye',
  'rheumatoid arthritis':                 'rheumatoid-arthritis-eye',
  'hiv aids':                             'hiv-aids-eye',
  'cmv retinitis':                        'hiv-aids-eye',

  // ── Pharmacology ──
  'drug toxicity':                        'drug-toxicity-eye',
  'chloroquine maculopathy':              'drug-toxicity-eye',

  // ── Endophthalmitis ──
  'endophthalmitis':                      'endophthalmitis',
}

/**
 * Get images for a disease by name.
 * Automatically checks for base, -1, and -2 variants.
 * Returns array of image objects.
 */
export function getDiseaseImages(diseaseName) {
  if (!diseaseName) return []

  const lower = diseaseName.toLowerCase().trim()

  // Find matching base filename
  let baseFile = null

  // Direct match
  if (DISEASE_IMAGE_MAP[lower]) {
    baseFile = DISEASE_IMAGE_MAP[lower]
  } else {
    // Partial match
    const partialKey = Object.keys(DISEASE_IMAGE_MAP).find(key =>
      lower.includes(key) || key.includes(lower)
    )
    if (partialKey) baseFile = DISEASE_IMAGE_MAP[partialKey]
  }

  if (!baseFile) return []

  // Build all possible variants
  const extensions = ['jpg', 'jpeg', 'png', 'webp']
  const variants   = [baseFile, `${baseFile}-1`, `${baseFile}-2`, `${baseFile}-3`]
  const images     = []

  variants.forEach((variant, i) => {
    // Try jpg first (most common)
    const ext = 'jpg'
    images.push({
      url:      `/src/assets/diseases/${variant}.${ext}`,
      title:    `${diseaseName}${i > 0 ? ` — Image ${i}` : ''}`,
      source:   'Path-Nema Clinical Library',
      isLocal:  true,
      variant,
    })
  })

  return images
}
