type IcomProps = {
  icom: React.ReactNode,
  title: string | undefined
}

export function SidebarIcom({icom, title}:IcomProps){

  return(
    <div className="flex items-center gap-2">
          {icom}

          <span className="text-sm font-medium text-gray-600">{title}</span>
        </div>
  )
}