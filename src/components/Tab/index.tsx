import { ReactNode, useState } from 'react'

interface IProps {
  tabs: Array<{ label: string; content: ReactNode }>
  defaultIndex?: number
}
const Tabs = ({ tabs, defaultIndex = 0 }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  return (
    <div className="w-full px-10">
      {/* tab 按钮栏 */}
      <div className="flex border-b border-base-100">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={`
              px-1 py-4 pt-0 mr-10 text-xl cursor-pointer
              ${activeIndex === index ? 'border-b-4 border-primary text-primary font-medium' : 'text-accent'}
              hover:text-base-content transition-colors
            `}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* tab 内容区 */}
      <div className="mt-4">{tabs[activeIndex].content}</div>
    </div>
  )
}

export default Tabs
