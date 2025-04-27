const ProductCard = () => {
  return (
    <div className="p-5 hover:bg-base-100 hover:rounded-xl">
      <div className="flex">
        <img
          className="w-[117px] h-[66px] rounded-md"
          src="https://pic.vjshi.com/2024-10-11/c29a106182024df4808c31ae325512ef/online/main.jpg?x-oss-process=style/video_cover_20231101"
          alt="<UNK>"
        />
        <div className="flex flex-col justify-between py-1 ml-3">
          <div className="font-medium">重启阿克苏监督卡asked</div>
          <div className="flex gap-2">
            <span>ID: 098675</span>
            <span>|</span>
            <span>类型: 视频素材</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>移除</div>
        <div>
          <span>个人授权</span>
          <span>380元</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
