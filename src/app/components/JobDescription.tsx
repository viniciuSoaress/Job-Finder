'use client'

import { BuildingIcon, MapPinIcon, NewspaperIcon } from "lucide-react"
import { jobs } from "../data/jobs"
import { useRouter } from "next/navigation"
import { SidebarIcom } from "./SibebarIcom"

type JobProps = {
  desc: string | undefined,
  req: string | undefined,
  about: string | undefined,
}

export function JobDescription({ about, desc, req }: JobProps) {
  const route = useRouter()

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col items-start gap-5 bg-white rounded-lg p-9 shadow-sm border border-gray-200">

        <span className="text-indigo-500 font-semibold text-xl">Job Description</span>
        <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{ __html: desc || '' }}></p>

        <p className="text-indigo-500 text-base font-medium">Job Requirements</p>
        <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{ __html: req || '' }}></p>

        <p className="text-indigo-500 text-base font-medium">About Us</p>
        <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{ __html: about || '' }}></p>
      </div>

      <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-full text-indigo-500 font-semibold text-xl text-center bg-white rounded-lg border border-gray-200 p-3 mb-4">Similar Jobs</div>
        <div className="w-full flex md:flex-row flex-col items-center gap-4 justify-between">
          {jobs.slice(0, 3).map((job) => {

            return (
              <div key={job.id}
                className="md:w-[430px] w-full bg-white rounded-lg flex items-center justify-between md:p-8 py-8 px-4 border border-gray-200"
              >
                <div className="flex flex-col gap-3 items-start">
                  <img src={job.logo.src} alt={job.title} className="w-[70px]" />

                  <span className="font-semibold text-indigo-500 text-xl">{job.title}</span>

                  <div className="flex flex-col gap-1.5 ">
                    <SidebarIcom icom={<BuildingIcon size={18} color="#555" />} title={job?.company} />

                    <SidebarIcom icom={<MapPinIcon size={18} color="#555" />} title={job?.workStatus} />

                    <SidebarIcom icom={<NewspaperIcon size={18} color="#555" />} title={job?.contractStatus} />

                  </div>
                </div>
                <div className="flex flex-col gap-4 self-end ">
                  <button onClick={() => route.push(`/jobs/${job.id}`)}
                    className="text-white bg-indigo-500 font-bold rounded-md hover:bg-indigo-500/90 w-40 h-10 transition-all"
                  >Apply</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}