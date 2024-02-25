'use client'

import {  XCircleIcon } from 'lucide-react'
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jobs } from '../data/jobs';

type FiltersProps = {
  onFilterChange: (filters: { contractStatus: string[], workStatus: string[] }) => void,
  savedJob: number[];
}

export function Filters({ onFilterChange, savedJob }: FiltersProps) {

  const [contract, SetCotract] = useState<string[]>([])
  const [work, SetWork] = useState<string[]>([])
  const navigate = useRouter()

  const memoFilterChange = useCallback(onFilterChange, [])

  useEffect(() => {
    memoFilterChange({contractStatus: contract, workStatus: work})
  }, [contract, work, memoFilterChange])

  function handleCloseFilter() {
    SetCotract([])
    SetWork([])
  }

  function handleContractStatusChange(e: ChangeEvent<HTMLInputElement>) {
    const isChanged = e.target.checked
    const filterValue = e.target.value

    SetCotract((prev) => {
      if(isChanged){
        return[...prev, filterValue]
      }else{
        return prev.filter(status => status!== filterValue)
      }
    })
   }

  function handleLocationStatusHandle(e: ChangeEvent<HTMLInputElement>) {
    const isChanged = e.target.checked
    const filterValue = e.target.value

    SetWork((prev) => {
      if(isChanged){
        return[...prev, filterValue]
      }else{
        return prev.filter(status => status!== filterValue)
      }
    })
   }

  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
      <div className="w-full bg-white shadow-sm rounded-lg p-5 border  border-gray-200">
        <div className="w-full flex items-center justify-between">

          <span className="text-gray-800 font-semibold text-base">Filter Jobs</span>
          <XCircleIcon size={18} className='cursor-pointer text-[#ed5a85]' onClick={handleCloseFilter} />

        </div>

        <div className="w-full flex md:flex-col flex-row justify-between gap-4 mt-5">
          <div className="flex flex-col gap-4">

            <span className='text-gray-800 font-semibold text-base'>work Status</span>

            <JobInput array={contract} handleChange={handleContractStatusChange} title='Full Time' />

            <JobInput array={contract} handleChange={handleContractStatusChange} title='Part Time' />

            <JobInput array={contract} handleChange={handleContractStatusChange} title='Intership' />

          </div>

          <div className="flex flex-col gap-4">

            <span className='text-gray-800 font-semibold text-base'>Location Status</span>

            <JobInput array={work} handleChange={handleLocationStatusHandle} title='On-Site' />

            <JobInput array={work} handleChange={handleLocationStatusHandle} title='Remote' />

            <JobInput array={work} handleChange={handleLocationStatusHandle} title='Hibrid' />
          </div>
        </div>

      </div>

      <div className="w-full bg-white rounded-lg p-5 mt-5 border border-gray-200">
        <div className="w-full flex flex-col gap-2">

          <span className='text-gray-800 font-semibold text-base'>Sved Jobs</span>

          <div className="flex flex-col w-full gap-5">
            {!savedJob.length && (
              <span className=' text-gray-200 text-sm'>You Don´t have saved jobs yet!</span>
            )}
            {savedJob.map((job) => {
              const j = jobs.find((j) => j.id === job)

              if(j){
                return (
                  <div key={job} className='text-gray-800 flex justify-between w-full border-b border-gray-300 pb-3'>
                    <div className="flex flex-col items-start gap-1">
                      <span>{j.title}</span>
                      <div className="flex items-center gap-2">

                        icon!!

                        <span className='text-sm text-gray-600'>{j.company}</span>

                      </div>
                    </div>
                    <button onClick={() => navigate.push(`/jobs/${j.id}`)} className='text-white font-semibold text-base rounded-md bg-indigo-500 w-20 h-8'>Aplly</button>
                  </div>
                )
              }
              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


type JobInputProps = {
  array: string[],
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  title: string
}

function JobInput({ array, handleChange, title }: JobInputProps) {

  return (
    <div className='flex w-full gap-2'>

      <input
        type="checkbox"
        checked={array.some((c) => c === title)}
        value={title}
        onChange={handleChange}
        className='size-4'
      />

      <span className="text-gray-800 font-medium text-base">{title}</span>

    </div>
  )
}