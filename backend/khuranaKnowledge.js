/**
 * khuranaKnowledge.js
 * COMPLETE Ocular Pathology Knowledge Base
 * Based on Khurana's Comprehensive Ophthalmology, 7th Edition
 * Covers ALL major ocular pathology topics
 */

const KHURANA_KNOWLEDGE = {
  source: "Khurana's Comprehensive Ophthalmology, 7th Edition",
  sections: [

    // ═══════════════════════════════════════════════════════════════
    // SECTION 1: CONJUNCTIVAL DISEASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "conj_001",
      disease: "Acute Bacterial Conjunctivitis",
      category: "Conjunctival Diseases",
      keywords: ["red eye", "mucopurulent discharge", "sticky eyelids", "morning crusting", "conjunctival hyperemia", "burning", "foreign body sensation"],
      content: `Acute bacterial conjunctivitis is the most common cause of red eye.
ETIOLOGY: Staphylococcus aureus (adults), Streptococcus pneumoniae, Haemophilus influenzae (children), Moraxella lacunata.
SYMPTOMS: Acute redness, foreign body sensation, burning, mucopurulent discharge, eyelids stuck together on waking.
SIGNS: Conjunctival hyperemia (brick-red), mucopurulent discharge, papillary hypertrophy on palpebral conjunctiva.
TREATMENT: Topical chloramphenicol 0.5% or ciprofloxacin 0.3% for 5-7 days. Hygiene measures.
COMPLICATIONS: Marginal keratitis, chronic conjunctivitis if inadequately treated.`
    },
    {
      id: "conj_002",
      disease: "Gonococcal Conjunctivitis",
      category: "Conjunctival Diseases",
      keywords: ["copious purulent discharge", "hyperacute conjunctivitis", "severe chemosis", "rapid onset", "corneal ulceration", "sexually transmitted", "Neisseria"],
      content: `Gonococcal conjunctivitis is a sight-threatening hyperacute bacterial conjunctivitis caused by Neisseria gonorrhoeae.
SYMPTOMS: Rapid onset profuse purulent discharge within 12-24 hours, severe eyelid swelling, pain, photophobia.
SIGNS: Copious thick purulent discharge, marked conjunctival chemosis, tender preauricular lymphadenopathy. Risk of corneal perforation within 24-48 hours.
DIAGNOSIS: Gram stain — gram-negative diplococci within polymorphs. Culture on Thayer-Martin medium.
TREATMENT: Systemic ceftriaxone 1g IM single dose + topical ciprofloxacin hourly. Irrigate with saline. Treat sexual partners.
COMPLICATIONS: Corneal ulceration and perforation, endophthalmitis, blindness.`
    },
    {
      id: "conj_003",
      disease: "Viral Conjunctivitis / Epidemic Keratoconjunctivitis",
      category: "Conjunctival Diseases",
      keywords: ["watery discharge", "follicular conjunctivitis", "preauricular lymphadenopathy", "adenovirus", "highly contagious", "subconjunctival hemorrhage", "subepithelial infiltrates"],
      content: `Viral conjunctivitis is the commonest cause of acute follicular conjunctivitis, caused by Adenovirus (types 8 and 19 for EKC).
SYMPTOMS: Acute watery discharge, burning, itching, foreign body sensation, photophobia. Spreads from one eye to other within days.
SIGNS: Follicular reaction on palpebral conjunctiva, watery discharge, preauricular lymphadenopathy (pathognomonic), subconjunctival hemorrhage. In EKC: punctate keratitis and subepithelial infiltrates at 7-10 days.
TREATMENT: Supportive — cold compresses, lubricating drops. Topical antibiotics to prevent secondary infection. Topical steroids only for subepithelial infiltrates causing visual disturbance.
COMPLICATIONS: Subepithelial corneal infiltrates, symblepharon (rare), dry eye.`
    },
    {
      id: "conj_004",
      disease: "Allergic Conjunctivitis / Vernal Keratoconjunctivitis",
      category: "Conjunctival Diseases",
      keywords: ["itching", "bilateral", "seasonal", "watery discharge", "chemosis", "cobblestone papillae", "Trantas dots", "shield ulcer", "eosinophils", "atopy", "VKC"],
      content: `Allergic conjunctivitis encompasses IgE-mediated hypersensitivity responses including SAC, PAC, VKC, and AKC.
TYPES: Seasonal (SAC) — pollen triggered. Perennial (PAC) — dust mites. Vernal (VKC) — young males, hot climates, cobblestone papillae. Atopic (AKC) — adults with atopic dermatitis.
SYMPTOMS: Intense bilateral itching (hallmark), watery discharge, burning, eyelid swelling. Seasonal variation in SAC.
SIGNS: Conjunctival hyperemia, chemosis, papillary reaction. VKC: giant cobblestone papillae on upper tarsal plate, Trantas dots (eosinophilic accumulations at limbus), shield ulcer in severe cases.
DIAGNOSIS: Conjunctival scraping shows eosinophils. Serum IgE. Skin prick test.
TREATMENT: Avoid allergens. Topical antihistamines (olopatadine, azelastine). Mast cell stabilizers (sodium cromoglicate). Topical steroids for severe VKC/AKC with IOP monitoring. Systemic antihistamines.`
    },
    {
      id: "conj_005",
      disease: "Trachoma",
      category: "Conjunctival Diseases",
      keywords: ["follicles upper tarsal", "pannus", "Herbert pits", "trichiasis", "entropion", "corneal scarring", "blindness", "Chlamydia trachomatis", "Arlt line", "SAFE strategy"],
      content: `Trachoma is the leading infectious cause of blindness worldwide caused by Chlamydia trachomatis (serovars A, B, Ba, C).
WHO GRADING: TF (trachomatous inflammation-follicular — ≥5 follicles upper tarsal), TI (intense inflammation), TS (scarring), TT (trichiasis), CO (corneal opacity).
SIGNS: Follicles on upper tarsal conjunctiva, Herbert pits (scarred limbal follicles — pathognomonic), Arlt's line (horizontal tarsal scar), pannus (fibrovascular corneal invasion superiorly), progressive corneal scarring.
TREATMENT: Azithromycin 1g oral single dose. Tetracycline eye ointment 1% BD for 6 weeks. Surgery for trichiasis (BLTR). WHO SAFE strategy: Surgery, Antibiotics, Facial cleanliness, Environmental improvement.`
    },
    {
      id: "conj_006",
      disease: "Chlamydial Conjunctivitis (Adult Inclusion Conjunctivitis)",
      category: "Conjunctival Diseases",
      keywords: ["chronic follicular conjunctivitis", "inferior fornix follicles", "mucopurulent discharge", "sexually active adults", "Chlamydia trachomatis D-K", "corneal pannus", "preauricular node"],
      content: `Adult inclusion conjunctivitis is caused by Chlamydia trachomatis serovars D-K, transmitted sexually or via genital secretions.
SYMPTOMS: Chronic or subacute mucopurulent discharge, redness, foreign body sensation, often unilateral initially.
SIGNS: Follicular reaction predominantly in inferior fornix (distinguishes from trachoma — upper tarsal), preauricular lymphadenopathy, superior corneal pannus (less extensive than trachoma), papillary hypertrophy.
DIAGNOSIS: PCR (gold standard), Giemsa stain (intracytoplasmic inclusion bodies), culture.
TREATMENT: Oral azithromycin 1g single dose OR oral doxycycline 100mg BD for 7 days. Treat sexual partners. Screen for other STIs.`
    },
    {
      id: "conj_007",
      disease: "Pterygium",
      category: "Conjunctival Diseases",
      keywords: ["fleshy growth", "nasal conjunctiva", "corneal encroachment", "Stocker line", "iron deposition", "UV exposure", "astigmatism", "recurrence", "triangular"],
      content: `Pterygium is a fleshy, vascularized, triangular growth of conjunctival tissue encroaching onto the cornea from the nasal side (occasionally temporal).
ETIOLOGY: UV radiation exposure, dry/dusty environments, outdoor workers.
SYMPTOMS: Cosmetic concern, foreign body sensation, redness, induced astigmatism (when approaching visual axis), reduced vision if crossing pupil.
SIGNS: Fleshy triangular vascularized growth from nasal limbus onto cornea. Stocker's line (iron deposition at advancing edge — indicates slow growth). Cap (grey area ahead of pterygium on cornea).
TREATMENT: Conservative: UV protection, lubricants. Surgical excision when threatening visual axis or cosmetically unacceptable. High recurrence risk — use adjunctive mitomycin C (MMC) or conjunctival autograft to reduce recurrence.`
    },
    {
      id: "conj_008",
      disease: "Subconjunctival Hemorrhage",
      category: "Conjunctival Diseases",
      keywords: ["bright red", "painless", "flat hemorrhage", "beneath conjunctiva", "valsalva", "spontaneous", "hypertension", "trauma", "anticoagulants"],
      content: `Subconjunctival hemorrhage is extravasation of blood between conjunctiva and episclera — alarming in appearance but usually benign.
ETIOLOGY: Spontaneous (most common — Valsalva manoeuvre: coughing, sneezing, straining), hypertension, trauma, anticoagulants, blood dyscrasias, rarely carotid-cavernous fistula (if recurrent/bilateral).
SYMPTOMS: Painless, flat, bright red hemorrhage noticed incidentally or by others. No visual disturbance.
SIGNS: Well-demarcated bright red hemorrhage, flat (not raised), moves to dependent position with time. Posterior limit visible (distinguishes from orbital hemorrhage).
INVESTIGATIONS: BP measurement (all patients). Blood tests only if recurrent or bilateral (FBC, clotting, glucose).
TREATMENT: Reassurance. Resolves spontaneously in 2-3 weeks. Address underlying cause. Lubricating drops for comfort.`
    },
    {
      id: "conj_009",
      disease: "Conjunctival Tumors (Squamous Cell Carcinoma)",
      category: "Conjunctival Diseases",
      keywords: ["conjunctival lesion", "leukoplakia", "papillomatous", "limbal lesion", "OSSN", "HIV", "HPV", "gelatinous mass", "feeder vessels"],
      content: `Ocular surface squamous neoplasia (OSSN) ranges from dysplasia to invasive squamous cell carcinoma (SCC).
RISK FACTORS: UV exposure, HPV infection (types 16, 18), HIV/immunosuppression, xeroderma pigmentosum, fair skin.
PRESENTATION: Raised, gelatinous, leukoplakic or papillomatous conjunctival/corneal lesion. Usually at limbus (interpalpebral zone). Feeder vessels. May be pigmented in dark-skinned individuals.
DIAGNOSIS: Impression cytology or excision biopsy (histology gold standard).
TREATMENT: Surgical excision with 2mm clear margins + cryotherapy to base (no-touch technique). Adjuvant topical mitomycin C 0.04% or 5-fluorouracil drops. Topical interferon alpha-2b for recurrences. Enucleation for intraocular invasion.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 2: CORNEAL DISEASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "corn_001",
      disease: "Bacterial Keratitis",
      category: "Corneal Diseases",
      keywords: ["corneal ulcer", "stromal infiltrate", "hypopyon", "severe pain", "photophobia", "contact lens", "fluorescein staining", "epithelial defect", "Pseudomonas", "Staphylococcus"],
      content: `Bacterial keratitis is a sight-threatening ocular emergency.
ETIOLOGY: Pseudomonas aeruginosa (contact lens wearers — aggressive, rapid), Staphylococcus aureus, Streptococcus pneumoniae, Moraxella.
RISK FACTORS: Contact lens wear (especially extended wear), corneal trauma, dry eye, topical steroid use, immunosuppression.
SYMPTOMS: Severe ocular pain, photophobia, lacrimation, blurred vision, mucopurulent discharge.
SIGNS: Corneal epithelial defect with grey-white stromal infiltrate, surrounding edema, circumcorneal (ciliary) injection, anterior chamber reaction, hypopyon in severe cases.
DIAGNOSIS: Corneal scraping — Gram stain, culture and sensitivity. Confocal microscopy.
TREATMENT: Intensive topical antibiotics — ciprofloxacin 0.3% or ofloxacin 0.3% every 30-60 minutes initially. Fortified antibiotics (tobramycin + cefazolin) for severe cases. Cycloplegics for pain/synechiae prevention. No steroids initially.
COMPLICATIONS: Corneal perforation, endophthalmitis, corneal scarring, irregular astigmatism.`
    },
    {
      id: "corn_002",
      disease: "Herpes Simplex Keratitis",
      category: "Corneal Diseases",
      keywords: ["dendritic ulcer", "geographic ulcer", "reduced corneal sensation", "HSV", "recurrent", "branching ulcer", "terminal end bulbs", "stromal keratitis", "disciform keratitis", "hypoesthesia"],
      content: `Herpes simplex keratitis is the commonest cause of infectious corneal blindness in developed countries.
ETIOLOGY: HSV-1 reactivation. Primary infection usually subclinical.
TYPES: (1) Epithelial keratitis — dendritic ulcer (branching with terminal end bulbs, pathognomonic) → geographic ulcer. (2) Stromal keratitis — disciform (immune-mediated, central disc edema) or necrotizing. (3) Endotheliitis — corneal edema with KPs.
SYMPTOMS: Pain, photophobia, lacrimation. Reduced/absent corneal sensation (hypoesthesia — pathognomonic cardinal feature).
SIGNS: Dendritic ulcer staining with fluorescein (terminal end bulbs stain with rose bengal), reduced corneal sensation, stromal haze/edema.
TREATMENT: Epithelial: Topical aciclovir 3% ointment 5x daily for 14 days. Stromal: Topical steroids WITH antiviral cover. Systemic aciclovir/valaciclovir for prophylaxis. AVOID steroids alone in epithelial disease.
COMPLICATIONS: Recurrence, corneal scarring, neurotrophic keratopathy, perforation.`
    },
    {
      id: "corn_003",
      disease: "Herpes Zoster Ophthalmicus",
      category: "Corneal Diseases",
      keywords: ["VZV", "dermatomal rash", "Hutchinson sign", "shingles", "postherpetic neuralgia", "nasociliary nerve", "pseudodendrites", "uveitis", "sectoral iris atrophy"],
      content: `Herpes zoster ophthalmicus (HZO) is reactivation of VZV in the ophthalmic division of CN V, affecting the eye in ~50% when nasociliary branch involved.
HUTCHINSON'S SIGN: Vesicles on tip/side of nose (nasociliary branch involvement) — predicts ocular involvement.
SYMPTOMS: Dermatomal prodrome (pain, tingling), unilateral vesicular rash in V1 distribution, eye involvement — redness, photophobia, pain, blurred vision.
OCULAR SIGNS: Conjunctivitis, episcleritis/scleritis, keratitis (pseudodendrites — no terminal end bulbs, distinguish from HSV), disciform keratitis, uveitis (sectoral iris atrophy pathognomonic), secondary glaucoma, cranial nerve palsies, postherpetic neuralgia.
TREATMENT: Oral aciclovir 800mg 5x daily for 7-10 days (within 72h of rash). Topical steroids for keratitis/uveitis. Cycloplegics. Analgesics. Amitriptyline/gabapentin for postherpetic neuralgia. Vaccination (Shingrix) — prevention.`
    },
    {
      id: "corn_004",
      disease: "Acanthamoeba Keratitis",
      category: "Corneal Diseases",
      keywords: ["contact lens", "severe pain disproportionate", "ring infiltrate", "perineural infiltrate", "radial keratoneuritis", "swimming", "tap water", "poor hygiene"],
      content: `Acanthamoeba keratitis is a rare but devastating infection almost exclusively in contact lens wearers.
ETIOLOGY: Acanthamoeba species (free-living amoeba) from tap water, swimming pools, hot tubs.
SYMPTOMS: Severe disproportionate pain (out of proportion to signs — characteristic feature), photophobia, redness, blurred vision.
SIGNS: Epithelial irregularity, perineural infiltrates (radial keratoneuritis — pathognomonic), ring-shaped stromal infiltrate (late), pseudodendrites (unlike HSV — no terminal end bulbs).
DIAGNOSIS: Corneal scraping with calcofluor white stain (cysts/trophozoites). Confocal microscopy (gold standard — cysts in vivo). Culture on non-nutrient agar with E. coli.
TREATMENT: Topical PHMB 0.02% + propamidine (Brolene) 0.1% hourly for first week, then taper. Duration 6-12 months. Penetrating keratoplasty for non-responsive cases.`
    },
    {
      id: "corn_005",
      disease: "Fungal Keratitis",
      category: "Corneal Diseases",
      keywords: ["vegetable matter trauma", "feathery infiltrate", "satellite lesions", "endothelial plaque", "hypopyon", "Aspergillus", "Fusarium", "Candida", "filamentous"],
      content: `Fungal keratitis is an important cause of corneal blindness in tropical countries.
ETIOLOGY: Filamentous — Aspergillus, Fusarium (agricultural/vegetable matter trauma). Yeasts — Candida (immunocompromised).
RISK FACTORS: Agricultural trauma, topical steroid use, contact lens wear, immunosuppression.
SYMPTOMS: Gradual pain (less severe than bacterial), photophobia, progressive visual loss over days-weeks.
SIGNS: Grey-white infiltrate with feathery/fluffy edges, satellite lesions (daughter infiltrates), endothelial plaque, immune ring (Wessely ring), hypopyon, intact epithelium initially.
DIAGNOSIS: KOH mount (hyphae), Gram stain, culture on Sabouraud's agar. Confocal microscopy.
TREATMENT: Topical natamycin 5% every 1-2 hours (drug of choice for filamentous fungi). Voriconazole 1% for resistant cases. Oral voriconazole/itraconazole. Treatment 6-12 weeks. NO steroids. Keratoplasty for non-responsive/perforated cases.`
    },
    {
      id: "corn_006",
      disease: "Keratoconus",
      category: "Corneal Diseases",
      keywords: ["progressive myopia", "irregular astigmatism", "Munson sign", "Vogt striae", "Fleischer ring", "cone-shaped cornea", "oil droplet reflex", "scissors reflex", "inferior steepening", "collagen crosslinking"],
      content: `Keratoconus is a progressive non-inflammatory ectatic disorder causing conical protrusion and visual impairment.
EPIDEMIOLOGY: Onset puberty to young adulthood, bilateral (asymmetric), progressive until 4th decade.
ASSOCIATIONS: Atopy, eye rubbing, Down syndrome, Marfan syndrome.
SYMPTOMS: Progressive blurring, frequent spectacle prescription changes, monocular diplopia, glare, halos.
SIGNS: Vogt's striae (deep stromal stress lines), Fleischer ring (iron at cone base — cobalt blue light), stromal thinning. Munson's sign (V-shaped lower lid deformity on downgaze). Retinoscopy: scissors reflex, oil droplet reflex. Topography: inferior steepening, asymmetric bowtie.
TREATMENT: Spectacles → rigid gas-permeable contact lenses → corneal collagen crosslinking (CXL with riboflavin + UV-A to halt progression) → DALK or penetrating keratoplasty for advanced disease. Acute hydrops: hypertonic saline.`
    },
    {
      id: "corn_007",
      disease: "Corneal Dystrophies",
      category: "Corneal Diseases",
      keywords: ["bilateral hereditary", "recurrent erosions", "map dot fingerprint", "granular deposits", "lattice lines", "Fuchs endothelial", "corneal edema", "guttata", "bullous keratopathy"],
      content: `Corneal dystrophies are inherited, bilateral, symmetric, non-inflammatory conditions.
EPITHELIAL: Map-dot-fingerprint (Cogan) — AD, recurrent corneal erosions, characteristic patterns. Most common anterior dystrophy.
STROMAL: Granular (TGFBI, AD) — discrete grey-white breadcrumb deposits. Lattice (TGFBI, AD) — refractile lattice lines, recurrent erosions. Macular (AR — only AR stromal dystrophy) — diffuse clouding, most severe.
ENDOTHELIAL: Fuchs endothelial — AD, most common endothelial dystrophy. Cornea guttata (excrescences on Descemet) → endothelial decompensation → stromal then epithelial edema → bullous keratopathy → severe pain and reduced vision.
TREATMENT: Recurrent erosions: lubricants, bandage CL, anterior stromal puncture, PTK. Advanced: penetrating keratoplasty or DSAEK/DMEK for Fuchs.`
    },
    {
      id: "corn_008",
      disease: "Neurotrophic Keratopathy",
      category: "Corneal Diseases",
      keywords: ["reduced corneal sensation", "non-healing epithelial defect", "stromal melting", "CN5 damage", "HSV sequelae", "HZV", "diabetes", "lazy cornea", "trophic ulcer"],
      content: `Neurotrophic keratopathy is a degenerative corneal disease caused by impaired trigeminal innervation leading to epithelial breakdown.
ETIOLOGY: HSV/HZV keratitis (most common), CN V damage (acoustic neuroma surgery, aneurysm, skull base tumors), diabetes, topical anesthetics abuse, Riley-Day syndrome.
MACKIE CLASSIFICATION: Stage 1 (epithelial irregularity, punctate erosions, decreased TBUT). Stage 2 (persistent epithelial defect). Stage 3 (stromal ulceration/melting/perforation).
SYMPTOMS: Minimal pain (reduced sensation), redness, blurred vision, tearing.
SIGNS: Reduced/absent corneal sensation (Cochet-Bonnet aesthesiometer), persistent oval epithelial defect (often inferior/central), rolled smooth edges, stromal haze/thinning.
TREATMENT: Intensive lubrication. Bandage contact lens. Autologous serum drops. Amniotic membrane transplant. Cenegermin (recombinant human NGF) — neurotrophic factor replacement. Tarsoraphy/tarsorrhaphy for severe cases.`
    },
    {
      id: "corn_009",
      disease: "Exposure Keratopathy",
      category: "Corneal Diseases",
      keywords: ["lagophthalmos", "incomplete eye closure", "inferior punctate erosions", "corneal exposure", "facial nerve palsy", "thyroid eye disease", "nocturnal lagophthalmos", "Bell phenomenon"],
      content: `Exposure keratopathy results from incomplete eyelid closure (lagophthalmos) causing corneal desiccation and epithelial breakdown.
ETIOLOGY: CN VII palsy (Bell's palsy, parotid surgery), thyroid eye disease (proptosis), cicatricial lid disease, nocturnal lagophthalmos, absent Bell's phenomenon.
SYMPTOMS: Redness, foreign body sensation, pain, photophobia, tearing, blurred vision.
SIGNS: Inferior corneal epithelial punctate erosions (3 and 9 o'clock or inferior band), epithelial defect in exposed zone, corneal ulceration in severe cases. Lagophthalmos (measure gap in mm). Incomplete/absent Bell's phenomenon (globe fails to rotate upward on closure).
TREATMENT: Frequent lubricants (drops and ointment, especially at night). Moisture chamber goggles. Tape/lid weight for CN VII palsy. Gold weight implant (upper lid). Lateral tarsorrhaphy for severe cases. Treat underlying cause.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 3: SCLERAL DISEASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "scler_001",
      disease: "Episcleritis",
      category: "Scleral Diseases",
      keywords: ["sectoral redness", "mild discomfort", "episcleral injection", "self-limiting", "phenylephrine blanching", "nodular", "diffuse", "young adults"],
      content: `Episcleritis is inflammation of the superficial episcleral tissue — usually benign and self-limiting.
TYPES: Simple (diffuse) — most common. Nodular — localized elevated nodule.
ETIOLOGY: Usually idiopathic. Associated with: rheumatoid arthritis, gout, IBD, rosacea, herpes zoster (5-10% have systemic disease).
SYMPTOMS: Mild discomfort/soreness (not severe pain), redness, mild photophobia. NO visual loss.
SIGNS: Sectoral or diffuse episcleral injection (salmon-pink/red), nodule in nodular type. Blanches with topical phenylephrine 2.5% (distinguishes from scleritis — does not blanch). Superficial vessels move with conjunctiva.
TREATMENT: Often self-resolving in 2-4 weeks. Topical lubricants. Topical NSAIDs (flurbiprofen). Oral NSAIDs for symptomatic relief. Topical steroids if persistent.`
    },
    {
      id: "scler_002",
      disease: "Scleritis",
      category: "Scleral Diseases",
      keywords: ["severe boring pain", "radiating to orbit", "tender globe", "non-blanching", "scleral thinning", "blue hue", "necrotizing", "rheumatoid arthritis", "systemic vasculitis"],
      content: `Scleritis is severe inflammation of the sclera — associated with significant systemic disease in 50%.
WATSON CLASSIFICATION: Anterior (diffuse, nodular, necrotizing with/without inflammation). Posterior scleritis.
SYSTEMIC ASSOCIATIONS: Rheumatoid arthritis (most common), granulomatosis with polyangiitis (GPA/Wegener's), SLE, relapsing polychondritis, IBD.
SYMPTOMS: Severe, deep, boring/aching pain radiating to forehead, temple, jaw. Worse at night. Tenderness on globe palpation. Photophobia, lacrimation.
SIGNS: Deep violaceous/bluish-red injection (deeper than episcleritis), does NOT blanch with phenylephrine, tender to touch. Nodular: firm, immobile, tender scleral nodule. Necrotizing: scleral thinning → blue hue (choroid visible) → uveal show → perforation risk.
INVESTIGATIONS: FBC, ESR, CRP, RF, ANA, ANCA, urate, CXR.
TREATMENT: Oral NSAIDs (flurbiprofen, indomethacin) first line. Oral prednisolone for NSAID-resistant. IV methylprednisolone for severe/necrotizing. Immunosuppressants (methotrexate, cyclophosphamide for GPA). Treat underlying systemic disease.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 4: UVEAL TRACT DISEASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "uvea_001",
      disease: "Acute Anterior Uveitis (Iritis/Iridocyclitis)",
      category: "Uveal Tract Diseases",
      keywords: ["ciliary injection", "photophobia", "anterior chamber cells", "flare", "keratic precipitates", "posterior synechiae", "HLA-B27", "deep aching pain", "hypopyon", "consensual photophobia"],
      content: `Acute anterior uveitis is the most common form of uveitis.
ETIOLOGY: Idiopathic (commonest). HLA-B27 associated (ankylosing spondylitis, reactive arthritis, psoriatic arthritis, IBD). Infections: HSV, VZV, syphilis, TB. Sarcoidosis.
SYMPTOMS: Deep aching ocular pain, photophobia (consensual — pain when light in fellow eye), blurred vision, lacrimation.
SIGNS: Circumcorneal (ciliary/perilimbal) injection. KPs on corneal endothelium — fine KPs (non-granulomatous) or mutton-fat KPs (granulomatous — sarcoid/TB). Anterior chamber cells and flare (Tyndall effect). Posterior synechiae (irregular pupil). Hypopyon in severe HLA-B27 disease.
TREATMENT: Topical steroids (prednisolone acetate 1% hourly, taper). Cycloplegics (atropine 1% or cyclopentolate 1%) — prevent synechiae, reduce pain. Periocular/systemic steroids for severe cases.
COMPLICATIONS: Posterior synechiae → iris bombé → secondary angle-closure. Band keratopathy. Cataract. Macular edema. Hypotony.`
    },
    {
      id: "uvea_002",
      disease: "Posterior Uveitis / Chorioretinitis",
      category: "Uveal Tract Diseases",
      keywords: ["floaters", "visual loss", "chorioretinal lesions", "toxoplasmosis", "CMV retinitis", "vitritis", "headlight in fog", "pizza pie", "CD4"],
      content: `Posterior uveitis involves the choroid, retina, and/or vitreous.
ETIOLOGY: Toxoplasma gondii (commonest cause worldwide), CMV (immunocompromised), TB, syphilis, toxocariasis. Non-infectious: sarcoidosis, Behçet, VKH, birdshot chorioretinopathy.
SYMPTOMS: Floaters, blurred vision, scotoma, painless visual loss.
TOXOPLASMOSIS: Focal necrotizing retinochoroiditis — "headlight in fog" (white active lesion adjacent to old pigmented scar), vitritis, minimal anterior reaction.
CMV RETINITIS (AIDS, CD4 <50): "Pizza pie" — hemorrhages and white necrotic retina along vessels, brushfire progression.
TOXOCARIASIS: Peripheral or posterior pole granuloma in children. Endophthalmitis presentation.
DIAGNOSIS: FFA, OCT, serology, PCR of aqueous/vitreous, FBC, HIV, CD4 count.
TREATMENT: Toxoplasmosis: pyrimethamine + sulfadiazine + folinic acid + systemic steroids. CMV: valganciclovir oral or IV ganciclovir, HAART.`
    },
    {
      id: "uvea_003",
      disease: "Sympathetic Ophthalmia",
      category: "Uveal Tract Diseases",
      keywords: ["penetrating injury", "bilateral granulomatous uveitis", "exciting eye", "sympathizing eye", "Dalen-Fuchs nodules", "mutton fat KPs", "panuveitis", "autoimmune"],
      content: `Sympathetic ophthalmia is bilateral granulomatous panuveitis following penetrating ocular injury or intraocular surgery.
PATHOGENESIS: T-cell autoimmune response to uveal antigens after penetrating injury. Exciting eye (injured) sensitizes sympathizing eye (fellow eye).
ONSET: 80% within 3 months of injury (range 9 days to decades).
SYMPTOMS: Bilateral uveitis — photophobia, pain, redness, blurred vision in BOTH eyes.
SIGNS: Mutton-fat KPs, AC cells and flare, posterior synechiae, vitritis, Dalen-Fuchs nodules (depigmented subretinal granulomas — pathognomonic), exudative RD, disc edema.
TREATMENT: High-dose systemic prednisolone (1-2mg/kg/day) tapered slowly over months-years. Immunosuppressants: azathioprine, mycophenolate, cyclosporin. Enucleation of exciting eye within 2 weeks of injury may prevent (controversial).`
    },
    {
      id: "uvea_004",
      disease: "Vogt-Koyanagi-Harada (VKH) Syndrome",
      category: "Uveal Tract Diseases",
      keywords: ["bilateral panuveitis", "exudative retinal detachment", "poliosis", "vitiligo", "alopecia", "meningism", "tinnitus", "dysacusis", "Japanese", "sunset glow fundus"],
      content: `VKH syndrome is a bilateral granulomatous panuveitis with systemic involvement of melanocyte-rich organs.
EPIDEMIOLOGY: Asians, Middle Eastern, Hispanic populations. T-cell mediated autoimmunity against melanocyte antigens.
PHASES: Prodromal (meningism, fever, headache, tinnitus, dysacusis, alopecia). Uveitic (bilateral panuveitis, exudative retinal detachment, disc edema). Convalescent (Sunset glow fundus — depigmented, Sugiura sign — perilimbal depigmentation, Dalen-Fuchs nodules). Chronic recurrent (anterior uveitis recurrences).
SYSTEMIC FEATURES: Poliosis (white hair/lashes), vitiligo, alopecia, meningism, tinnitus, dysacusis, CSF pleocytosis.
DIAGNOSIS: Clinical. B-scan, FFA (multiple pinpoint leaks), OCT (subretinal fluid).
TREATMENT: High-dose systemic steroids (IV methylprednisolone pulse then oral). Long-term immunosuppression (azathioprine, mycophenolate).`
    },
    {
      id: "uvea_005",
      disease: "Behçet Disease — Ocular Manifestations",
      category: "Uveal Tract Diseases",
      keywords: ["recurrent hypopyon uveitis", "retinal vasculitis", "oral ulcers", "genital ulcers", "pathergy", "Turkish patients", "occlusive vasculitis", "bilateral"],
      content: `Behçet disease is a systemic vasculitis with recurrent oral/genital ulcers and ocular inflammation.
EPIDEMIOLOGY: Silk Road distribution — Turkey, Iran, Japan, Middle East. HLA-B51 association.
DIAGNOSTIC CRITERIA: Recurrent oral ulcers + 2 of: genital ulcers, eye lesions, skin lesions (erythema nodosum, pseudofolliculitis), positive pathergy test.
OCULAR FEATURES: Recurrent bilateral panuveitis. Hypopyon uveitis (shifting hypopyon — pathognomonic). Retinal vasculitis (occlusive — affects veins and arteries), retinal infiltrates, disc edema, macular edema. Vitreous hemorrhage. Progressive retinal damage → blindness in 25%.
TREATMENT: Topical/systemic steroids for acute attacks. Systemic immunosuppression: azathioprine, ciclosporin, interferon-alpha. Anti-TNF (infliximab, adalimumab) for severe/refractory.`
    },
    {
      id: "uvea_006",
      disease: "Uveal Melanoma",
      category: "Uveal Tract Diseases",
      keywords: ["choroidal melanoma", "visual field defect", "subretinal fluid", "collar stud", "melanocytic lesion", "B-scan", "metastasis to liver", "COMS", "brachytherapy"],
      content: `Uveal melanoma is the most common primary intraocular malignancy in adults.
TYPES: Choroidal (commonest, 85%), ciliary body, iris (best prognosis).
SYMPTOMS: Often asymptomatic early. Visual field defect, photopsia, floaters, visual loss. Iris melanoma: pigmented iris lesion, glaucoma.
SIGNS: Choroidal: Elevated pigmented or amelanotic choroidal mass. Orange pigment (lipofuscin) on surface — characteristic. Collar stud appearance (breaks through Bruch's membrane). Associated exudative retinal detachment.
INVESTIGATIONS: B-scan ultrasound (low internal reflectivity, acoustic hollowness). FFA, OCT. FNA biopsy for diagnosis/prognostic testing (monosomy 3, BAP1 mutation). Systemic staging (liver USS/MRI — liver is primary metastatic site).
TREATMENT: Small: observation or transpupillary thermotherapy. Medium: plaque brachytherapy (Ru-106 or I-125 — gold standard). Large: enucleation. Proton beam radiotherapy. Liver metastases: poor prognosis, median survival 6-12 months.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 5: GLAUCOMA
    // ═══════════════════════════════════════════════════════════════
    {
      id: "glauc_001",
      disease: "Primary Open Angle Glaucoma (POAG)",
      category: "Glaucoma",
      keywords: ["raised IOP", "optic disc cupping", "visual field defect", "open angle", "insidious onset", "painless", "cup disc ratio", "arcuate scotoma", "RNFL thinning", "prostaglandin"],
      content: `POAG is a chronic progressive optic neuropathy — commonest form of glaucoma worldwide.
RISK FACTORS: Elevated IOP, positive family history, African ancestry, myopia, thin central cornea, diabetes, advancing age.
SYMPTOMS: Usually ASYMPTOMATIC until advanced. Peripheral visual field loss unnoticed due to binocular overlap.
SIGNS: Raised IOP (>21mmHg, though 30% are normal tension glaucoma). Optic disc: increased C:D ratio (>0.6), asymmetry >0.2, vertical elongation, notching (ISNT rule — inferior > superior > nasal > temporal), Drance hemorrhage, peripapillary atrophy. Open angle on gonioscopy. Visual fields: arcuate scotoma (Bjerrum), nasal step (Ronne), tunnel vision late. RNFL thinning on OCT.
TREATMENT: Lower IOP 20-30% below baseline. Medical: Prostaglandin analogues (latanoprost, bimatoprost — first line, once daily). Beta-blockers (timolol). CAIs (dorzolamide). Alpha-agonists (brimonidine). Laser: SLT. Surgery: Trabeculectomy, tube surgery, MIGS.`
    },
    {
      id: "glauc_002",
      disease: "Acute Primary Angle Closure Glaucoma (AACG)",
      category: "Glaucoma",
      keywords: ["severe eye pain", "nausea vomiting", "halos around lights", "fixed mid-dilated pupil", "hazy cornea", "rock hard eye", "hypermetrope", "shallow anterior chamber", "emergency", "pilocarpine"],
      content: `AACG is an ophthalmic emergency with sudden dramatic IOP rise due to complete anterior chamber angle closure.
RISK FACTORS: Hypermetropia, female sex, Asian ethnicity, increasing age, shallow anterior chamber.
PRECIPITANTS: Mydriasis (dim light, anticholinergics, antihistamines, sympathomimetics, stress).
SYMPTOMS: Sudden severe unilateral eye pain, headache, nausea and vomiting (mimics migraine/acute abdomen), blurred vision, colored halos around lights.
SIGNS: Reduced VA, circumcorneal injection, hazy/steamy cornea, shallow/obliterated AC, fixed semi-dilated oval pupil (5-6mm), rock-hard eye, IOP 40-70+ mmHg.
TREATMENT: IV acetazolamide 500mg + oral glycerol/mannitol + topical pilocarpine 2-4% (after IOP reduction) + topical timolol + topical steroids. Definitive: Laser peripheral iridotomy (LPI). Fellow eye prophylactic LPI.
COMPLICATIONS: Visual field loss, optic atrophy, glaukomflecken (lens opacities), corneal decompensation.`
    },
    {
      id: "glauc_003",
      disease: "Normal Tension Glaucoma (NTG)",
      category: "Glaucoma",
      keywords: ["normal IOP", "glaucomatous disc", "visual field loss", "IOP less than 21", "vasospasm", "migraine", "nocturnal hypotension", "disc hemorrhage", "Flammer syndrome"],
      content: `Normal tension glaucoma is glaucomatous optic neuropathy with IOP consistently ≤21mmHg — accounts for 30-40% of POAG.
PATHOGENESIS: Vascular insufficiency (vasospasm, nocturnal hypotension), mechanical compression, increased susceptibility of optic nerve. Flammer syndrome (vasospastic personality — migraine, cold hands/feet, low BP, slim female).
RISK FACTORS: Japanese ethnicity, female, migraine, Raynaud's, systemic hypotension, sleep apnoea.
SIGNS: Glaucomatous disc changes (notching, cup enlargement — often more marked inferiorly), disc hemorrhages (more common than POAG — Drance hemorrhage), visual field defects (often denser, closer to fixation, steeper-edged), normal IOP on repeated measurement.
INVESTIGATIONS: Exclude other causes of optic neuropathy (MRI brain/orbit). 24-hour IOP curve (diurnal variation). Ambulatory BP monitoring (nocturnal dip).
TREATMENT: Lower IOP by 30% from baseline (even though normal) — target <12mmHg in some. Prostaglandins, dorzolamide. Address vascular risk factors (avoid nocturnal hypotension, calcium channel blockers for vasospasm).`
    },
    {
      id: "glauc_004",
      disease: "Congenital / Infantile Glaucoma (Buphthalmos)",
      category: "Glaucoma",
      keywords: ["buphthalmos", "enlarged globe", "photophobia", "epiphora", "blepharospasm", "Haab striae", "infant", "megalocornea", "cloudy cornea", "Barkan triad"],
      content: `Congenital glaucoma results from maldevelopment of the trabecular meshwork causing raised IOP in infancy.
GENETICS: AR (CYP1B1 gene mutation). Male predominance. Associated syndromes: Sturge-Weber, aniridia, Marfan, Lowe.
CLASSIC TRIAD (Barkan): Epiphora (tearing), photophobia, blepharospasm.
SIGNS: Buphthalmos (enlarged globe — infant eye distensible), megalocornea (diameter >12mm in neonate), corneal haze (edema), Haab's striae (horizontal Descemet breaks — pathognomonic), deep AC, raised IOP, disc cupping.
DIAGNOSIS: EUA — IOP, corneal diameter, gonioscopy, disc assessment.
TREATMENT: SURGICAL (primary — unlike adult glaucoma). Goniotomy (clear cornea) or trabeculotomy ab externo. Trabeculectomy + MMC if above fail. Early surgery essential — amblyopia prevention.`
    },
    {
      id: "glauc_005",
      disease: "Secondary Glaucomas",
      category: "Glaucoma",
      keywords: ["neovascular glaucoma", "rubeosis iridis", "phacolytic", "pseudoexfoliation", "pigment dispersion", "steroid-induced", "uveitic glaucoma", "traumatic", "elevated IOP secondary"],
      content: `Secondary glaucomas have an identifiable cause for raised IOP and optic neuropathy.
NEOVASCULAR GLAUCOMA (NVG): Rubeosis iridis (iris neovascularization) — caused by ischemic CRVO, proliferative DR, CRAO, ocular ischemic syndrome → fibrovascular membrane over angle → closure → very high IOP. Treatment: Anti-VEGF (intravitreal) + PRP + IOP lowering + tube surgery.
PHACOLYTIC GLAUCOMA: Hypermature cataract → leaking lens proteins → trabecular blockage. Treatment: Urgent cataract extraction.
PSEUDOEXFOLIATION GLAUCOMA: Fibrillar material deposits on lens capsule, iris, angle → trabecular blockage. Asymmetric, responds less to medication.
PIGMENT DISPERSION GLAUCOMA: Iris pigment rubbing posterior corneal surface (Krukenberg spindle) → trabecular blockage. Young myopic males. Pigmentary rings on iris (Scheie stripe). Laser iridotomy + medications.
STEROID-INDUCED GLAUCOMA: Open angle IOP rise 4-6 weeks after topical/systemic steroids. Stop steroids if possible, topical IOP-lowering agents.
UVEITIC GLAUCOMA: Trabecular inflammation, peripheral anterior synechiae, pupil block from posterior synechiae.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 6: LENS DISORDERS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "lens_001",
      disease: "Cataract — All Types",
      category: "Lens Disorders",
      keywords: ["lens opacity", "blurred vision", "glare", "reduced contrast", "nuclear sclerosis", "cortical spokes", "posterior subcapsular", "myopic shift", "second sight", "congenital cataract"],
      content: `Cataract is lens opacity and the leading cause of reversible blindness worldwide.
TYPES:
AGE-RELATED: Nuclear sclerosis — central yellowing/hardening, myopic shift (index myopia — "second sight"), brunescent (brown) cataract. Cortical — spoke-like opacities from periphery, glare. PSC (posterior subcapsular) — most visually significant, central posterior, worst for near vision/glare, associated with steroids/diabetes.
CONGENITAL: TORCH (rubella — pearlescent nuclear), galactosaemia (oil droplet), Lowe syndrome, Down syndrome. Leukocoria presentation.
TRAUMATIC: Rosette-shaped (blunt), Vossius ring (iris pigment imprint), perforating injury.
SECONDARY: Steroids (PSC), diabetes, uveitis, radiation.
SYMPTOMS: Painless progressive blur, glare (especially night driving), monocular diplopia, altered color perception, frequent spectacle changes.
TREATMENT: Phacoemulsification + IOL implantation (gold standard). Indications: VA affecting daily life, or cataract causing complications (phacolytic/phacomorphic glaucoma).
COMPLICATIONS OF SURGERY: PCO (commonest late — Nd:YAG capsulotomy). Endophthalmitis (0.1% — most serious). CME. Posterior capsule rupture. IOL dislocation.`
    },
    {
      id: "lens_002",
      disease: "Ectopia Lentis (Lens Dislocation)",
      category: "Lens Disorders",
      keywords: ["lens subluxation", "iridodonesis", "phacodonesis", "Marfan syndrome", "homocystinuria", "Weill-Marchesani", "monocular diplopia", "zonule weakness"],
      content: `Ectopia lentis is displacement of the crystalline lens from its normal position.
TYPES: Subluxation (partial dislocation — zonules partially intact) vs luxation (complete dislocation — zonules completely ruptured).
ETIOLOGY: Hereditary: Marfan syndrome (upward/temporal displacement, superotemporal), homocystinuria (downward/nasal — inferionasal), Weill-Marchesani (microspherophakia, anteriorly displaced). Traumatic: most common acquired cause.
SYMPTOMS: Iridodonesis (iris trembling), phacodonesis (lens trembling with eye movement), monocular diplopia, severe irregular myopia/astigmatism, blurred vision, secondary glaucoma (pupil block).
SIGNS: Visible lens edge in pupil, iridodonesis, phacodonesis, pigment rings on lens from iris rubbing, aphakic portion of pupil (red reflex without lens).
TREATMENT: Spectacle/CL correction for mild subluxation. Surgical lens removal + ACIOL or scleral-fixated IOL for significant visual disturbance or glaucoma. Marfan: cardiology review (aortic root dilation).`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 7: VITREOUS DISORDERS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "vitr_001",
      disease: "Posterior Vitreous Detachment (PVD)",
      category: "Vitreous Disorders",
      keywords: ["floaters", "flashes", "Weiss ring", "photopsia", "sudden onset floaters", "myopia", "ageing", "retinal tear risk", "cobweb floaters"],
      content: `PVD is separation of the vitreous cortex from the internal limiting membrane of the retina — the commonest vitreous disorder.
EPIDEMIOLOGY: Occurs in >65% of people over 65 years. Earlier in myopes, post-cataract surgery, after trauma, uveitis.
SYMPTOMS: Sudden onset of floaters (new ring-shaped floater — Weiss ring floater when optic disc adhesion releases, or cobweb/strands), photopsia (flashing lights — especially in peripheral/temporal field — from vitreoretinal traction). Symptoms typically improve over weeks as vitreous settles.
SIGNS: Weiss ring (circular floater representing released optic disc attachment). Important: check for retinal tears (horseshoe/flap tears, operculated holes) — indicate vitreous has torn retina. Tobacco dust (Shafer's sign — pigment cells in vitreous) = retinal break until proven otherwise.
COMPLICATIONS: Retinal tear → rhegmatogenous retinal detachment (5-15% risk if symptomatic PVD), vitreous hemorrhage (from avulsed retinal vessel), macular hole.
MANAGEMENT: Dilated fundal examination ± scleral indentation urgently. Repeat examination in 4-6 weeks. Laser/cryotherapy to seal any retinal tears found.`
    },
    {
      id: "vitr_002",
      disease: "Vitreous Hemorrhage",
      category: "Vitreous Disorders",
      keywords: ["sudden visual loss", "floaters", "red haze", "loss of red reflex", "no fundal view", "PDR", "retinal tear", "B-scan", "dark floaters"],
      content: `Vitreous hemorrhage is bleeding into the vitreous cavity causing sudden visual disturbance.
ETIOLOGY: Proliferative diabetic retinopathy (most common), retinal tear/detachment, CRVO, sickle cell retinopathy, trauma, Terson syndrome (subarachnoid hemorrhage), Valsalva retinopathy, AMD, macroaneurysm.
SYMPTOMS: Sudden onset of dark floaters ("dark shower"), red haze, sudden visual loss (variable — from mild blur to hand movements/perception of light only). Painless.
SIGNS: Reduced VA, absent red reflex, no fundal view (severity depends on density of bleed). B-scan ultrasound ESSENTIAL (to exclude underlying retinal detachment).
INVESTIGATIONS: B-scan USS (look for retinal detachment, PVD, underlying mass). Blood glucose, BP, clotting studies.
TREATMENT: Conservative if no RD — head elevation (30°), bilateral eye patching, avoid Valsalva, anti-VEGF injections (for PDR). Surgical: PPV if no spontaneous clearance in 2-3 months, or if RD present, or dense hemorrhage in monocular patient.`
    },
    {
      id: "vitr_003",
      disease: "Asteroid Hyalosis",
      category: "Vitreous Disorders",
      keywords: ["white vitreous opacities", "calcium soap deposits", "snowball floaters", "unilateral", "older patients", "good vision", "attached vitreous", "bilateral rare"],
      content: `Asteroid hyalosis is a degenerative condition of the vitreous with calcium-lipid deposits (calcium soaps/phosphates).
EPIDEMIOLOGY: Usually unilateral (80%), older patients, often in diabetics. Usually asymptomatic.
PATHOLOGY: Multiple white-yellow spherical particles (calcium palmitate/phosphate) suspended throughout vitreous — remain attached to vitreous framework (unlike synchysis scintillans).
SYMPTOMS: Usually asymptomatic despite dramatic appearance. Mild floaters occasionally. Vision typically UNAFFECTED (particles attached to vitreous, not in visual axis).
SIGNS: White/yellow glistening spherical opacities throughout vitreous on slit lamp — "snowflakes in a snow globe." Vitreous remains gel-like and attached. Good red reflex maintained. Fundal view usually possible despite appearance.
DIFFERENTIATION from synchysis scintillans: Synchysis scintillans — cholesterol crystals, bilateral, mobile (settle inferiorly when eye still), associated with previous hemorrhage/trauma.
TREATMENT: Usually none required. PPV only if severely affecting vision (rare).`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 8: RETINAL DISEASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "ret_001",
      disease: "Diabetic Retinopathy",
      category: "Retinal Diseases",
      keywords: ["diabetes", "microaneurysms", "dot blot hemorrhages", "hard exudates", "cotton wool spots", "neovascularization", "vitreous hemorrhage", "macular edema", "PDR", "NPDR", "4-2-1 rule"],
      content: `Diabetic retinopathy is the leading cause of blindness in working-age adults in developed countries.
PATHOPHYSIOLOGY: Chronic hyperglycemia → pericyte loss → microaneurysms → vascular permeability → ischemia → VEGF → neovascularization.
CLASSIFICATION — NPDR: Mild (microaneurysms only). Moderate (MAs + hemorrhages + hard exudates + CWS). Severe/pre-proliferative — 4-2-1 rule: hemorrhages in 4 quadrants OR venous beading in 2 quadrants OR IRMA in 1 quadrant.
PROLIFERATIVE DR (PDR): NVD (disc neovascularization) or NVE (elsewhere). Risk: vitreous hemorrhage, tractional RD.
DME: Thickening within 500μm of fovea — main cause of visual loss in Type 2 DM.
TREATMENT: Systemic — optimise HbA1c (<7%), BP control, lipid management. DME: Intravitreal anti-VEGF (first line) — ranibizumab, bevacizumab, aflibercept. Focal/grid laser. Intravitreal steroid implants. PDR: PRP (panretinal photocoagulation) + anti-VEGF. Vitreoretinal surgery for VH/TRD.`
    },
    {
      id: "ret_002",
      disease: "Rhegmatogenous Retinal Detachment (RRD)",
      category: "Retinal Diseases",
      keywords: ["flashes", "floaters", "curtain shadow", "visual field loss", "tobacco dust", "Shafer sign", "myopia", "horseshoe tear", "lattice degeneration", "surgical emergency"],
      content: `RRD is separation of neurosensory retina from RPE due to full-thickness retinal break with ingress of liquefied vitreous.
RISK FACTORS: Myopia (most important), previous cataract surgery, trauma, family history, lattice degeneration.
PATHOPHYSIOLOGY: PVD → vitreoretinal traction → retinal break → liquefied vitreous passes through → separates retina from RPE.
SYMPTOMS: Photopsia (flashing lights — traction), floaters (new onset — "shower" or "cobwebs"), curtain/shadow in visual field, central loss if macula detaches.
SIGNS: Reduced VA (macula off), RAPD in extensive detachment, Shafer's sign (tobacco dust in vitreous — pathognomonic of retinal break), visible tear, elevated corrugated retina.
INVESTIGATIONS: B-scan USS if media hazy. OCT (macular status).
TREATMENT: SURGICAL EMERGENCY (especially macula-on): Pneumatic retinopexy (gas + laser/cryo). Scleral buckling (indent sclera). PPV with gas/silicone oil tamponade (most versatile).
PROGNOSIS: Macula-on: excellent if repaired promptly. Macula-off: variable central vision recovery.`
    },
    {
      id: "ret_003",
      disease: "Age-Related Macular Degeneration (AMD)",
      category: "Retinal Diseases",
      keywords: ["central visual loss", "distortion", "drusen", "Amsler grid", "choroidal neovascularization", "subretinal fluid", "metamorphopsia", "elderly", "anti-VEGF", "geographic atrophy"],
      content: `AMD is the leading cause of irreversible central visual loss in patients over 50 in developed countries.
RISK FACTORS: Age (strongest), smoking (2x risk), family history, pale iris, cardiovascular disease.
DRY AMD (85-90%): Drusen (hard — benign; soft/confluent — high risk). Geographic atrophy (GA) — loss of RPE and photoreceptors. Slow progressive central visual loss.
WET AMD (10-15%): CNV (choroidal neovascularization) — abnormal vessels through Bruch's → hemorrhage, exudate, rapid visual loss. Accounts for 90% of severe AMD visual loss.
SYMPTOMS: Metamorphopsia (straight lines appear wavy), central scotoma, reduced central vision, difficulty reading. Peripheral vision preserved.
INVESTIGATIONS: Amsler grid (distortion/scotoma). FFA, OCT (gold standard — fluid, CNV, drusen). OCTA.
TREATMENT: Dry: AREDS2 supplements (vitamins C, E, lutein, zeaxanthin, zinc) — slows intermediate/advanced AMD. Wet: Intravitreal anti-VEGF (ranibizumab, bevacizumab, aflibercept, brolucizumab) — monthly loading then PRN/T&E.`
    },
    {
      id: "ret_004",
      disease: "Central Retinal Artery Occlusion (CRAO)",
      category: "Retinal Diseases",
      keywords: ["sudden painless visual loss", "cherry red spot", "milky white retina", "boxcarring", "RAPD", "emboli", "carotid disease", "pale optic disc", "amaurosis fugax", "GCA"],
      content: `CRAO is an ophthalmic emergency causing sudden profound painless visual loss.
ETIOLOGY: Embolic (carotid atherosclerosis — Hollenhorst plaques, cardiac — AF, valvular), thrombotic (GCA, hypercoagulable), vasospastic (young patients).
SYMPTOMS: Sudden PAINLESS severe visual loss (usually CF or worse). Preceding amaurosis fugax in some.
SIGNS: Markedly reduced VA, RAPD, milky white/pale optic disc and retina (ischemic inner retinal edema), CHERRY RED SPOT at fovea (pathognomonic — choroidal circulation visible through fovea devoid of inner retinal layers), attenuated arteries, boxcarring (blood column segmentation). Hollenhorst plaques at bifurcations.
INVESTIGATIONS: FFA, ESR/CRP (URGENT — exclude GCA), carotid Doppler, echo, ECG, FBC, clotting.
TREATMENT (within 90 min): Ocular massage. IV acetazolamide. AC paracentesis. Carbogen inhalation. GCA: IMMEDIATE IV methylprednisolone.
PROGNOSIS: Very poor visual recovery. 30-day stroke risk ~10%.`
    },
    {
      id: "ret_005",
      disease: "Central Retinal Vein Occlusion (CRVO)",
      category: "Retinal Diseases",
      keywords: ["tortuous veins", "flame hemorrhages all quadrants", "disc edema", "cotton wool spots", "macular edema", "rubeosis", "neovascular glaucoma", "ischemic CRVO", "hypertension"],
      content: `CRVO is occlusion of the central retinal vein at the lamina cribrosa causing venous stasis retinopathy.
RISK FACTORS: Hypertension (most important), hyperlipidemia, diabetes, glaucoma, hypercoagulable states.
NON-ISCHEMIC (75%): Mild-moderate visual loss, <10 DA non-perfusion on FFA. Better prognosis.
ISCHEMIC (25%): Severe visual loss (VA <6/60), >10 DA non-perfusion, RAPD. Risk of rubeosis iridis → neovascular glaucoma.
SIGNS: Disc edema, dilated tortuous veins in ALL 4 quadrants, flame hemorrhages all quadrants, CWS, macular edema. Ischemic: RAPD present.
INVESTIGATIONS: FFA (non-perfusion extent), OCT (macular edema), BP, blood tests.
TREATMENT: Macular edema: Intravitreal anti-VEGF or dexamethasone implant (Ozurdex). Ischemic CRVO: PRP when rubeosis develops. IOP control for NVG.`
    },
    {
      id: "ret_006",
      disease: "Branch Retinal Artery/Vein Occlusion (BRAO/BRVO)",
      category: "Retinal Diseases",
      keywords: ["sectoral visual field defect", "altitudinal defect", "segmental hemorrhages", "arteriovenous crossing", "flame hemorrhages sector", "embolus", "BRAO", "BRVO"],
      content: `BRAO and BRVO are occlusions of branches of the retinal circulation causing sectoral visual disturbance.
BRAO: Embolic occlusion of branch retinal artery. Sudden altitudinal or sectoral visual field defect. Sectoral area of retinal whitening (superficial ischemic edema) corresponding to distribution. Embolus visible at arterial bifurcation. Investigations same as CRAO (stroke risk). Treatment: as CRAO (limited evidence).
BRVO: Occlusion of branch retinal vein, most commonly at arteriovenous (AV) crossing (arteriosclerotic artery compresses vein). Sectoral flame hemorrhages in wedge distribution with apex at AV crossing. Macular edema (main cause of visual loss). Cotton wool spots. Neovascularization in sector (10-20% — treat with sectoral laser).
RISK FACTORS: Hypertension (most important for BRVO), atherosclerosis.
TREATMENT BRVO: Macular edema: intravitreal anti-VEGF or dexamethasone implant. Sectoral NV: sectoral PRP. Control BP.`
    },
    {
      id: "ret_007",
      disease: "Retinitis Pigmentosa (RP)",
      category: "Retinal Diseases",
      keywords: ["night blindness", "tunnel vision", "bone spicule pigmentation", "attenuated vessels", "waxy disc pallor", "ERG extinguished", "rod photoreceptor", "progressive", "hereditary retinal dystrophy"],
      content: `Retinitis pigmentosa is the most common inherited retinal dystrophy, causing progressive photoreceptor degeneration.
GENETICS: AD (best prognosis), AR (most common overall), X-linked (most severe — males affected). Over 80 genes implicated (RHO, RPGR, PRPF31, USH2A).
PATHOLOGY: Primary rod photoreceptor degeneration → secondary cone involvement.
SYMPTOMS: Night blindness (nyctalopia) — earliest symptom. Progressive peripheral visual field constriction → tunnel vision → eventually central loss.
SIGNS: Bone spicule pigmentation (mid-peripheral retina — pathognomonic pattern). Attenuated retinal vessels. Waxy/pale optic disc. Posterior subcapsular cataract (common). Cystoid macular edema.
INVESTIGATIONS: ERG (electroretinogram) — reduced/extinguished rod and cone responses (diagnostic). Goldmann visual fields (ring scotoma → tunnel). Colour vision (relatively preserved early). Genetic testing.
ASSOCIATED SYNDROMES: Usher syndrome (RP + sensorineural deafness — most common), Bardet-Biedl syndrome, Refsum disease (phytanic acid).
TREATMENT: No curative treatment. Vitamin A palmitate supplements (slow progression). Acetazolamide for CME. Genetic counselling. Low vision aids. Retinal prosthesis (Argus II) for advanced disease.`
    },
    {
      id: "ret_008",
      disease: "Stargardt Disease",
      category: "Retinal Diseases",
      keywords: ["juvenile macular dystrophy", "ABCA4 mutation", "beaten bronze atrophy", "flecks", "dark choroid", "central visual loss", "young adults", "bull's eye maculopathy"],
      content: `Stargardt disease is the most common inherited macular dystrophy, caused by ABCA4 gene mutations (AR).
ONSET: Usually 1st-2nd decade.
PATHOLOGY: ABCA4 mutation → impaired retinoid transport → lipofuscin accumulation in RPE → RPE cell death → photoreceptor loss.
SYMPTOMS: Progressive central visual loss in children/young adults, difficulty reading, reduced color vision. Peripheral vision and night vision initially preserved.
SIGNS: Beaten bronze/snail-slime macular atrophy (geographic RPE atrophy). Yellow-white flecks at posterior pole and beyond (lipofuscin deposits — pisciform flecks). Bull's eye maculopathy pattern in some.
INVESTIGATIONS: FFA — dark/silent choroid (blocked choroidal fluorescence by lipofuscin — pathognomonic). FAF (fundus autofluorescence) — hyperautofluorescence of flecks, hypoautofluorescence of atrophic areas. ERG (cone function reduced, scotopic relatively preserved). Genetic testing.
TREATMENT: No proven disease-modifying treatment. Avoid vitamin A supplements (may accelerate lipofuscin accumulation). UV-protective sunglasses. Low vision rehabilitation. Gene therapy trials ongoing.`
    },
    {
      id: "ret_009",
      disease: "Macular Hole",
      category: "Retinal Diseases",
      keywords: ["central scotoma", "metamorphopsia", "full thickness", "Watzke-Allen test", "Amsler grid", "myopia", "Gass classification", "vitrectomy", "gas tamponade"],
      content: `Macular hole is a full-thickness defect in the neurosensory retina at the fovea causing central visual loss.
ETIOLOGY: Idiopathic (80% — vitreous traction on fovea), trauma, high myopia, CME, solar retinopathy.
GASS CLASSIFICATION: Stage 1 (foveal detachment — impending hole). Stage 2 (small full-thickness hole <400μm). Stage 3 (full-thickness hole >400μm without PVD). Stage 4 (full-thickness hole with complete PVD — Weiss ring).
SYMPTOMS: Central scotoma (central blur), metamorphopsia (distortion), reduced VA (6/24-6/60 range).
SIGNS: Round, punched-out, full-thickness foveal defect. Yellow deposits at base of hole. Surrounding cuff of subretinal fluid. Watzke-Allen test (slit beam appears broken/interrupted at hole).
INVESTIGATIONS: OCT — diagnostic gold standard (shows all layers disrupted, measurement of size and base diameter).
TREATMENT: PPV (pars plana vitrectomy) + ILM peeling + gas tamponade (SF6 or C3F8) + face-down positioning for 1-2 weeks. Closure rate >90% for stages 2-4. Long-standing holes have poorer prognosis.`
    },
    {
      id: "ret_010",
      disease: "Epiretinal Membrane (Macular Pucker)",
      category: "Retinal Diseases",
      keywords: ["metamorphopsia", "distortion", "cellophane maculopathy", "wrinkling", "Amsler grid", "OCT", "idiopathic", "secondary ERM", "vitrectomy ILM peel"],
      content: `Epiretinal membrane (ERM) is fibrocellular proliferation on the inner retinal surface causing macular distortion.
ETIOLOGY: Idiopathic (most common — Müller cells/RPE cells after PVD), secondary to: retinal laser/surgery, RD, uveitis, trauma, vascular occlusions, DR.
SYMPTOMS: Metamorphopsia (distortion — often gradual onset), blurred central vision, monocular diplopia. May be asymptomatic (cellophane maculopathy).
SIGNS: Glistening sheen on macular surface (cellophane appearance), retinal wrinkling/striae, vascular dragging/tortuosity, pseudohole (not a true hole — ERM contracts and creates false appearance).
INVESTIGATIONS: OCT (gold standard — thickened ERM on inner retinal surface, increased central macular thickness, loss of foveal contour). FFA (vascular distortion, leakage from CME).
TREATMENT: Observation if mild. PPV + ERM peeling ± ILM peeling if significant metamorphopsia or VA loss. Outcomes: metamorphopsia improves in 70%, VA improves in 80%. Rarely resolves spontaneously.`
    },
    {
      id: "ret_011",
      disease: "Central Serous Chorioretinopathy (CSCR)",
      category: "Retinal Diseases",
      keywords: ["young men", "stress", "subretinal fluid", "serous detachment", "micropsia", "positive relative scotoma", "steroid use", "type A personality", "leakage on FFA"],
      content: `CSCR is accumulation of subretinal fluid under the neurosensory retina due to RPE dysfunction, predominantly in young men.
EPIDEMIOLOGY: Young-middle aged men (20-45 years), type A personality, steroid use, stress, pregnancy, Cushing syndrome.
PATHOGENESIS: RPE pump dysfunction → fluid from choriocapillaris accumulates under neurosensory retina.
SYMPTOMS: Painless blurred vision (usually mild, 6/9-6/18), metamorphopsia (distortion), micropsia (objects appear smaller), positive relative central scotoma, reduced contrast sensitivity.
SIGNS: Localized dome-shaped serous neurosensory detachment at posterior pole. RPE detachment may be present. Near-normal or mildly reduced VA.
INVESTIGATIONS: OCT (subretinal fluid under neurosensory retina, RPE detachment). FFA — "smoke-stack" (expanding plume of leakage) or "ink-blot" pattern at RPE leak point. ICGA (choroidal vascular hyperpermeability).
TREATMENT: Most acute cases resolve spontaneously in 3-4 months — observation. Reduce/stop systemic steroids. Focal laser photocoagulation to RPE leak (if >4 months or extrafoveal leak). Photodynamic therapy (PDT) with verteporfin — gold standard for chronic CSCR (>4 months). Oral spironolactone/eplerenone (mineralocorticoid antagonists).`
    },
    {
      id: "ret_012",
      disease: "Retinopathy of Prematurity (ROP)",
      category: "Retinal Diseases",
      keywords: ["premature infant", "low birth weight", "oxygen therapy", "zone", "stage", "plus disease", "ridge", "neovascularization", "retinal detachment neonatal", "leukocoria infant"],
      content: `ROP is a vasoproliferative retinopathy in premature infants due to abnormal retinal vascular development.
RISK FACTORS: Prematurity (<32 weeks gestational age), low birth weight (<1500g), supplemental oxygen therapy.
PATHOGENESIS: Premature birth → loss of placental VEGF → oxygen therapy → suppresses VEGF → vascular cessation (Phase 1). Then relative hypoxia → VEGF surge → neovascularization (Phase 2).
CLASSIFICATION: Zone (I=posterior, II=middle, III=peripheral). Stage (1=demarcation line, 2=ridge, 3=ridge + extraretinal fibrovascular proliferation, 4=partial RD, 5=total RD). Plus disease: posterior pole vascular dilation and tortuosity (aggressive activity marker).
THRESHOLD DISEASE: Treatment criteria — stage 3 in zone I or II with plus disease (5 contiguous or 8 cumulative clock hours).
TREATMENT: Laser photocoagulation to avascular retina. Intravitreal anti-VEGF (bevacizumab) — especially for Zone I disease. Surgical vitrectomy for advanced retinal detachment (stage 4/5).
SCREENING: All infants <32 weeks or <1500g — first examination at 4-6 weeks chronological age.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 9: NEURO-OPHTHALMOLOGY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "neuro_001",
      disease: "Optic Neuritis",
      category: "Neuro-ophthalmology",
      keywords: ["painful visual loss", "RAPD", "color desaturation", "Pulfrich effect", "Uhthoff phenomenon", "multiple sclerosis", "retrobulbar", "VEP delayed", "pain on eye movement"],
      content: `Optic neuritis is inflammation of the optic nerve, strongly associated with multiple sclerosis.
EPIDEMIOLOGY: Young adults (20-45 years), female predominance. 50% develop MS within 15 years (higher if MRI lesions present).
TYPES: Retrobulbar (most common — no disc changes initially) vs papillitis (disc swelling visible).
SYMPTOMS: Subacute monocular visual loss (over hours to days, peaks 1-2 weeks). Pain on eye movement (90% — cardinal feature). Color desaturation (red desaturation). Uhthoff phenomenon (visual worsening with heat/exercise). Pulfrich effect (moving pendulum appears to move in arc).
SIGNS: Reduced VA (variable), RAPD (Marcus Gunn pupil), color vision loss disproportionate to VA, central scotoma, disc normal (retrobulbar) or swollen (papillitis).
INVESTIGATIONS: VEP — delayed P100 latency (most sensitive, remains abnormal after recovery). MRI brain/orbits (Gad enhancement of optic nerve, white matter lesions for MS risk stratification). NMO-IgG, MOG-IgG.
TREATMENT: IV methylprednisolone 1g/day for 3 days (speeds recovery, not final outcome). Beta-interferon/glatiramer if high MS risk. Most recover to 6/9 or better within 6 weeks.`
    },
    {
      id: "neuro_002",
      disease: "Papilloedema",
      category: "Neuro-ophthalmology",
      keywords: ["raised intracranial pressure", "disc swelling", "bilateral disc swelling", "headache", "transient visual obscurations", "enlarged blind spot", "IIH", "pulsatile tinnitus", "SVP absent"],
      content: `Papilloedema is optic disc swelling due to raised intracranial pressure (ICP) — bilateral in virtually all cases.
ETIOLOGY: SOL (tumor, abscess), IIH (obese young women), cerebral venous sinus thrombosis, meningitis, hydrocephalus, malignant hypertension.
SYMPTOMS: Headache (worse on waking/coughing/straining), nausea/vomiting. Transient visual obscurations (TVOs — seconds of grey-out, postural). Diplopia (6th nerve palsy — false localizing sign). Pulsatile tinnitus (IIH). Vision initially PRESERVED.
SIGNS (Frisen grading I-V): Disc hyperemia, blurred margins (superior/inferior first). Loss of SVP. Flame hemorrhages at disc. Disc elevation, Paton's lines (peripapillary retinal folds). Cotton wool spots. Enlarged blind spot (earliest visual field change). Peripheral constriction in chronic.
INVESTIGATIONS: URGENT neuroimaging (CT/MRI + venography) BEFORE LP. LP opening pressure (>25 cmH2O diagnostic).
TREATMENT: Treat underlying cause. IIH: weight loss, acetazolamide. Optic nerve sheath fenestration or CSF shunting if vision threatened.`
    },
    {
      id: "neuro_003",
      disease: "Third Nerve (CN III) Palsy",
      category: "Neuro-ophthalmology",
      keywords: ["ptosis", "down and out position", "dilated pupil", "diplopia", "posterior communicating artery aneurysm", "complete ptosis", "mydriasis", "surgical third nerve palsy"],
      content: `Third nerve palsy causes ptosis, ophthalmoplegia, and in surgical lesions, pupil dilation.
ANATOMY: CN III supplies all EOM except LR (VI) and SO (IV). Also levator palpebrae and sphincter pupillae. Pupillomotor fibers on OUTSIDE of nerve (compressed first in surgical lesions).
ETIOLOGY: Surgical (pupil-involving, complete): PCoA aneurysm (EMERGENCY — risk of SAH), uncal herniation. PUPIL DILATED. Medical (pupil-sparing, incomplete): Microvascular ischemia (diabetes, hypertension) — usually painful, pupil spared.
SIGNS: Complete ptosis (levator paralysis), eye in "down and out" (unopposed SO and LR), diplopia, dilated unreactive pupil (surgical), limitation of elevation/depression/adduction.
INVESTIGATIONS: URGENT MRI/MRA if any pupil involvement (aneurysm). Blood glucose, BP for medical.
TREATMENT: Surgical: neurosurgical clipping or endovascular coiling of aneurysm. Medical: observation (recovers 3 months), occlusion for diplopia.`
    },
    {
      id: "neuro_004",
      disease: "Fourth Nerve (CN IV) Palsy — Superior Oblique Palsy",
      category: "Neuro-ophthalmology",
      keywords: ["hypertropia", "vertical diplopia", "head tilt", "torsional diplopia", "reading difficulty", "congenital", "Park three step test", "superior oblique", "Bielschowsky tilt test"],
      content: `CN IV palsy causes superior oblique muscle palsy — the most common cause of acquired vertical diplopia.
ANATOMY: SO depresses, intorts, and abducts the eye. CN IV has the longest intracranial course and crosses — most vulnerable to trauma.
ETIOLOGY: Congenital (most common). Trauma (roof of orbit, closed head injury — bilateral CN IV). Microvascular (diabetes, hypertension). Raised ICP (compresses at tentorial edge). Tumor.
SYMPTOMS: Vertical diplopia (worse in contralateral gaze and ipsilateral head tilt), torsional diplopia ("tilted" image), difficulty reading (inferior gaze affected), characteristic head tilt AWAY from affected side (compensatory).
SIGNS: Hypertropia (affected eye higher), head tilt to opposite shoulder (Parks-Bielschowsky test — 3 step test: which eye is higher → in which gaze is hypertropia worse → head tilt to which side increases it).
INVESTIGATIONS: MRI if acquired (exclude structural cause). Blood glucose, BP.
TREATMENT: Prisms for mild/stable. Surgery (SO strengthening or contralateral IO weakening) for significant/non-resolving deviation.`
    },
    {
      id: "neuro_005",
      disease: "Sixth Nerve (CN VI) Palsy — Lateral Rectus Palsy",
      category: "Neuro-ophthalmology",
      keywords: ["horizontal diplopia", "esotropia", "convergent squint", "inability to abduct", "lateral rectus", "raised ICP false localizing", "Duane syndrome", "Wernicke", "pontine lesion"],
      content: `CN VI palsy causes lateral rectus palsy with inability to abduct the eye, resulting in horizontal diplopia.
ANATOMY: CN VI supplies only lateral rectus. Long intracranial course over petrous temporal bone — vulnerable to raised ICP (false localizing sign).
ETIOLOGY: False localizing sign from raised ICP (most common acquired). Microvascular (diabetes, hypertension). Trauma. Wernicke's encephalopathy (thiamine deficiency). Pontine lesion (glioma, demyelination). Gradenigo syndrome (apical petrositis — CN VI palsy + ipsilateral facial pain + otitis media).
SYMPTOMS: Horizontal diplopia (worse in ipsilateral gaze and distance), esotropia (convergent squint), compensatory face turn toward affected side.
SIGNS: Inability to abduct affected eye, esotropia at distance, diplopia on lateral gaze toward affected side.
INVESTIGATIONS: MRI brain/orbit. BP, glucose. LP if meningism (LP opening pressure for raised ICP).
TREATMENT: Micro-vascular: observation (resolves 3-6 months). Prisms/botulinum toxin injection to medial rectus for temporary relief. Surgery for non-resolving.`
    },
    {
      id: "neuro_006",
      disease: "Horner Syndrome",
      category: "Neuro-ophthalmology",
      keywords: ["miosis", "ptosis", "anhidrosis", "enophthalmos", "anisocoria worse dark", "cocaine test", "apraclonidine", "sympathetic chain", "Pancoast tumor", "carotid dissection"],
      content: `Horner syndrome results from interruption of the oculosympathetic pathway at any level.
ANATOMY: 3-neuron pathway: First order (hypothalamus → ciliospinal centre of Budge, C8-T1). Second order (preganglionic — superior cervical ganglion, travels over lung apex). Third order (postganglionic — along ICA → cavernous sinus → long ciliary nerves).
CLASSIC TRIAD: Miosis (dilator pupillae paralysis — anisocoria worse in dark), ptosis (partial — tarsal muscle/Müller's paralysis, 1-2mm), anhidrosis (ipsilateral facial — only with preganglionic lesions), apparent enophthalmos (narrow palpebral fissure), lower lid elevation (reverse ptosis/upside-down ptosis).
ETIOLOGY: Central (1st order): stroke, MS, syringomyelia. Preganglionic (2nd order): Pancoast tumor (lung apex), cervical rib, thyroid mass, aortic aneurysm. Postganglionic (3rd order): ICA dissection (PAINFUL Horner — emergency), cavernous sinus pathology, cluster headache.
PHARMACOLOGICAL TESTING: Cocaine 4-10% (blocks NA reuptake) — fails to dilate Horner pupil (confirms Horner). Hydroxyamphetamine 1% — dilates 1st/2nd but NOT 3rd order (localizes lesion). Apraclonidine (denervation supersensitivity) — dilates Horner pupil.
INVESTIGATIONS: CXR (Pancoast tumor), MRI brain/neck, carotid Doppler/MRA (dissection), CT chest.`
    },
    {
      id: "neuro_007",
      disease: "Nystagmus",
      category: "Neuro-ophthalmology",
      keywords: ["rhythmic eye oscillations", "involuntary eye movements", "pendular", "jerk nystagmus", "congenital nystagmus", "null point", "head nodding", "gaze-evoked", "downbeat", "upbeat", "vestibular"],
      content: `Nystagmus is involuntary, rhythmic oscillation of the eyes.
CLASSIFICATION:
PENDULAR: Equal velocity in both directions. Usually congenital or associated with poor vision.
JERK: Fast and slow phases. Named by direction of fast phase (e.g., right-beating = fast phase to right).
CONGENITAL MOTOR NYSTAGMUS: Onset <6 months. Horizontal, pendular or jerk. Null point (position of gaze where nystagmus minimized — head turn compensates). Dampened by convergence. Usually no oscillopsia. Associated with albinism, achromatopsia, cone dystrophies, Leber congenital amaurosis.
LATENT/MANIFEST LATENT NYSTAGMUS: Appears/worsens on covering either eye. Associated with strabismus and amblyopia.
ACQUIRED NYSTAGMUS (causes): Downbeat nystagmus — Arnold-Chiari malformation, craniocervical junction pathology. Upbeat — posterior fossa lesions, Wernicke, drug toxicity. Gaze-evoked — CNS depressants, cerebellar disease. Vestibular nystagmus — peripheral (horizontal, fast phase away from lesion, suppressed by fixation) or central.
TREATMENT: Treat underlying cause. Prisms, contact lenses (dampen by convergence). Gabapentin/memantine for acquired. Surgery (Anderson-Kestenbaum) for significant head turn.`
    },
    {
      id: "neuro_008",
      disease: "Internuclear Ophthalmoplegia (INO)",
      category: "Neuro-ophthalmology",
      keywords: ["adduction failure", "abducting nystagmus", "MLF lesion", "multiple sclerosis", "bilateral INO", "wall-eyed bilateral INO", "WEBINO", "dissociated nystagmus"],
      content: `INO results from a lesion of the medial longitudinal fasciculus (MLF), causing impaired adduction ipsilateral to the lesion with dissociated nystagmus of the abducting eye.
ANATOMY: MLF connects CN VI nucleus (contralateral) with CN III nucleus, coordinating horizontal conjugate gaze. Lesion of left MLF → impaired left adduction (with right gaze) + nystagmus in right abducting eye.
ETIOLOGY: Multiple sclerosis (most common cause of bilateral INO in young adults). Brainstem stroke (most common cause in older patients). Wernicke's encephalopathy, tumors, infection.
SIGNS: Failure of adduction of ipsilateral eye on contralateral gaze. Nystagmus of contralateral (abducting) eye. Convergence typically preserved (midbrain pathway intact). Bilateral INO = WEBINO (wall-eyed bilateral INO) in bilateral MLF lesions — bilateral adduction failure with exotropia.
INVESTIGATIONS: MRI brain (diffusion for acute stroke, T2/FLAIR for demyelination — high signal in MLF).
TREATMENT: Treat underlying cause. MS: disease-modifying therapy. Stroke: secondary prevention.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 10: ORBITAL DISEASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "orbit_001",
      disease: "Orbital Cellulitis",
      category: "Orbital Diseases",
      keywords: ["proptosis", "ophthalmoplegia", "periorbital swelling", "fever", "sinusitis", "reduced vision", "RAPD", "chemosis", "post-septal", "Chandler classification"],
      content: `Orbital cellulitis is infection posterior to the orbital septum — a sight and life-threatening emergency.
DIFFERENTIATION from preseptal cellulitis: Orbital cellulitis has proptosis, ophthalmoplegia, pain on eye movement, and possible reduced vision.
ETIOLOGY: Paranasal sinusitis (ethmoid — especially children), Staphylococcus aureus, Streptococcus, anaerobes.
CHANDLER: I (Inflammatory edema) → II (Orbital cellulitis) → III (Subperiosteal abscess) → IV (Orbital abscess) → V (Cavernous sinus thrombosis).
SYMPTOMS: Painful proptosis, ophthalmoplegia and diplopia, fever, malaise, reduced vision (optic nerve compression).
SIGNS: Proptosis (axial), restricted painful eye movements, chemosis, periorbital edema/erythema, RAPD (severe cases).
INVESTIGATIONS: CT orbit + sinuses + contrast (URGENT). FBC, CRP, blood cultures. MRI for intracranial extension.
TREATMENT: URGENT IV antibiotics (co-amoxiclav + metronidazole). ENT + ophthalmology co-management. Surgical drainage of abscess if: no improvement 24-48h, visual compromise, large abscess, cavernous sinus signs.
COMPLICATIONS: Subperiosteal/orbital abscess, cavernous sinus thrombosis, meningitis, cerebral abscess, blindness.`
    },
    {
      id: "orbit_002",
      disease: "Thyroid Eye Disease (Graves Orbitopathy)",
      category: "Orbital Diseases",
      keywords: ["proptosis", "lid retraction", "lid lag", "chemosis", "diplopia", "exposure keratopathy", "inferior rectus", "compressive optic neuropathy", "Graves disease", "NOSPECS", "CAS score"],
      content: `Thyroid eye disease (TED) is autoimmune orbital inflammation associated with Graves hyperthyroidism.
PATHOPHYSIOLOGY: TSH-receptor antibodies → orbital fibroblast activation → GAG deposition → EOM enlargement and orbital fat expansion → proptosis and compressive optic neuropathy.
MOST AFFECTED MUSCLE: Inferior rectus (hypotropia, vertical diplopia), then medial, superior, lateral rectus (IMSLO order).
SYMPTOMS: Gritty/watery eyes, photophobia, periorbital puffiness (worse morning), proptosis, diplopia, visual loss (CON).
SIGNS: Lid retraction (Dalrymple sign), lid lag (von Graefe sign), periorbital edema. Proptosis (Hertel >21mm or asymmetry >2mm). Chemosis and injection over muscle insertions. Exposure keratopathy. Restricted motility. RAPD, color desaturation, VF defect (compressive optic neuropathy — EMERGENCY).
CLASSIFICATION: NOSPECS. Disease activity: CAS (Clinical Activity Score ≥3/7 = active).
TREATMENT: Active: IV methylprednisolone pulses. Orbital radiotherapy. Selenium supplements (mild active). Inactive/stable: Rehabilitative surgery in order — orbital decompression → squint surgery → lid surgery. Teprotumumab (anti-IGF-1R) for moderate-severe active TED.`
    },
    {
      id: "orbit_003",
      disease: "Cavernous Sinus Thrombosis",
      category: "Orbital Diseases",
      keywords: ["bilateral orbital signs", "proptosis bilateral", "ophthalmoplegia", "meningism", "septic", "fever", "CN VI palsy", "cavernous sinus", "thrombosis", "dental/facial infection"],
      content: `Cavernous sinus thrombosis is thrombosis of the cavernous sinus, usually septic, causing life-threatening bilateral orbital signs.
ETIOLOGY: Septic (most common): facial/orbital cellulitis, sinusitis (sphenoidal most dangerous), dental infection, Staphylococcus aureus. Aseptic: hypercoagulable states, OCP, dehydration.
ANATOMY: Cavernous sinuses drain orbital veins. Contains: ICA, CN III, IV, VI, V1, V2, sympathetic fibers.
SYMPTOMS: Rapid onset bilateral proptosis, severe headache, high fever, rigors, meningism.
SIGNS: Bilateral chemosis and periorbital edema (bilateral signs are pathognomonic), proptosis, ophthalmoplegia (CN III, IV, VI — CN VI most commonly first), papilloedema, altered consciousness.
INVESTIGATIONS: URGENT MRI + MRV brain (filling defect in cavernous sinus). CT with contrast. LP (meningitis exclusion). Blood cultures. FBC, CRP.
TREATMENT: URGENT high-dose IV antibiotics (vancomycin + ceftriaxone + metronidazole — cover MRSA). Anticoagulation (controversial but beneficial in septic CST). Treat primary source (sinus surgery, dental extraction). ICU monitoring.
MORTALITY: 20-30% even with treatment. Permanent CN palsies in survivors.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 11: EYELID DISEASES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "lid_001",
      disease: "Chalazion / Meibomian Cyst",
      category: "Eyelid Diseases",
      keywords: ["painless lid lump", "tarsal plate", "chronic granuloma", "lipogranuloma", "meibomian gland", "incision curettage", "rosacea", "sebaceous cell carcinoma"],
      content: `Chalazion is a chronic sterile granulomatous inflammation of the meibomian gland — lipogranuloma due to blocked duct.
ETIOLOGY: Obstruction of meibomian gland duct → retained secretions → inflammatory reaction. Associated with MGD, rosacea, seborrhoeic dermatitis.
SYMPTOMS: Painless (distinguishes from stye/hordeolum) slowly enlarging lid lump over weeks. Large chalazia: blurred vision (astigmatism from corneal pressure) or ptosis.
SIGNS: Firm, non-tender, well-defined nodule within tarsal plate. Eversion shows red/grey area on conjunctival surface. No overlying skin inflammation.
TREATMENT: Conservative: hot compresses + lid massage (may resolve over weeks). Surgical: Incision and curettage (I&C) from conjunctival surface under LA — treatment of choice for persistent. Intralesional triamcinolone injection — alternative (risk of depigmentation in dark skin).
IMPORTANT: Recurrent chalazion in SAME SITE in elderly patient → BIOPSY to exclude sebaceous cell carcinoma.`
    },
    {
      id: "lid_002",
      disease: "Blepharitis",
      category: "Eyelid Diseases",
      keywords: ["lid margin inflammation", "crusting", "flaking", "burning", "dry eye", "Demodex", "staphylococcal", "meibomian gland dysfunction", "collarettes", "lid hygiene"],
      content: `Blepharitis is chronic inflammation of eyelid margins — extremely common and frequently recurrent.
ANTERIOR BLEPHARITIS: Staphylococcal — hard crusts (collarettes) at lash bases, lid ulceration, madarosis (lash loss), poliosis (white lashes), recurrent styes/chalazia. Seborrhoeic — greasy scales, seborrhoeic dermatitis. Demodex — cylindrical dandruff at lash base (Demodex folliculorum mites).
POSTERIOR BLEPHARITIS (MGD): Plugged meibomian orifices, thickened/turbid secretions, frothy tear film, telangiectasia, dry eye.
SYMPTOMS: Burning, itching, foreign body sensation, morning crusting, photophobia, recurrent red eyes.
SIGNS: Lid margin erythema, crusting, telangiectasia, MGD, reduced TBUT, secondary conjunctivitis, inferior punctate keratitis.
TREATMENT: CHRONIC — long-term management. Lid hygiene: warm compresses + lid massage + lid scrubs (cornerstone). Lubricants. Topical antibiotics (chloramphenicol, azithromycin). Oral doxycycline 100mg OD for 3-6 months (MGD/rosacea-associated). Demodex: tea tree oil, ivermectin.`
    },
    {
      id: "lid_003",
      disease: "Entropion and Ectropion",
      category: "Eyelid Diseases",
      keywords: ["inturned eyelid", "outturned eyelid", "trichiasis", "corneal trauma", "involutional", "cicatricial", "epiphora", "exposure keratopathy"],
      content: `Entropion is inturning and ectropion is outturning of the eyelid margin.
ENTROPION — TYPES: Involutional (senile — most common, lower lid): horizontal lid laxity, overriding preseptal orbicularis → inturned lid → trichiasis (lashes touch cornea) → epithelial erosions, ulceration, scarring. Cicatricial: conjunctival scarring (trachoma, Stevens-Johnson, chemical burns) → inturned lid. Acute spastic: orbicularis spasm (post-surgery, inflammation). Congenital.
ENTROPION TREATMENT: Temporary: everting sutures (Quickert sutures), tape. Definitive: Wies procedure (transverse lid split + rotating sutures) for involutional. Scleral grafts for cicatricial.
ECTROPION — TYPES: Involutional (most common, lower lid): horizontal lid laxity, gravity → outturned lid → epiphora, exposure keratopathy. Cicatricial: skin scarring (burns, surgery, skin cancer). Paralytic: CN VII palsy. Mechanical: heavy lesion pulling lid down.
ECTROPION TREATMENT: Lubricants, tape as temporizing measures. Surgical correction: horizontal lid shortening (lateral tarsal strip procedure) for involutional. Skin grafting for cicatricial.`
    },
    {
      id: "lid_004",
      disease: "Ptosis",
      category: "Eyelid Diseases",
      keywords: ["drooping eyelid", "levator function", "MRD", "congenital ptosis", "Horner syndrome", "CN III palsy", "aponeurotic", "myogenic", "amblyopia risk", "Fasanella-Servat"],
      content: `Ptosis is drooping of the upper eyelid to an abnormal level.
CLASSIFICATION AND ETIOLOGY:
NEUROGENIC: CN III palsy (complete ptosis, dilated pupil, down-out), Horner syndrome (partial ptosis 1-2mm, miosis, anhidrosis), Marcus Gunn jaw-winking (synkinesis with pterygoid).
APONEUROTIC (most common adult ptosis): Levator aponeurosis dehiscence/disinsertion. Aging, post-surgery, contact lens wear, pregnancy. High skin crease. Good levator function (LF ≥10mm). Thinned upper lid.
MYOGENIC: Congenital (maldevelopment of levator muscle — poor LF, lid lag on downgaze). Myasthenia gravis (variable/fatigable ptosis — Cogan's lid twitch, ice pack test positive). Myotonic dystrophy, CPEO.
MECHANICAL: Heavy lesion on lid, scarring.
ASSESSMENT: MRD1 (margin-reflex distance), LF (levator function), skin crease height, jaw-winking, associated ocular signs.
TREATMENT: Congenital: early surgery to prevent amblyopia. Adults: ptosis repair (Fasanella-Servat for small amounts + good LF), levator resection (moderate-severe), Müller's muscle resection (Fasanella-Servat variant). Frontalis sling (poor LF). MG: pyridostigmine, immunosuppression.`
    },
    {
      id: "lid_005",
      disease: "Eyelid Tumors",
      category: "Eyelid Diseases",
      keywords: ["basal cell carcinoma", "rodent ulcer", "squamous cell carcinoma", "sebaceous cell carcinoma", "masquerade syndrome", "Meibomian carcinoma", "lower lid", "Mohs surgery"],
      content: `Eyelid tumors range from benign to highly malignant lesions.
BASAL CELL CARCINOMA (BCC) — most common malignant eyelid tumor (90%): Lower lid medial canthus most common site. Pearly, nodular, translucent with rolled edges and central ulceration ("rodent ulcer"). Telangiectasia visible. Does NOT metastasize (but locally invasive). Treatment: surgical excision with clear margins (Mohs surgery gold standard), radiotherapy.
SQUAMOUS CELL CARCINOMA (SCC): Less common, more aggressive. Raised, irregular, keratinizing, ulcerating lesion. Risk factors: UV, immunosuppression, HPV, xeroderma pigmentosum. Lymph node metastasis possible. Treatment: wide local excision, sentinel node biopsy, radiotherapy.
SEBACEOUS CELL CARCINOMA: Rare but highly malignant. Arises from meibomian glands or glands of Zeis. MASQUERADE SYNDROME — mimics recurrent chalazion, chronic blepharitis, unilateral conjunctivitis. Upper lid > lower lid (opposite to BCC). Pagetoid spread. High mortality. Treatment: wide excision with map biopsies, sentinel node biopsy, consideration of orbital exenteration if extensive.
BENIGN: Papilloma (HPV-associated), seborrhoeic keratosis (stuck-on appearance), keratoacanthoma, xanthelasma, dermoid cyst (lateral upper lid), capillary hemangioma (infancy — strawberry nevus, treat if amblyopia risk).`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 12: STRABISMUS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "squint_001",
      disease: "Esotropia (Convergent Squint)",
      category: "Strabismus",
      keywords: ["convergent squint", "esotropia", "crossed eyes", "accommodative esotropia", "hypermetropia", "AC/A ratio", "congenital esotropia", "amblyopia risk", "diplopia"],
      content: `Esotropia is inward deviation (convergence) of one or both eyes.
TYPES:
CONGENITAL/INFANTILE: Present before 6 months, large angle, cross-fixation, latent nystagmus, DVD (dissociated vertical deviation). Treatment: surgery (early alignment).
ACCOMMODATIVE ESOTROPIA: Most common acquired esotropia. Onset 2-3 years. Hypermetropia → excess accommodation → excess convergence → esotropia. High AC/A ratio type (small refractive error, large deviation for near). Treatment: spectacles (full cycloplegic refraction) ± bifocals. Surgery for residual deviation.
SENSORY ESOTROPIA: Caused by poor vision in one eye (cataract, optic atrophy). Treatment: treat underlying cause + surgery.
ACUTE ACQUIRED COMITANT ESOTROPIA (AACE): Sudden onset diplopia, normal CN VI, neuroimaging required (posterior fossa lesion, hydrocephalus).
ASSESSMENT: Cover test, prism cover test (measure angle), Krimsky test, 4-dioptre prism test (bifoveal fixation), stereoacuity, colour vision, cycloplegic refraction.`
    },
    {
      id: "squint_002",
      disease: "Exotropia (Divergent Squint)",
      category: "Strabismus",
      keywords: ["divergent squint", "exotropia", "outward deviation", "intermittent exotropia", "convergence insufficiency", "distance exotropia", "Simonsz", "sunshine sign", "closing one eye"],
      content: `Exotropia is outward deviation (divergence) of one or both eyes.
TYPES:
INTERMITTENT EXOTROPIA (most common): Outward deviation at distance, controlled at near. Eye closes in bright sunlight (photophobia — closing one eye to avoid diplopia). Distance exotropia > near exotropia (basic type if equal). Treatment: observation if controlled, orthoptic exercises, spectacles (if myopic), surgery when deviation >50% of waking hours or fusion deteriorating.
CONSTANT EXOTROPIA: Sensory (poor vision in deviating eye), secondary to failed esotropia surgery, or decompensated intermittent.
CONVERGENCE INSUFFICIENCY: Common cause of near-vision symptoms in young adults. Exophoria/exotropia for near, normal for distance. Symptoms: eye strain, headaches, blur when reading, diplopia near. High near point of convergence (>10cm). Treatment: orthoptic convergence exercises, base-in prisms, surgery if exercises fail.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 13: DRY EYE AND TEAR DISORDERS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "dry_001",
      disease: "Dry Eye Disease (DED)",
      category: "Tear Disorders",
      keywords: ["burning", "stinging", "foreign body sensation", "tear film instability", "Schirmer test", "TBUT", "punctate epithelial erosions", "filamentary keratitis", "aqueous deficient", "evaporative"],
      content: `Dry eye disease is a multifactorial disease of the ocular surface causing discomfort, visual disturbance, and tear film instability.
DEFINITION (DEWS II): Chronic ocular surface disease due to tear film dysfunction with loss of homeostasis + neurosensory abnormalities.
TYPES: Aqueous deficient (ADDE): Sjögren (primary/secondary — most common cause of severe dry eye), non-Sjögren (lacrimal gland disease, CN VII palsy, medications). Evaporative (EDE): Meibomian gland dysfunction (most common overall), blepharitis, lid abnormalities, low blink rate.
SYMPTOMS: Burning, stinging, foreign body sensation, itching, photophobia, fluctuating vision (worse later in day, in AC, reading), paradoxical tearing (reflex hypersecretion).
SIGNS: Reduced TBUT (<10 seconds), punctate epithelial erosions (inferior zone), reduced Schirmer test (<5mm/5min — significant), reduced/absent inferior tear meniscus, MGD, filamentary keratitis, rose bengal/lissamine green staining, mucus threads.
INVESTIGATIONS: TBUT, Schirmer I and II, vital dye staining (rose bengal, lissamine green — stains devitalized cells). Meibography. Anti-Ro/La antibodies (Sjögren's).
TREATMENT: STEPWISE: Step 1 — Education, environment modification, lubricants (preservative-free drops/gels/ointments), lid hygiene. Step 2 — Topical ciclosporin A (Restasis/Ikervis) — anti-inflammatory. Topical lifitegrast. Oral doxycycline (MGD). Punctal occlusion. Step 3 — Autologous serum drops, scleral lenses. Step 4 — Permanent punctal occlusion, amniotic membrane, tarsorrhaphy.`
    },
    {
      id: "dry_002",
      disease: "Sjögren Syndrome — Ocular",
      category: "Tear Disorders",
      keywords: ["keratoconjunctivitis sicca", "xerostomia", "dry eyes dry mouth", "anti-Ro SSA", "anti-La SSB", "ANA", "filamentary keratitis", "bilateral", "lymphocytic infiltration"],
      content: `Sjögren syndrome is a systemic autoimmune exocrinopathy causing severe dry eye (keratoconjunctivitis sicca — KCS) and dry mouth (xerostomia).
TYPES: Primary (PSS — isolated). Secondary (associated with RA, SLE, systemic sclerosis).
PATHOLOGY: Lymphocytic infiltration and destruction of lacrimal and salivary glands → aqueous deficient dry eye.
OCULAR SYMPTOMS: Severe bilateral dry eyes, burning, foreign body sensation, photophobia, paradoxical tearing, severe filamentary keratitis in advanced cases.
SIGNS: Severely reduced Schirmer test (often <5mm), very short TBUT, extensive punctate epithelial erosions, filamentary keratitis (mucous strands attached to cornea — very painful), rose bengal staining, reduced/absent tear meniscus, posterior blepharitis (MGD often co-existing).
DIAGNOSIS: European criteria — anti-Ro/SSA and/or anti-La/SSB antibodies (highly specific), minor salivary gland biopsy (focal lymphocytic sialadenitis — gold standard histological), Schirmer/Rose bengal scores, symptoms of xerostomia.
OCULAR TREATMENT: Intensive preservative-free lubricants. Topical ciclosporin. Punctal occlusion (very helpful). Moisture chamber glasses. Autologous serum drops. Systemic: hydroxychloroquine for glandular inflammation.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 14: OCULAR INFECTIONS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "infect_001",
      disease: "Ocular Toxoplasmosis",
      category: "Ocular Infections",
      keywords: ["headlight in fog", "focal retinochoroiditis", "pigmented scar", "vitritis", "Toxoplasma gondii", "congenital", "acquired", "immunocompromised", "pyrimethamine"],
      content: `Ocular toxoplasmosis is caused by Toxoplasma gondii — commonest cause of posterior uveitis worldwide.
TRANSMISSION: Congenital (transplacental — bilateral severe disease, macula involved) or acquired (oocysts from cat feces/undercooked meat).
PATHOLOGY: Intracellular parasite forms bradyzoite cysts in retinal cells → recurrent acute episodes of necrotizing retinitis.
SYMPTOMS: Floaters, visual loss (may be sudden if lesion is at macula), photophobia, mild anterior chamber reaction.
SIGNS: Active: white/cream focal necrotizing retinitis lesion with overlying vitritis (headlight in fog appearance). Adjacent old pigmented chorioretinal scar (pathognomonic — "satellite lesion"). Anterior chamber cells and flare (spillover).
DIAGNOSIS: Clinical (characteristic appearance). Serology (toxoplasma IgG — positive in most adults; IgM for acute infection). PCR of aqueous.
TREATMENT: Indications: lesion threatening macula or optic disc, severe vitritis, immunocompromised. Pyrimethamine + sulfadiazine + folinic acid + systemic prednisolone (classic triple therapy). Alternatives: clindamycin + systemic steroids; azithromycin. Co-trimoxazole prophylaxis for immunocompromised.`
    },
    {
      id: "infect_002",
      disease: "Ocular Toxocariasis",
      category: "Ocular Infections",
      keywords: ["Toxocara canis", "peripheral granuloma", "posterior pole granuloma", "endophthalmitis", "child", "white pupil", "dog contact", "larva migrans", "tractional bands"],
      content: `Ocular toxocariasis is caused by Toxocara canis (dog roundworm) larval migration in the eye.
EPIDEMIOLOGY: Children (5-10 years), dog exposure (geophagia — eating soil contaminated with dog feces), usually unilateral.
PRESENTATION — THREE FORMS:
1. Peripheral granuloma (most common): White elevated granuloma at equator or periphery. Fibrous tractional bands to disc/macula. Heterochromia (longstanding). Strabismus.
2. Posterior pole granuloma: Dense white lesion near disc or macula. Dragged disc. Significant visual loss.
3. Diffuse endophthalmitis: Severe vitreous inflammation, hypopyon, leukocoria (white pupil). Can be mistaken for retinoblastoma — important to differentiate (Toxocara: older age, no calcification on B-scan, positive serology).
DIAGNOSIS: ELISA for Toxocara antibodies (serology). B-scan (granuloma, no calcification). Aqueous/vitreous ELISA. FBC (eosinophilia often absent in ocular form).
TREATMENT: Systemic anthelmintics (albendazole/thiabendazole) ± systemic steroids for active inflammation. Periocular steroids. Laser for peripheral granuloma. Vitrectomy for severe traction/vitreous opacification.`
    },
    {
      id: "infect_003",
      disease: "Ocular Onchocerciasis (River Blindness)",
      category: "Ocular Infections",
      keywords: ["Onchocerca volvulus", "microfilariae", "sclerosing keratitis", "punctate keratitis", "Simulium fly", "sub-Saharan Africa", "snowflake opacities", "optic atrophy", "river blindness"],
      content: `Ocular onchocerciasis (river blindness) is caused by Onchocerca volvulus (filarial nematode), transmitted by Simulium blackfly near fast-flowing rivers.
EPIDEMIOLOGY: Sub-Saharan Africa, Yemen, Central/South America. Leading infectious cause of blindness worldwide (after trachoma).
PATHOLOGY: Adult worms in subcutaneous nodules (onchocercomas) → release microfilariae → migrate to skin, eyes → inflammatory reaction → tissue damage.
OCULAR MANIFESTATIONS: Anterior: microfilariae visible in AC (slit lamp — motile), punctate keratitis (Snowflake opacities — fluffy white cellular infiltrates), sclerosing keratitis (advancing opacity from limbus), iridocyclitis, glaucoma. Posterior: chorioretinitis, optic atrophy, sclerosed choriocapillaris ("Hissette-Ridley fundus"), disc pallor.
DIAGNOSIS: Skin snip (microfilariae identification), slit lamp (microfilariae in AC), Mazzotti test (DEC provocation — not recommended), PCR.
TREATMENT: Ivermectin (Mectizan) — drug of choice. Single dose 150 μg/kg kills microfilariae (not adult worms). Annual or semi-annual treatment programs (WHO). Doxycycline for Wolbachia (endosymbiont essential for filarial reproduction). Community-directed treatment programs.`
    },
    {
      id: "infect_004",
      disease: "Ocular Tuberculosis",
      category: "Ocular Infections",
      keywords: ["granulomatous uveitis", "mutton fat KPs", "choroidal tubercle", "subretinal abscess", "optic neuritis", "TB", "scrofulous keratitis", "phlyctenular conjunctivitis", "hypersensitivity"],
      content: `Ocular tuberculosis (TB) can present as direct infection or hypersensitivity response to M. tuberculosis.
PREVALENCE: Particularly important in high-burden TB countries (India, Sub-Saharan Africa, Southeast Asia).
MANIFESTATIONS:
ANTERIOR: Granulomatous iritis (mutton fat KPs, iris nodules, posterior synechiae). Phlyctenular keratoconjunctivitis (hypersensitivity — nodule at limbus with leash of vessels — common in children in developing countries). Interstitial keratitis (corneal stromal vascularization).
POSTERIOR: Choroidal tubercle (creamy-yellow lesion, single or multiple — hallmark of miliary TB). Subretinal abscess. Tuberculoma. Retinal vasculitis. Serpiginous-like choroiditis. Eales' disease (idiopathic retinal vasculitis — predominantly TB-associated in Asia).
OPTIC NERVE: Optic neuritis, papilloedema (TB meningitis).
DIAGNOSIS: Mantoux/tuberculin skin test, IGRA (QuantiFERON Gold — more specific), CXR, high-resolution CT chest, sputum/BAL AFB smear/culture, PCR, aqueous or vitreous PCR.
TREATMENT: Standard anti-TB therapy (2HRZE/4HR) for minimum 9-12 months for ocular TB. Topical/systemic steroids for hypersensitivity reactions. Co-management with respiratory/infectious disease physician.`
    },
    {
      id: "infect_005",
      disease: "Ocular Syphilis",
      category: "Ocular Infections",
      keywords: ["syphilis", "panuveitis", "interstitial keratitis", "ghost vessels", "Argyll Robertson pupil", "optic neuritis", "HIV co-infection", "VDRL", "TPHA", "Treponema pallidum"],
      content: `Ocular syphilis is caused by Treponema pallidum and can affect virtually any ocular structure — the great mimicker.
STAGES:
PRIMARY: Chancre of eyelid (rare), regional lymphadenopathy.
SECONDARY: Anterior uveitis, episcleritis, scleritis, interstitial keratitis, vitritis, chorioretinitis, optic neuritis.
CONGENITAL: Interstitial keratitis (most common — bilateral, occurs 6-30 years after birth), Hutchinson's triad (interstitial keratitis + notched incisors + sensorineural deafness), salt-and-pepper fundus, ghost vessels in cornea (empty vessels from resolved interstitial keratitis).
TERTIARY/NEUROSYPHILIS: Argyll Robertson pupil (accommodates but does not react to light — loss of light reflex with preserved near reflex — bilateral, irregular, small pupils), optic atrophy, ptosis, CN palsies.
IMPORTANT: Increasing incidence, especially in HIV-positive patients. HIV co-infection can accelerate ocular syphilis progression.
DIAGNOSIS: VDRL/RPR (non-treponemal — screening, titres correlate with activity). TPHA/FTA-ABS (treponemal — confirmatory, remain positive after treatment). HIV test in all cases.
TREATMENT: IV benzylpenicillin 18-24 million units/day for 10-14 days (neurosyphilis protocol even for isolated ocular syphilis). Steroids for interstitial keratitis.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 15: PAEDIATRIC OPHTHALMOLOGY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "paed_001",
      disease: "Amblyopia (Lazy Eye)",
      category: "Paediatric Ophthalmology",
      keywords: ["reduced vision one eye", "childhood", "no structural cause", "strabismic", "anisometropic", "deprivation", "critical period", "occlusion therapy", "crowding phenomenon"],
      content: `Amblyopia is unilateral (rarely bilateral) reduction in BCVA without detectable structural anomaly, caused by abnormal visual experience during the critical period (birth to ~8 years).
TYPES: Strabismic (constant unilateral squint → suppression). Anisometropic (unequal refractive errors → chronic defocus). Deprivation (most severe — dense cataract, ptosis, corneal opacity).
CRITICAL PERIOD: Birth to 7-8 years. Treatment most effective in early years.
DIAGNOSIS: Reduced BCVA not explained by structural pathology. Crowding phenomenon (reads single optotypes better than lines — characteristic). Fixation behavior in preverbal children (cover test response).
TREATMENT: (1) Correct underlying cause (spectacles, cataract surgery). (2) Refractive correction first (may improve VA without patching). (3) Penalisation of fellow eye: patching (2-6 hours/day — gold standard) or atropine penalisation (1% drops in better eye). Part-time patching as effective as full-time with fewer psychosocial effects.
PROGNOSIS: Excellent if treated within critical period. Poor if treatment delayed beyond 7-8 years.`
    },
    {
      id: "paed_002",
      disease: "Retinoblastoma",
      category: "Paediatric Ophthalmology",
      keywords: ["leukocoria", "white pupil", "strabismus", "child", "RB1 gene", "calcification", "cat eye reflex", "bilateral", "hereditary", "two hit hypothesis"],
      content: `Retinoblastoma is the most common primary intraocular malignancy of childhood.
GENETICS: RB1 tumour suppressor gene (13q14). Two-hit hypothesis (Knudson). Hereditary (40%) — bilateral, multifocal, AD, germline mutation, risk of secondary tumors (osteosarcoma). Sporadic (60%) — unilateral, unifocal, somatic mutation.
AGE: 90% before 5 years. Average: 18 months (bilateral), 24 months (unilateral).
PRESENTATION: Leukocoria (white pupil/cat's eye reflex) — 60%. Strabismus — second. Rubeosis iridis. Inflammatory signs. Proptosis (advanced).
DIAGNOSIS: EUA — ophthalmoscopy (white/cream mass ± calcification — pathognomonic). B-scan (calcification). MRI (NOT CT — avoid radiation). AVOID biopsy (seeding risk).
STAGING: International Classification A-E (size, location, vitreous seeding).
TREATMENT: Save life → eye → vision. Chemotherapy (carboplatin/vincristine/etoposide). Focal therapy: laser/cryo/thermotherapy. Intra-arterial chemotherapy. Intravitreal chemotherapy. Enucleation for advanced unilateral. Radiation only if all else fails.
PROGNOSIS: Survival >95% in developed countries.`
    },
    {
      id: "paed_003",
      disease: "Leukocoria — Differential Diagnosis",
      category: "Paediatric Ophthalmology",
      keywords: ["white pupil", "absent red reflex", "leukocoria", "retinoblastoma", "cataract", "ROP", "PHPV", "toxocara", "Coats disease", "differential"],
      content: `Leukocoria (white pupil, absent red reflex) in a child requires urgent investigation to exclude retinoblastoma.
DIFFERENTIAL DIAGNOSIS OF LEUKOCORIA:
RETINOBLASTOMA: Most important to exclude. Calcification on B-scan (pathognomonic). MRI preferred.
CONGENITAL CATARACT: Opacity of lens. No fundal mass. B-scan normal retina.
PERSISTENT HYPERPLASTIC PRIMARY VITREOUS (PHPV/PFVH): Unilateral, microphthalmos, fibrovascular stalk in vitreous on B-scan and CT (no calcification distinguishes from retinoblastoma), often associated with cataract.
RETINOPATHY OF PREMATURITY (Stage 4/5): History of prematurity, bilateral in most severe cases, tractional/total retinal detachment.
COATS DISEASE: Exudative retinal detachment from retinal telangiectasia. Males > females (3:1). Unilateral. Subretinal yellow exudate (cholesterol). No calcification. Older presentation (5-10 years). Treatment: laser/cryotherapy to telangiectasia.
TOXOCARIASIS: Granuloma, older child, history of dog contact, positive serology.
INVESTIGATION OF LEUKOCORIA: B-scan (calcification?), MRI brain/orbits, orbital CT (if calcification needed — although MRI preferred for retinoblastoma). EUA.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 16: OCULAR TRAUMA
    // ═══════════════════════════════════════════════════════════════
    {
      id: "trauma_001",
      disease: "Hyphema",
      category: "Ocular Trauma",
      keywords: ["blood anterior chamber", "blunt trauma", "layered blood", "rebleed", "sickle cell", "IOP elevation", "corneal bloodstaining", "grading", "tranexamic acid"],
      content: `Hyphema is accumulation of blood in the anterior chamber, most commonly following blunt trauma.
ETIOLOGY: Blunt trauma (commonest), spontaneous (rubeosis, blood dyscrasias, anticoagulants), post-operative.
GRADING: Grade I (<1/3 AC height). Grade II (1/3-1/2). Grade III (>1/2). Grade IV (total — 8-ball/black hyphema).
SYMPTOMS: Pain, photophobia, blurred vision, redness.
SIGNS: Visible blood level in AC (layered inferiorly), raised IOP (blood blocking TM), corneal bloodstaining in severe/prolonged.
COMPLICATIONS: Rebleed (days 2-5 — more serious), elevated IOP → optic neuropathy, corneal bloodstaining, peripheral anterior synechiae, amblyopia in children.
TREATMENT: Bed rest with head elevation (30°). Cycloplegic drops. Topical steroids. Topical tranexamic acid (prevent rebleed). Avoid aspirin/NSAIDs. Monitor IOP. Surgical washout if: uncontrolled IOP, corneal bloodstaining risk, non-resolving total hyphema. Special caution in sickle cell disease (lower IOP threshold for intervention).`
    },
    {
      id: "trauma_002",
      disease: "Chemical Eye Injury",
      category: "Ocular Trauma",
      keywords: ["alkali burn", "acid burn", "limbal ischemia", "immediate irrigation", "chemosis", "corneal opacification", "symblepharon", "Roper-Hall", "pH neutralization", "limbal stem cell"],
      content: `Chemical eye injuries are true ophthalmic emergencies — outcome depends entirely on immediate first aid.
ALKALI (more dangerous): Lime, NaOH, ammonia, cement. Saponification → liquefactive necrosis → deep penetration → iris/lens/CB damage. Continues until neutralized.
ACID: Sulphuric acid, HCl. Protein coagulation → barrier to further penetration (self-limiting except HF acid).
ROPER-HALL GRADING: Grade I (epithelial damage, no limbal ischemia — good prognosis). Grade II (hazy cornea, iris visible, <1/3 limbal ischemia). Grade III (total epithelial loss, 1/3-1/2 ischemia). Grade IV (opaque cornea, iris invisible, >1/2 ischemia — poor prognosis).
TREATMENT: IMMEDIATE COPIOUS IRRIGATION — single most critical intervention. Irrigate minimum 30 minutes, check and recheck pH (aim 7.0-7.4). Remove particulate matter. Then: topical steroids, antibiotics, cycloplegics, ascorbic acid drops, oral doxycycline (MMP inhibitor), lubricants. Surgery: amniotic membrane transplant, limbal stem cell transplant, keratoplasty for severe cases.`
    },
    {
      id: "trauma_003",
      disease: "Penetrating/Perforating Ocular Injury",
      category: "Ocular Trauma",
      keywords: ["open globe", "laceration", "intraocular foreign body", "IOFB", "seidel test", "uveal prolapse", "endophthalmitis risk", "CT orbit", "vitreoretinal surgery"],
      content: `Open globe injuries (penetrating — single entry wound; perforating — entry + exit wounds) are sight-threatening surgical emergencies.
ETIOLOGY: Sharp objects (knives, glass, metallic fragments), hammering metal on metal (IOFB risk), high-velocity projectiles.
SYMPTOMS: History of injury, pain, photophobia, reduced vision.
SIGNS: Full-thickness laceration (corneal/scleral), iris/uveal prolapse, peaked/teardrop pupil (pointing to perforation site), shallow/flat AC, low IOP, positive Seidel test (fluorescein streaming in aqueous flow). IOFB may be present.
INVESTIGATIONS: CT orbit (URGENT — NOT MRI if metallic IOFB risk — will dislodge ferromagnetic objects). X-ray orbit. B-scan (after CT, if media opaque — gentle technique near perforation).
TREATMENT: NBM immediately. IV antibiotics (intravitreal prophylaxis at surgery). Eye shield (NOT pressure patch). Tetanus prophylaxis. Urgent vitreoretinal surgery: primary repair (corneal/scleral laceration closure, uveal repositioning/excision). Removal of IOFB (within 24h — endophthalmitis risk from organic IOFBs). Watch for sympathetic ophthalmia.
COMPLICATIONS: Endophthalmitis (most devastating acute — Bacillus cereus most aggressive IOFB infection), traumatic cataract, retinal detachment, sympathetic ophthalmia, siderosis (iron IOFB), chalcosis (copper IOFB).`
    },
    {
      id: "trauma_004",
      disease: "Blow-out Fracture of the Orbit",
      category: "Ocular Trauma",
      keywords: ["orbital floor fracture", "enophthalmos", "vertical diplopia", "infraorbital nerve", "inferior rectus entrapment", "cheek numbness", "trapdoor fracture", "CT orbit", "nausea vomiting"],
      content: `Orbital blow-out fracture is fracture of the orbital floor (and/or medial wall) with herniation of orbital contents into the maxillary (or ethmoid) sinus.
MECHANISM: Blunt trauma to orbit (fist, ball) → sudden increase in orbital pressure → fracture at weakest point (thin orbital floor — "blow-out").
SYMPTOMS: Diplopia (vertical — inferior rectus/inferior oblique entrapment), periorbital pain and swelling, cheek/upper lip numbness (infraorbital nerve injury — V2), nausea/vomiting (vagal response from muscle entrapment — especially children — "trapdoor" fracture).
SIGNS: Periorbital ecchymosis and edema, subcutaneous emphysema (air from sinus), enophthalmos (sunken eye — delayed sign after swelling resolves), restriction of upgaze (inferior rectus entrapment — positive forced duction test), hypoesthesia in V2 distribution.
INVESTIGATIONS: CT orbit (thin slices — shows fracture, herniation, entrapment). Plain X-ray: teardrop sign (herniated fat/muscle into maxillary sinus).
TREATMENT: Conservative: ice, antibiotics (prevent sinusitis), decongestants, avoid nose-blowing. Surgery (within 2 weeks): orbital floor repair with titanium mesh/implant. URGENT surgery (within 24-48h) for: trapdoor fracture in children (rectus entrapment with oculocardiac reflex — nausea/bradycardia), white-eyed blow-out (no external signs but significant entrapment).`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 17: REFRACTIVE ERRORS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "refr_001",
      disease: "Myopia (Short-sightedness)",
      category: "Refractive Errors",
      keywords: ["blurred distance vision", "clear near vision", "axial myopia", "progressive", "myopic degeneration", "lattice degeneration", "posterior staphyloma", "concave lens", "minus lens", "LASIK"],
      content: `Myopia is a refractive error where parallel light rays focus anterior to the retina due to excessive axial length or corneal power.
CLASSIFICATION: Simple/school (up to -6.00D), high myopia (>-6.00D), pathological/degenerative myopia (associated with fundus changes).
PATHOLOGICAL MYOPIA: Axial length >26mm. Posterior staphyloma (outpouching of posterior pole — pathognomonic of pathological myopia), Fuchs spot (RPE hyperplasia after subretinal hemorrhage at macula), lacquer cracks (breaks in Bruch's membrane), retinal thinning/degeneration, lattice degeneration (leading risk factor for RRD).
COMPLICATIONS: Retinal detachment (6x increased risk vs emmetropes), glaucoma (3x), cataract, CNV (myopic CNV — managed with anti-VEGF), open angle glaucoma.
CORRECTION: Spectacles (concave/minus lenses). Contact lenses. Refractive surgery: LASIK (laser-assisted in situ keratomileusis — reshapes corneal stroma under flap), PRK (photorefractive keratectomy — surface ablation), SMILE (lenticular extraction), phakic IOL (for high myopia), clear lens extraction + IOL.
MYOPIA CONTROL (children): Atropine 0.01% drops (most evidence), orthokeratology (overnight contact lenses), multifocal CL, outdoor time (2 hours/day protective).`
    },
    {
      id: "refr_002",
      disease: "Hypermetropia and Astigmatism",
      category: "Refractive Errors",
      keywords: ["blurred near vision", "accommodative effort", "convergent squint risk", "convex lens", "plus lens", "headaches", "astigmatism", "irregular corneal curvature", "cylindrical lens"],
      content: `Hypermetropia (hyperopia) is a refractive error where parallel light rays focus posterior to the retina.
HYPERMETROPIA: Low (<+2.00D) — often fully corrected by accommodation. Moderate (+2.00 to +5.00D) — strain and near blur. High (>+5.00D) — blurred distance and near. Risk of accommodative esotropia (hypermetropia → accommodation → convergence → squint). Risk of angle-closure glaucoma (small eye, shallow AC).
SYMPTOMS: Asthenopia (eye strain, headaches, especially after reading), blurred near vision, difficulty concentrating, accommodative esotropia in children.
CORRECTION: Convex/plus lenses. Refractive surgery (LASIK for low-moderate hypermetropia).
ASTIGMATISM: Unequal corneal curvature in different meridians → multiple focal points → distorted/blurred vision. Regular astigmatism (corneal surface bowl-shaped — correctable with cylindrical lenses). Irregular astigmatism (keratoconus, scarring — requires RGP contact lenses or surgery).
SYMPTOMS: Blurred vision at all distances, asthenopia, head tilt/turn, distortion.
CORRECTION: Cylindrical/toric lenses (spectacles or contact lenses). Toric IOL for surgical correction.`
    },
    {
      id: "refr_003",
      disease: "Presbyopia",
      category: "Refractive Errors",
      keywords: ["reading difficulty", "arm's length", "near vision loss", "age 40 plus", "reduced accommodation", "lens hardening", "reading glasses", "bifocals", "monovision"],
      content: `Presbyopia is the age-related loss of accommodative ability causing difficulty with near vision, affecting all individuals from approximately 40-45 years of age.
PATHOPHYSIOLOGY: Progressive hardening (sclerosis) of the crystalline lens nucleus → reduced elasticity → inability to increase curvature for near focus → reduced accommodation amplitude.
SYMPTOMS: Difficulty reading small print, need to hold reading material at arm's length (increasing working distance), blurred near vision, eye strain, headaches after near work. Symptoms worse in dim illumination. Presbyopia "unmasks" underlying hypermetropia.
NEAR ADDITION: Determined by working distance and residual accommodation. Typically +1.00D at age 45, +2.00D at 50, +2.50D at 55, +3.00D at 60+ years.
CORRECTION: Reading glasses (single vision adds). Bifocals (distance on top, near on bottom — with visible line). Progressive addition lenses (PALs/varifocals — no dividing line, intermediate zone). Multifocal contact lenses. Monovision (one eye for distance, one for near — contact lens or refractive surgery). Refractive lens exchange with multifocal/extended depth of focus IOL. Corneal inlays.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 18: SYSTEMIC DISEASE OCULAR MANIFESTATIONS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "sys_001",
      disease: "Hypertensive Retinopathy",
      category: "Systemic Ocular Diseases",
      keywords: ["arteriovenous nipping", "flame hemorrhages", "cotton wool spots", "papilloedema", "silver wiring", "copper wiring", "Keith-Wagener", "malignant hypertension", "AV crossing"],
      content: `Hypertensive retinopathy represents retinal changes from systemic arterial hypertension.
KEITH-WAGENER-BARKER: Grade I — generalized arteriolar narrowing, copper wiring (increased light reflex). Grade II — AV nipping/nicking (Salus sign — venule deviation; Bonnet sign — venule banking; Gunn sign — venule tapering), silver wiring (opaque vessel wall). Grade III — flame hemorrhages, cotton wool spots (NFL infarcts), hard exudates (macular star). Grade IV — Grade III + papilloedema (malignant hypertension — EMERGENCY).
AV CROSSING CHANGES: Arteriosclerosis → thickened arteriolar wall compresses venule at crossing → BRVO risk.
MALIGNANT HYPERTENSION: Disc edema, exudative retinal detachment, rapid visual loss, associated renal failure. Requires controlled BP reduction (IV labetalol/sodium nitroprusside). Avoid precipitous BP drop (watershed infarction risk).
CLINICAL SIGNIFICANCE: Retinal vascular changes correlate with cardiac and cerebrovascular risk. Fundoscopy provides direct visualization of microvascular disease.`
    },
    {
      id: "sys_002",
      disease: "Sarcoidosis — Ocular",
      category: "Systemic Ocular Diseases",
      keywords: ["mutton fat KPs", "granulomatous uveitis", "Busacca nodules", "Koeppe nodules", "candle wax drippings", "periphlebitis", "lacrimal gland", "hilar lymphadenopathy", "ACE", "band keratopathy"],
      content: `Sarcoidosis causes ocular involvement in 25-50% — can affect any part of the eye.
ANTERIOR UVEITIS (most common): Granulomatous — mutton-fat KPs, Koeppe nodules (at pupil margin), Busacca nodules (iris stroma), posterior synechiae, iris nodules. Bilateral chronic anterior uveitis.
POSTERIOR SEGMENT: Periphlebitis (candle wax dripping/tache de bougie appearance — perivascular cuffing). Chorioretinal granulomas. Vitreous cells (snowballs inferior vitreous — "string of pearls"). Disc granuloma.
LACRIMAL: Enlargement, dacryoadenitis, dry eye. Heerfordt syndrome (uveoparotid fever — bilateral uveitis + parotid enlargement + CN VII palsy + fever).
CORNEA: Band keratopathy (calcium in anterior stroma — chronic uveitis with hypercalcaemia).
NEURO-OPHTHALMOLOGY: CN palsies (especially CN VII), optic neuropathy, chiasmal lesions.
DIAGNOSIS: CXR (bilateral hilar lymphadenopathy), serum ACE (elevated — non-specific), serum calcium, SACE, tissue biopsy (non-caseating granuloma — conjunctival biopsy accessible). FDG-PET.
TREATMENT: Topical/systemic steroids. Methotrexate, azathioprine. Anti-TNF for refractory.`
    },
    {
      id: "sys_003",
      disease: "Rheumatoid Arthritis — Ocular",
      category: "Systemic Ocular Diseases",
      keywords: ["keratoconjunctivitis sicca", "scleritis", "episcleritis", "peripheral ulcerative keratitis", "scleromalacia perforans", "dry eye RA", "corneal melt"],
      content: `Rheumatoid arthritis has significant ocular manifestations — dry eye being most common.
KERATOCONJUNCTIVITIS SICCA (most common — 25-30%): Secondary Sjögren syndrome. Aqueous-deficient dry eye. Severe KCS with filamentary keratitis.
EPISCLERITIS: Common (simple or nodular). Usually simple and self-limiting.
SCLERITIS: Important association — nodular or diffuse scleritis most common. Necrotizing scleritis rare but severe — risk of perforation. Scleromalacia perforans (necrotizing scleritis without inflammation — thinned sclera, blue uveal show — RARE, severe RA, no pain).
PERIPHERAL ULCERATIVE KERATITIS (PUK): Crescent-shaped peripheral corneal ulceration with stromal thinning. Can lead to corneal perforation. Associated with systemic vasculitis (RA, GPA, SLE). Requires aggressive systemic immunosuppression (methotrexate, cyclophosphamide). Associated with high mortality from vasculitis.
TREATMENT: Primary: treat systemic RA (DMARDs — methotrexate, hydroxychloroquine, biologics). Ocular specific: lubricants for KCS, NSAIDs/steroids for episcleritis, systemic immunosuppression for scleritis/PUK.`
    },
    {
      id: "sys_004",
      disease: "Ocular Manifestations of HIV/AIDS",
      category: "Systemic Ocular Diseases",
      keywords: ["CMV retinitis", "HIV retinopathy", "immune recovery uveitis", "cotton wool spots", "CD4 count", "AIDS", "HAART", "opportunistic infections", "toxoplasma", "microvasculopathy"],
      content: `HIV/AIDS causes diverse ocular manifestations related to immune deficiency, direct viral effect, and HAART-related complications.
HIV RETINOPATHY (most common — non-infectious, CD4 any level): Cotton wool spots (transient microinfarcts), microaneurysms, flame hemorrhages. Visual symptoms minimal.
CMV RETINITIS (CD4 <50 cells/μL — most common serious opportunistic infection): "Pizza pie" fundus — hemorrhages + white necrotic retina along vessels. "Brushfire" spreading border. Risk of retinal detachment. Treatment: valganciclovir oral or IV ganciclovir. Intravitreal ganciclovir implant.
IMMUNE RECOVERY UVEITIS (IRU): After HAART initiation → immune recovery → inflammatory response to residual CMV antigens → anterior uveitis, vitritis, epiretinal membrane, CME.
OTHER: Toxoplasma chorioretinitis (CD4 <100). Cryptococcal meningitis → papilloedema/CN palsies. VZV retinitis (ARN/PORN — acute/progressive outer retinal necrosis — severe, rapidly progressive). Kaposi sarcoma of conjunctiva (red subconjunctival lesion).
MANAGEMENT: Regular ophthalmic screening for all HIV+ patients. HAART (raises CD4, reduces OI risk). Prophylactic valganciclovir when CD4 <50.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 19: OCULAR PHARMACOLOGY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "pharm_001",
      disease: "Ocular Drug Side Effects",
      category: "Ocular Pharmacology",
      keywords: ["chloroquine maculopathy", "bull's eye maculopathy", "tamoxifen retinopathy", "amiodarone keratopathy", "steroids glaucoma cataract", "ethambutol optic neuropathy", "hydroxychloroquine", "drug toxicity eye"],
      content: `Many systemic drugs cause ocular side effects requiring regular ophthalmic monitoring.
CHLOROQUINE/HYDROXYCHLOROQUINE (antimalarials): Maculopathy — bull's eye pattern of RPE loss around fovea. Hydroxychloroquine safer. Risk increases with cumulative dose (>5mg/kg/day HCQ) and duration (>5 years). Pericentral pattern in Asians. Screening: annual OCT + automated visual fields (10-2) + multifocal ERG. No treatment once established — irreversible.
TAMOXIFEN (breast cancer): Crystalline macular deposits, cystoid macular edema, superficial whorl-like corneal changes. OCT screening for high-dose users.
AMIODARONE (antiarrhythmic): Cornea verticillata (whorl-like corneal deposits — usually no visual symptoms), optic neuropathy (bilateral disc swelling with visual loss — rare but severe).
ETHAMBUTOL (anti-TB): Toxic optic neuropathy — bilateral central scotoma, dyschromatopsia (red-green colour vision loss most sensitive), visual acuity loss. Dose-dependent (avoid >15mg/kg/day). URGENT withdrawal if optic neuropathy detected. Monthly colour vision testing.
STEROIDS (topical/systemic): Raised IOP (steroid-response — monitor IOP), posterior subcapsular cataract (with long-term use).
VIGABATRIN (anticonvulsant): Bilateral concentric visual field constriction (irreversible). Annual Goldmann VF monitoring.
SILDENAFIL/PDE5 inhibitors: Transient blue-tinge to vision (cyanopsia), increased NAION risk in predisposed.`
    },

    // ═══════════════════════════════════════════════════════════════
    // SECTION 20: ENDOPHTHALMITIS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "endo_001",
      disease: "Endophthalmitis",
      category: "Ocular Infections",
      keywords: ["post-operative", "intravitreal injection", "hypopyon", "vitreous inflammation", "panophthalmitis", "painful visual loss", "intravitreal antibiotics", "vitrectomy", "Staphylococcus epidermidis"],
      content: `Endophthalmitis is severe intraocular infection involving the vitreous and anterior segment — a sight-threatening emergency.
CLASSIFICATION:
POST-OPERATIVE (most common): After cataract surgery (0.04-0.1%), intravitreal injections (0.05%), glaucoma surgery. Organism: coagulase-negative Staphylococcus (most common — indolent course), Staph. aureus (virulent), Streptococcus (most aggressive). Propionibacterium acnes: Chronic post-cataract (months later, white plaque on posterior capsule).
POST-TRAUMATIC: Bacillus cereus (soil/organic IOFB — extremely aggressive, rapid visual loss within 24h), Staph. aureus, Streptococcus. Fungal endophthalmitis (Candida after IV drug use or prolonged IV antibiotics).
ENDOGENOUS: Haematogenous spread from bacteraemia (Klebsiella — liver abscess, East Asia), Candida (IV line/drug use). Yellow-white chorioretinal infiltrates.
SYMPTOMS: Sudden or progressive visual loss, pain, photophobia, redness.
SIGNS: Reduced VA (often markedly), hypopyon, vitreous haze/opacification, corneal edema/infiltrate.
EVS (ENDOPHTHALMITIS VITRECTOMY STUDY): PPV + intravitreal antibiotics for VA ≤HM. Intravitreal antibiotics alone (± vitreous tap/biopsy) for VA >HM. Systemic antibiotics NOT beneficial.
TREATMENT: URGENT intravitreal vancomycin 1mg/0.1ml + ceftazidime 2.25mg/0.1ml. PPV for severe cases (VA ≤HM, Bacillus). Intravitreal antifungals for fungal (amphotericin B + voriconazole). No contact lens wear prevention: prophylactic 5% povidone iodine subconjunctival before intravitreal injections.`
    },
  ]
}

/**
 * Search the knowledge base for relevant content
 */
function searchKnowledge(query, topN = 6) {
  const lower = query.toLowerCase()
  const words = lower.split(/\s+/).filter(w => w.length > 2)

  const scored = KHURANA_KNOWLEDGE.sections.map(section => {
    let score = 0

    // Score against keywords (highest weight)
    section.keywords.forEach(kw => {
      if (lower.includes(kw.toLowerCase())) score += 4
      words.forEach(w => {
        if (kw.toLowerCase().includes(w)) score += 1.5
      })
    })

    // Score against disease name
    if (lower.includes(section.disease.toLowerCase())) score += 6
    words.forEach(w => {
      if (section.disease.toLowerCase().includes(w)) score += 2.5
    })

    // Score against category
    words.forEach(w => {
      if (section.category.toLowerCase().includes(w)) score += 1
    })

    // Score against content body
    const contentLower = section.content.toLowerCase()
    words.forEach(w => {
      const matches = (contentLower.match(new RegExp(`\\b${w}`, 'g')) || []).length
      score += matches * 0.3
    })

    return { ...section, score }
  })

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
}

/**
 * Format knowledge entries for AI prompt injection
 */
function formatKnowledgeForPrompt(entries) {
  if (!entries || entries.length === 0) return ''

  const formatted = entries
    .map((e, i) => `[Reference ${i + 1} — ${e.disease} | ${e.category}]\n${e.content.trim()}`)
    .join('\n\n---\n\n')

  return `
## Clinical Reference Material (${KHURANA_KNOWLEDGE.source})

The following excerpts are from Khurana's Comprehensive Ophthalmology, 7th Edition.
Use this as your PRIMARY clinical reference:

${formatted}

---
`
}

module.exports = { KHURANA_KNOWLEDGE, searchKnowledge, formatKnowledgeForPrompt }
