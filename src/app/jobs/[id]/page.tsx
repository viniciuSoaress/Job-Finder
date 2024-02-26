import { JobDescription } from "@/app/components/JobDescription"
import { JobSidebar } from "@/app/components/jobSiderbar"
import { jobs } from "@/app/data/jobs"


async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id
  }))
}

function getJobs({ id }: { id: string }) {
  const job = jobs.find(j => j.id === Number(id))

  return job
}


export default function JobsIdPage({ params }: { params: { id: string } }) {

  const job = getJobs(params)


  return (
    <main className="flex min-h-screen flex-col bg-slate-50 items-center justify-between">

      <div className="w-full mt-28 mb-16 bg-slate-50">
        <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
          <JobSidebar job={job} />
          <div className="w-full">
            <JobDescription about={job?.about} desc={job?.description} req={job?.rquirements} />
          </div>
        </div>
      </div>
    </main>
  )

}