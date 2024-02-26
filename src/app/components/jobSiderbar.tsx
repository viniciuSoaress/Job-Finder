import { StaticImageData } from "next/image";
import { BanknoteIcon, BuildingIcon, MapPinIcon, NewspaperIcon } from "lucide-react";

type JobSidebarprops = {
  job: {
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
  } | undefined
}

export function JobSidebar({ job }: JobSidebarprops) {

  return (
    <div className="md:sticky relative md:top-10 md:w-[500] w-full">
      <div className="w-full bg-white rounded-lg p-5 border border-gray-200 flex flex-col gap-4">

        <span className="text-indigo-500 font-medium text-lg">
          {job?.title}
        </span>

        <span className="text-gray-600 font-medium text-base">
          {job?.location}
        </span>

        <SidebarIcom icom={<BuildingIcon size={18} color="#555" />} title={job?.company}/>

        <SidebarIcom icom={<MapPinIcon size={18} color="#555" />} title={job?.workStatus}/>

        <SidebarIcom icom={<NewspaperIcon size={18} color="#555" />} title={job?.contractStatus}/>

        <SidebarIcom icom={<BanknoteIcon size={18} color="#555" />} title={job?.salary}/>
        <button className="text-white font-bold text-lg rounded-md bg-indigo-500 w-full h-10">
          Apply Now
        </button>
      </div>
    </div>
  )
}

type IcomProps = {
  icom: React.ReactNode,
  title: string | undefined
}

function SidebarIcom({icom, title}:IcomProps){

  return(
    <div className="flex items-center gap-2">
          {icom}

          <span className="text-sm font-medium text-gray-600">{title}</span>
        </div>
  )
}