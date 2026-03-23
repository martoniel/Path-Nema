export default function IconBtn({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-9 h-9 flex items-center justify-center rounded-lg
        border border-[#1a3328] bg-[#0f2318] text-[#7aad96]
        hover:border-[#1aad82] hover:text-[#2effc0]
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </button>
  )
}


