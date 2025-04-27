import Drawer from './components/drawer'

const App = () => {
  return (
    <div className="grid place-items-center h-screen bg-base-300">
      <div className="py-2 px-4 bg-primary text-primary-content inline rounded-xl cursor-pointer hover:bg-base-content/80 transition duration-300">
        打开购物车
      </div>
      <Drawer />
    </div>
  )
}

export default App
