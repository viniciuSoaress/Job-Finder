'use client'

import { useState } from "react";
import { Filters } from "./components/Filter";
import { Hero } from "./components/Hero";
import { Services } from "./components/Servises";
import { WelcomeText } from "./components/WelcomeText";
import { jobs } from "./data/jobs";
import { SeachBar } from "./components/SeachBar";
import { ListedJobs } from "./components/ListedJobs";


export default function Home() {

  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  function handleFilterChange(filters: { contractStatus: string[], workStatus: string[] }) {
    let filtered = [...jobs]
    if (filters.contractStatus.length > 0) {
      filtered = filtered.filter((job) => filters.contractStatus.includes(job.contractStatus))
    }
    if (filters.workStatus.length > 0) {
      filtered = filtered.filter((job) => filters.workStatus.includes(job.workStatus))
    }

    setFilteredJobs(filtered)
  }

  function handleSeach(query: string) {

  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 items-center justify-between">

      <Hero />
      <Services />

      <div className="w-full mt-12 mb-16">
        <WelcomeText />
        <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
          <Filters
            onFilterChange={handleFilterChange}
            savedJob={savedJobs}
          />
          <div className="w-full">
            <SeachBar onSeach={handleSeach} />
            <ListedJobs
              jobs={filteredJobs}
              savedJobs={savedJobs}
              setSavendJobs={setSavedJobs}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
