
export function Hero() {
  return (
    <div className="w-full h-[80vh] flex items-center md:justify-between justify-center md:px-24 px-5 bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(./images/bg.jpg)` }}
    >
      <div className="flex flex-col gap-8 z-50 items-start">
        <span className='text-5xl font-semibold text-indigo-100'>
          Welcome To Job Finder
        </span>
        <p className="text-gray-200 max-w-[660px] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse pariatur minus, sit nostrum accusantium, cum impedit quod, facere eos sed sunt incidunt vitae tempora nihil ex! Officia, ut culpa?</p>
        <button className="text-white rounded-full bg-indigo-500 w-40 p-3">
          Find Jobs Now
        </button>
        <div className="w-full h-[calc(80vh-60px)] z-10 absolute top-[56px] bg-indigo-900/20 left-0 ring-0" />
      </div>
    </div>
  )
}