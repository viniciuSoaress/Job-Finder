import { useEffect, useState } from "react"
import { SearchIcon } from "lucide-react"

type SeachBarProps = {
  onSeach: (query: string) => void
}

export function SeachBar({ onSeach }: SeachBarProps) {

  const [seachQuery, SetSeachQuery] = useState('')

  useEffect(() => {
    onSeach(seachQuery)
  }, [seachQuery])

  return (
    <div className="w-full">
      <div className="w-full flex items-center gap-5">
        <div className="w-full flex items-center gap-3 shadow-sm px-4 bg-white rounded-lg border border-gray-200">
          <SearchIcon size={18} className="text-[#6366f1]" />
          <input
            type="text"
            placeholder="Seach For Job Title"
            className="w-full h-10 bg-white outline-none rounded-lg text-gray-700"
            value={seachQuery}
            onChange={e => SetSeachQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}