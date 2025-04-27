interface IProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  disabled?: boolean
}
const Checkbox = ({ checked, onChange, label, disabled = false }: IProps) => {
  return (
    <label
      className={`
        group inline-flex items-center space-x-2 select-none rounded px-2 py-1 transition-colors
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:group'}
      `}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="peer hidden"
      />
      {/* 自定义复选框 */}
      <div
        className={`w-5 h-5 rounded border-3 flex items-center justify-center
          ${checked ? 'bg-[#0071E3] border-[#0071E3]' : 'border-[#ccc]'}
          ${checked ? 'border-none group-hover:bg-[#0071E3]/80' : 'group-hover:border-[#0071E3]'}
          ${disabled ? 'bg-gray-200 border-gray-300 cursor-not-allowed' : ''}
          transition-colors`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white hover:"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      {/* 文本 */}
      {label && (
        <span className={`${disabled ? 'text-gray-400' : 'text-gray-800'}`}>
          {label}
        </span>
      )}
    </label>
  )
}

export default Checkbox
