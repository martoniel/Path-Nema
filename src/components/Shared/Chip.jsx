export default function Chip({ children, teal = false }) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border
        ${teal
          ? 'border-[#1aad82] text-[#2effc0]'
          : 'border-[#1a3328] text-[#7aad96]'}
      `}
    >
      {children}
    </span>
  )
}
