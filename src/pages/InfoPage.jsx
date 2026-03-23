import { useParams, useNavigate } from 'react-router-dom'

const CONTENT = {
  'clinical-case-studies': {
    title: 'Clinical Case Studies',
    category: 'Resources',
    icon: '🔬',
    intro: 'A curated collection of real-world ocular pathology cases designed to sharpen diagnostic reasoning and clinical decision-making for ophthalmologists, optometrists, and medical students.',
    sections: [
      {
        heading: 'What Are Clinical Case Studies?',
        body: `Clinical case studies are detailed accounts of real patient presentations, examinations, investigations, diagnoses, and management outcomes. In ocular pathology, they serve as invaluable educational tools that bridge the gap between theoretical knowledge and practical clinical application. Each case challenges the clinician to synthesize symptoms, signs, and diagnostic findings into a coherent differential diagnosis.`,
      },
      {
        heading: 'How Path-Nema Uses Case Studies',
        body: `Path-Nema's AI engine has been informed by patterns derived from thousands of documented ocular pathology cases. When you input a symptom description, the system cross-references it against established clinical presentations — drawing from the same disease patterns found in peer-reviewed case literature and Khurana's Comprehensive Ophthalmology, 7th Edition. This ensures that the diagnostic suggestions you receive are grounded in real clinical evidence.`,
      },
      {
        heading: 'Case Categories Available',
        body: `Our platform covers case patterns across all major ocular subspecialties including: anterior segment diseases (cornea, conjunctiva, lens), posterior segment conditions (retina, vitreous, optic nerve), glaucoma spectrum disorders, neuro-ophthalmology, orbital and adnexal diseases, paediatric ophthalmology, ocular manifestations of systemic disease, and ocular trauma.`,
      },
      {
        heading: 'Learning Outcomes',
        body: `By engaging with clinical case studies through Path-Nema, users develop stronger pattern recognition skills, improve their ability to generate accurate differential diagnoses, understand the rationale behind investigation choices, and apply evidence-based treatment protocols. This prepares clinicians for real-world scenarios they may encounter in practice or examinations.`,
      },
      {
        heading: 'Contributing Cases',
        body: `Path-Nema welcomes contributions from practising ophthalmologists and optometrists. If you have an interesting or educational case you would like to share with the community, please reach out to our clinical team. All submissions are reviewed for accuracy, educational value, and patient confidentiality compliance before publication.`,
      },
    ],
  },

  'academic-papers': {
    title: 'Academic Papers',
    category: 'Resources',
    icon: '📄',
    intro: 'Access curated peer-reviewed research, landmark ophthalmology studies, and evidence-based clinical guidelines that underpin the diagnostic algorithms used by Path-Nema.',
    sections: [
      {
        heading: 'Our Evidence Base',
        body: `Path-Nema is built on a foundation of peer-reviewed clinical literature. The primary reference source is Khurana's Comprehensive Ophthalmology, 7th Edition — one of the most authoritative and widely used ophthalmology textbooks globally. This is supplemented by landmark randomised controlled trials, clinical practice guidelines from major ophthalmological bodies, and consensus statements from international expert panels.`,
      },
      {
        heading: 'Key Reference Sources',
        body: `The diagnostic content within Path-Nema draws from publications by leading organisations including the American Academy of Ophthalmology (AAO), the Royal College of Ophthalmologists (RCOphth), the World Health Organisation (WHO) Vision Programme, the International Council of Ophthalmology (ICO), and the European Glaucoma Society (EGS). Landmark trials referenced include the Endophthalmitis Vitrectomy Study (EVS), the CATT trial for AMD, the OHTS for glaucoma, and DRCR.net studies for diabetic macular oedema.`,
      },
      {
        heading: 'Staying Current',
        body: `Ocular pathology is a rapidly evolving field. New treatment modalities, diagnostic technologies, and clinical guidelines emerge regularly. Path-Nema's knowledge base is periodically reviewed and updated to reflect significant advances in the field, including new anti-VEGF agents, gene therapy developments for inherited retinal dystrophies, and emerging surgical techniques.`,
      },
      {
        heading: 'Research Disclaimer',
        body: `While Path-Nema strives to reflect current best evidence, it should not be used as a substitute for direct access to primary literature. Clinicians are encouraged to consult original publications when making complex clinical decisions. The platform is a decision support tool, not a replacement for comprehensive clinical training and judgment.`,
      },
    ],
  },

  'learning-modules': {
    title: 'Learning Modules',
    category: 'Resources',
    icon: '🎓',
    intro: 'Structured educational content designed for medical students, optometry trainees, ophthalmology residents, and continuing professional development for qualified practitioners.',
    sections: [
      {
        heading: 'Who Are the Modules For?',
        body: `Path-Nema's learning modules are designed for a broad audience including final-year medical students preparing for clinical examinations, optometry and orthoptic students building foundational knowledge, ophthalmology residents seeking to consolidate their understanding of complex pathologies, and practising optometrists and ophthalmologists pursuing continuing professional development (CPD).`,
      },
      {
        heading: 'Module Structure',
        body: `Each learning module follows a consistent evidence-based structure: Introduction and clinical significance, Epidemiology and risk factors, Pathophysiology and disease mechanism, Clinical presentation (symptoms and signs), Diagnostic approach and investigations, Differential diagnosis, Treatment and management, Complications and prognosis. This mirrors the structure used in formal clinical examinations and real-world consultations.`,
      },
      {
        heading: 'Interactive Diagnosis Practice',
        body: `The core of Path-Nema's learning experience is the AI-powered diagnostic search. By entering symptom descriptions and reviewing the matched diagnoses and clinical guidance, users actively practise the cognitive process of differential diagnosis generation — a skill central to clinical ophthalmology. Each search becomes a mini-learning exercise.`,
      },
      {
        heading: 'Examination Preparation',
        body: `Path-Nema is particularly useful for candidates preparing for the MRCOphth, FRCOphth, FRCS(Ophth), MBBS/MBChB finals, and optometry board examinations. The 89-disease knowledge base covers the breadth of conditions commonly tested in these examinations, with structured clinical information aligned to examination mark schemes.`,
      },
      {
        heading: 'Coming Soon',
        body: `Future planned features include interactive MCQ banks linked to each disease, spaced repetition flashcard systems, structured OSCE preparation scenarios, and peer comparison benchmarking. These will be progressively rolled out as part of Path-Nema's commitment to clinical education excellence.`,
      },
    ],
  },

  'api-documentation': {
    title: 'API Documentation',
    category: 'Resources',
    icon: '⚙️',
    intro: 'Technical documentation for developers and institutions seeking to integrate Path-Nema\'s ocular pathology diagnostic engine into their own clinical systems or applications.',
    sections: [
      {
        heading: 'Overview',
        body: `Path-Nema provides a RESTful API that allows third-party applications to access our ocular pathology diagnostic engine. The API accepts natural language symptom descriptions and returns structured diagnostic data including matched diseases, match percentages, clinical guidance, severity assessments, and detailed pathology information. Authentication is handled via API keys issued upon registration.`,
      },
      {
        heading: 'Base URL',
        body: `All API requests should be made to the Path-Nema API base URL. The current version is v1. The primary diagnostic endpoint is POST /api/search which accepts a JSON body containing the query field with a natural language symptom description. The API returns a comprehensive JSON response including diseases array, clinical guidance, highlighted terms, confidence threshold, and knowledge source attribution.`,
      },
      {
        heading: 'Authentication',
        body: `API access requires a valid API key passed in the request header as X-PathNema-Key. Keys are issued upon registration for developer access. Rate limits apply based on your subscription tier. Free tier: 100 requests per day. Professional tier: 5,000 requests per day. Enterprise tier: unlimited with dedicated support.`,
      },
      {
        heading: 'Response Structure',
        body: `The API returns a structured JSON object containing: diseases (array of matched conditions with matchPct, severity, symptoms, overview, and full clinical data), clinicalGuidance (narrative guidance paragraph), highlightedTerms (key symptom terms), confidenceThreshold (minimum match percentage used), and source (knowledge base attribution). Full schema documentation is available upon developer registration.`,
      },
      {
        heading: 'Integration Use Cases',
        body: `The Path-Nema API is suitable for integration into electronic health record (EHR) systems, clinical decision support tools, teleophthalmology platforms, medical education software, hospital information systems, and mobile health applications. HIPAA-compliant data handling is maintained throughout all API interactions.`,
      },
      {
        heading: 'Getting Access',
        body: `To request API access for your institution or application, please contact the Path-Nema development team with details of your intended use case, expected query volume, and organisation type. Sandbox access for testing is available to approved developers without charge.`,
      },
    ],
  },

  'privacy-policy': {
    title: 'Privacy Policy',
    category: 'Legal',
    icon: '🔒',
    intro: 'This Privacy Policy explains how Path-Nema Ocular Analytics collects, uses, stores, and protects your personal information when you use our platform.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: `Path-Nema collects information you provide directly when creating an account (name, email address, professional role), information generated through your use of the platform (search queries, diagnostic interactions, usage patterns), and technical information automatically collected (IP address, browser type, device information, and session data). We do not collect or store patient identifiable information — all diagnostic queries should be entered in de-identified form.`,
      },
      {
        heading: '2. How We Use Your Information',
        body: `We use your information to provide and improve the Path-Nema diagnostic service, personalise your experience based on your professional role and usage patterns, send service-related communications and updates, monitor platform performance and security, conduct anonymised research to improve our diagnostic algorithms, and comply with legal obligations. We do not sell your personal data to third parties.`,
      },
      {
        heading: '3. Data Storage and Security',
        body: `Your data is stored on secure servers with industry-standard encryption (AES-256 at rest, TLS 1.3 in transit). Access to personal data is restricted to authorised Path-Nema personnel on a need-to-know basis. We conduct regular security audits and penetration testing. In the event of a data breach that affects your personal information, we will notify you within 72 hours in accordance with applicable data protection regulations.`,
      },
      {
        heading: '4. Cookies and Tracking',
        body: `Path-Nema uses essential cookies necessary for platform functionality (authentication, session management) and optional analytics cookies to understand how users interact with the platform. You may disable non-essential cookies through your browser settings. We do not use advertising cookies or share tracking data with advertising networks.`,
      },
      {
        heading: '5. Your Rights',
        body: `You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your account and associated data, object to or restrict certain processing of your data, and data portability (receive your data in a machine-readable format). To exercise these rights, contact our Data Protection Officer at privacy@pathnema.com.`,
      },
      {
        heading: '6. Changes to This Policy',
        body: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify registered users of material changes via email at least 30 days before they take effect. Continued use of the platform after that date constitutes acceptance of the updated policy. Last updated: March 2026.`,
      },
    ],
  },

  'terms-of-service': {
    title: 'Terms of Service',
    category: 'Legal',
    icon: '📋',
    intro: 'These Terms of Service govern your use of the Path-Nema platform. By accessing or using Path-Nema, you agree to be bound by these terms.',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: `By registering for or using the Path-Nema platform, you confirm that you are at least 18 years of age, have read and understood these Terms of Service, agree to be bound by these terms and our Privacy Policy, and are using the platform for legitimate educational or clinical decision support purposes. If you are using Path-Nema on behalf of an organisation, you represent that you have authority to bind that organisation to these terms.`,
      },
      {
        heading: '2. Nature of the Service',
        body: `Path-Nema is an AI-powered clinical decision support tool designed to assist qualified healthcare professionals and students in generating differential diagnoses for ocular pathologies. The platform is intended as an educational and decision support tool only. It does not provide medical diagnoses, replace clinical examination, substitute for professional medical judgment, or constitute a doctor-patient relationship. All clinical decisions must be made by qualified healthcare professionals.`,
      },
      {
        heading: '3. User Responsibilities',
        body: `You agree to use Path-Nema only for lawful purposes consistent with these terms, not to enter patient-identifiable information into the platform, not to attempt to reverse-engineer, copy, or redistribute our diagnostic algorithms or knowledge base, not to use the platform in any way that could harm, disable, or impair its operation, to maintain the confidentiality of your account credentials, and to notify us immediately of any unauthorised use of your account.`,
      },
      {
        heading: '4. Intellectual Property',
        body: `All content, algorithms, knowledge base materials, interface designs, and software comprising the Path-Nema platform are the intellectual property of Path-Nema Ocular Analytics or its licensors. You may not reproduce, distribute, modify, or create derivative works from any Path-Nema content without express written permission. The Khurana's Comprehensive Ophthalmology content referenced within the platform is used under educational fair use provisions and remains the intellectual property of its respective copyright holders.`,
      },
      {
        heading: '5. Limitation of Liability',
        body: `Path-Nema Ocular Analytics shall not be liable for any clinical decisions made based on platform output, diagnostic errors arising from incomplete or inaccurate symptom descriptions, patient outcomes resulting from reliance on platform suggestions, or any indirect, incidental, or consequential damages arising from platform use. The platform is provided "as is" without warranties of any kind. Maximum liability is limited to the subscription fees paid in the 12 months preceding any claim.`,
      },
      {
        heading: '6. Termination',
        body: `We reserve the right to suspend or terminate your access to Path-Nema at any time for violation of these terms, misuse of the platform, or any conduct we reasonably determine to be harmful to the platform or its users. You may terminate your account at any time by contacting our support team. Upon termination, your right to use the platform ceases immediately.`,
      },
    ],
  },

  'hipaa-compliance': {
    title: 'HIPAA Compliance',
    category: 'Legal',
    icon: '🏥',
    intro: 'Path-Nema is designed and operated with HIPAA compliance principles at its core, ensuring that our platform meets the standards required for use in healthcare settings.',
    sections: [
      {
        heading: 'Our Commitment to HIPAA',
        body: `The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for protecting sensitive patient health information. Path-Nema is committed to maintaining HIPAA compliance across all aspects of our platform design, data handling practices, and operational procedures. We understand that healthcare professionals operate in environments where data privacy is not just a legal requirement but an ethical obligation.`,
      },
      {
        heading: 'De-identification by Design',
        body: `Path-Nema is specifically designed to operate without requiring the entry of Protected Health Information (PHI). Users are instructed and reminded to enter only de-identified symptom descriptions when using the diagnostic search function. The platform does not request, require, or store patient names, dates of birth, medical record numbers, or any other PHI identifiers. This de-identification by design approach is the most robust HIPAA compliance strategy.`,
      },
      {
        heading: 'Technical Safeguards',
        body: `Path-Nema implements the required HIPAA technical safeguards including: access controls (unique user identification, automatic logoff, encryption and decryption), audit controls (hardware, software, and procedural mechanisms to record and examine access), integrity controls (mechanisms to authenticate electronic health information), and transmission security (encryption of data in transit using TLS 1.3 and at rest using AES-256).`,
      },
      {
        heading: 'Administrative Safeguards',
        body: `Our administrative safeguards include a designated HIPAA Security Officer, regular HIPAA training for all staff with access to system data, documented security policies and procedures, regular risk assessments and vulnerability analyses, contingency planning for data backup and disaster recovery, and business associate agreements (BAAs) with all third-party service providers who may access our systems.`,
      },
      {
        heading: 'Business Associate Agreements',
        body: `For healthcare organisations wishing to formally integrate Path-Nema into their clinical workflows, we offer Business Associate Agreements (BAAs) as required by HIPAA regulations. A BAA establishes the permitted uses and disclosures of PHI, requires appropriate safeguards, and outlines breach notification procedures. To request a BAA, please contact our compliance team at compliance@pathnema.com.`,
      },
      {
        heading: 'Breach Notification',
        body: `In the unlikely event of a security breach involving PHI, Path-Nema will comply fully with HIPAA Breach Notification Rule requirements. This includes notifying affected individuals within 60 days of discovery, notifying the Secretary of Health and Human Services, and for breaches affecting more than 500 residents of a state, notifying prominent media outlets in that state. Our incident response team is available 24/7 to respond to security incidents.`,
      },
    ],
  },
}

