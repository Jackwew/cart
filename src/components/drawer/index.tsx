import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle, useState } from 'react'

const Drawer = forwardRef((props, ref) => {
  const [open, setOpen] = useState(true)

  useImperativeHandle(ref, () => ({
    show: () => {
      setOpen(true)
    },
  }))

  return createPortal(
    <div className="w-full h-dvh fixed left-0 top-0">
      <div className="w-full h-full fixed top-0 left-0 z-[1000] bg-base-content/60" />
      <section className="w-2/5 h-full bg-white z-[1001] fixed top-0 right-0 flex flex-col">
        <header>头部</header>
        <main>中间</main>
        <footer>底部</footer>
      </section>
    </div>,
    document.body,
  )
})

export default Drawer
