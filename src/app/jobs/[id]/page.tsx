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
    <div className="mt-52">
      {params.id}
      {job?.title}
    </div>
  )

}