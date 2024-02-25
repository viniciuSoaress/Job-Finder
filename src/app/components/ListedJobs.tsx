import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react"
import { BookmarkCheckIcon, BookmarkIcon, BuildingIcon, MapPinIcon, NewspaperIcon } from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: StaticImageData;
  contractStatus: string;
  workStatus: string;
  description: string;
  about: string;
  rquirements: string;
}

type ListedJobsProps = {
  jobs: Job[],
  setSavendJobs: Dispatch<SetStateAction<number[]>>,
  savedJobs: number[]

}


export function ListedJobs({ jobs, savedJobs, setSavendJobs }: ListedJobsProps) {

  const router = useRouter()

  function handleSave(id: number) {
    const item = savedJobs.find((j) => j === id)
    if (item) {
      setSavendJobs(savedJobs.filter((j) => j !== item))
    } else {
      setSavendJobs((prev) => [
        ...prev, id
      ])
    }
  }

  return (
    <div className="w-full flex items-center justify-between flex-wrap mt-8">
      {!jobs.length && <span className="w-full text-center">No Jobs matched your Filter</span>}
      {jobs.map((job) => {

        return (
          <div key={job.id}
            className="md:w-[49%] w-full bg-white mb-5 rounded-lg flex items-center justify-between md:p-8 py-8 px-4 border border-gray-200"
          >
            <div className="flex md:flex-row flex-col md:items-center items-start gap-6">

              <img src={job.logo.src} alt={job.title} className="w-16" />

              <div className="flex flex-col gap-1.5">

                <span className="font-semibold text-indigo-500 text-xl">
                  {job.title}
                </span>

                <div className="flex items-center gap-2">
                  <BuildingIcon className='text-[#555]' size={18} />
                  <span className="text-3 font-medium text-gray-600">{job.company}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPinIcon className='text-[#555]' size={18} />
                  <span className="text-3 font-medium text-gray-600">{job.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <NewspaperIcon className='text-[#555]' size={18} />
                  <span className="text-3 font-medium text-gray-600">{job.contractStatus}</span>
                </div>

              </div>
            </div>
            <div className="flex flex-col gap-4 self-end">
              <button onClick={() => router.push(`/jobs/${job.id}`)}
                className="text-white font-bold text-lg bg-indigo-500 rounded-md w-40 h-10 hover:bg-indigo-500/90 transition-all">
                Apply
              </button>

              <div onClick={() => handleSave(job.id)}
                className={`flex items-center gap-2  cursor-pointer rounded-md  justify-center py-1 border border-gray-200 ${savedJobs.some(j => j === job.id) ? 'text-gray-100' : 'text-gray-200'}`}>
                {savedJobs.some(j => j === job.id) ? (
                  <BookmarkCheckIcon className="text-[#6366fa]" />
                ) : (
                  <BookmarkIcon className="text-[#6366fa]" />
                )
                }
                <span className="font-medium text-sm text-gray-600">
                  {savedJobs.some((j) => j === job.id) ? 'Saved!' : 'Save'}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}