import Drawer from './components/DrawerCom'
import { useState } from 'react'
import Checkbox from './components/CheckBox'
import Tabs from './components/Tab'
import ProductCard from './components/ProductCard'

const TabItem = () => {
  return (
    <div>
      <ProductCard />
    </div>
  )
}

const App = () => {
  const [open, setOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const tabs = [
    { label: '视频 2', content: <TabItem /> },
    { label: '图片 1', content: <div>这里是关于页内容</div> },
    { label: '音乐 0', content: <div>这里是设置内容</div> },
  ]

  const DrawerFooter = () => (
    <div className="flex flex-col relative space-y-4 px-10 py-7 border-t border-solid border-[#F0F0F0]">
      <div className="flex items-center justify-between">
        <Checkbox checked={isChecked} onChange={setIsChecked} label="全选" />
        <div className="flex items-center text-base-content space-x-3">
          <div className="flex space-x-0.5 text-neutral-content">
            <span>已</span>
            <span>选</span>
            <span>0</span>
            <span>件</span>
          </div>
          <div className="flex space-x-1 items-center">
            <span className="font-medium">总计:</span>
            <div className="flex space-x-1 ml-2 items-center text-error-content">
              <span className="text-4xl font-medium">139</span>
              <span className="leading-none pt-[28px] pb-[10px]">元</span>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled
        className="w-full flex items-center justify-center whitespace-nowrap align-middle transition outline-none cursor-pointer disabled:cursor-not-allowed text-2xl py-6 mt-4 text-white bg-primary hover:bg-primary/80 active:bg-black disabled:bg-[#ccc] data-loading:text-transparent data-loading:bg-neutral rounded-full border-0"
      >
        立即购买
      </button>
    </div>
  )

  return (
    <div className="grid place-items-center h-screen bg-base-300">
      <div
        className="py-2 px-4 bg-primary text-primary-content inline rounded-xl cursor-pointer hover:bg-base-content/80 transition duration-300"
        onClick={() => setOpen(true)}
      >
        打开购物车
      </div>
      {/*<Drawer />*/}
      <Drawer
        title="购物车"
        size={700}
        isOpen={open}
        onClose={() => setOpen(false)}
        footer={<DrawerFooter />}
      >
        <div className="">
          <Tabs tabs={tabs} />
        </div>
      </Drawer>
    </div>
  )
}

export default App
