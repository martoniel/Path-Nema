import { Link } from 'react-router-dom'

export default function Footer() {
  const resources = [
    { label: 'Clinical Case Studies', slug: 'clinical-case-studies' },
    { label: 'Academic Papers',       slug: 'academic-papers'       },
    { label: 'Learning Modules',      slug: 'learning-modules'      },
    { label: 'API Documentation',     slug: 'api-documentation'     },
  ]

  const legal = [
    { label: 'Privacy Policy',   slug: 'privacy-policy'   },
    { label: 'Terms of Service', slug: 'terms-of-service' },
    { label: 'HIPAA Compliance', slug: 'hipaa-compliance' },
  ]

  return (
    <footer className="bg-[#071210] border-t border-[#1a3328]">
      <div className="max-w-6xl mx-auto px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[rgba(46,255,192,0.12)] border border-[#1aad82] flex items-center justify-center text-base">👁</div>
              <span className="font-body font-semibold text-white text-[15px]">
                Path<span className="text-[#2effc0]">Nema</span>
              </span>
            </div>
            <p className="text-[#4a7a64] text-[13px] leading-relaxed max-w-[220px] font-body">
              Advancing the field of ophthalmic pathology through artificial intelligence and clinical collaboration.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body text-[13px] font-semibold text-[#7aad96] mb-4 tracking-wide">Resources</h4>
            {resources.map(l => (
              <Link key={l.slug} to={`/resources/${l.slug}`}
                className="block font-body text-[13px] text-[#4a7a64] mb-2.5 hover:text-[#2effc0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body text-[13px] font-semibold text-[#7aad96] mb-4 tracking-wide">Legal</h4>
            {legal.map(l => (
              <Link key={l.slug} to={`/legal/${l.slug}`}
                className="block font-body text-[13px] text-[#4a7a64] mb-2.5 hover:text-[#2effc0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#1a3328] pt-8">
          <p className="font-body text-[11px] font-bold text-[#4a7a64] tracking-widest uppercase mb-2">
            Medical Disclaimer
          </p>
          <p className="font-body text-[12px] text-[#4a7a64] leading-relaxed max-w-2xl">
            PathNema is intended for educational and clinical decision support purposes only. It is not a substitute
            for professional medical judgment, diagnosis, or treatment. Always seek the advice of a qualified health
            provider with any questions you may have regarding a medical condition.
          </p>
          <p className="font-body text-[12px] text-[#4a7a64] mt-4">
            © 2026 Path-Nema Ocular Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