export default function InfoPage() {
  const { category, slug } = useParams()
  const navigate           = useNavigate()
  const content            = CONTENT[slug]

  if (!content) {
    return (
      <div className="min-h-screen pt-[60px] flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-[#7aad96] mb-4">Page not found.</p>
          <button onClick={() => navigate('/')}
            className="px-5 py-2.5 rounded-xl bg-[#2effc0] text-[#071210] font-bold font-body text-sm hover:opacity-85 transition-opacity">
            ← Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-[60px]">
      <div className="max-w-[860px] mx-auto px-6 py-10">

        {/* Back */}
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#2effc0] text-[13px] font-semibold font-body mb-8 hover:opacity-75 transition-opacity">
          ← Back
        </button>

        {/* Header */}
        <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-8 mb-10">
          <p className="font-body text-[10px] font-bold tracking-[3px] uppercase text-[#4a7a64] mb-3">
            {content.category}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[rgba(46,255,192,0.08)] border border-[#1aad82]/30 flex items-center justify-center text-2xl flex-shrink-0">
              {content.icon}
            </div>
            <h1 className="text-white font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800 }}>
              {content.title}
            </h1>
          </div>
          <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{content.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {content.sections.map((section, i) => (
            <div key={i} className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-7">
              <h2 className="font-body font-bold text-[17px] text-[#e8f5f0] mb-4 pb-3 border-b border-[#1a3328]">
                {section.heading}
              </h2>
              <p className="font-body text-sm text-[#7aad96] leading-[1.9]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <p className="font-body text-[11px] text-[#4a7a64]">
            © 2026 PathNema Ocular Analytics. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  )
}
