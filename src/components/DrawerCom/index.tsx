import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IProps {
  isOpen: boolean
  onClose: () => void
  onOk?: () => void
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  size?: number
  title?: string
  submitText?: string
  cancelText?: string
  footer?: ReactNode
}

const Drawer = ({
  isOpen,
  onClose,
  onOk,
  children,
  position = 'right',
  size = 0,
  title = '新的抽屉',
  submitText = '确认',
  cancelText = '取消',
  footer,
}: IProps) => {
  const positionClasses = {
    right: `right-0 top-0 h-full w-[${size}px]`,
    left: `left-0 top-0 h-full w-[${size}px]`,
    bottom: `bottom-0 left-0 w-full h-[${size}px]`,
    top: `top-0 left-0 w-full h-[${size}px]`,
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <motion.div
            className="fixed inset-0 bg-base-content/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* 抽屉主体 */}
          <motion.div
            className={`w-[${size}px] flex flex-col fixed bg-white z-50 shadow-lg ${positionClasses[position]}`}
            initial={{
              x:
                position === 'right'
                  ? '100%'
                  : position === 'left'
                    ? '-100%'
                    : 0,
              y:
                position === 'bottom'
                  ? '100%'
                  : position === 'top'
                    ? '-100%'
                    : 0,
            }}
            animate={{ x: 0, y: 0 }}
            exit={{
              x:
                position === 'right'
                  ? '100%'
                  : position === 'left'
                    ? '-100%'
                    : 0,
              y:
                position === 'bottom'
                  ? '100%'
                  : position === 'top'
                    ? '-100%'
                    : 0,
            }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <header className="pt-9 pb-8 px-10 text-black flex items-center justify-between text-3xl">
              <div className="text-3xl font-medium">{title}</div>
              <div className="cursor-pointer">
                <svg viewBox="0 0 24 24" width="36" height="36">
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                  </g>
                </svg>
              </div>
            </header>
            <div className="flex-1">{children}</div>
            {footer === undefined ? (
              <footer className="flex ml-auto gap-4">
                <div
                  className="py-2 px-6 bg-primary text-primary-content inline rounded-xl cursor-pointer hover:bg-base-content/80 transition duration-300"
                  onClick={() => {
                    onOk?.()
                  }}
                >
                  {submitText}
                </div>
                <div
                  className="py-2 px-6 bg-accent text-accent-content inline rounded-xl cursor-pointer hover:bg-accent/80 transition duration-300"
                  onClick={() => {
                    onClose()
                  }}
                >
                  {cancelText}
                </div>
              </footer>
            ) : (
              footer
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Drawer
