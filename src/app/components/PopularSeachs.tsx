'use clinet'

type PopularSeachsProps = {
  onSeach: (query: string) => void
}

export function PopularSeachs({ onSeach }: PopularSeachsProps) {
  function handleSeach(term: string) {
    onSeach(term)
  }

  const seachTerms = [
    { title: 'React' },
    { title: 'Vue' },
    { title: 'Angular' },
    { title: 'Mid-Level' },
    { title: 'Senior' },
    { title: 'Laravel' },
  ]
  return (
    <div className="w-full flex md:flex-row flex-col items-center gap-2 my-6">
      <span className="ml-1 text-gray-600 text-base font-medium">Popular Terms:</span>
      <div className="flex items-center gap-3 lg:max-w-full overflow-x-auto max-w-[450px]">
        {seachTerms.map(term => {
          return (
            <span
              key={term.title}
              className="border md:mb0 mb-3 border-indigo-500 rounded-full px-3 whitespace-nowrap text-indigo-500 bg-gray-100 text-base cursor-pointer hover:bg-indigo-100 duration-200 transition-all"
              onClick={() => handleSeach(term.title)}
            >{term.title}</span>
          )
        })}
      </div>
    </div>
  )
}