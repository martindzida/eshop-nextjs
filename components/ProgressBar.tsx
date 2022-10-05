import React from 'react'

interface Props {
  progress: number
}

const ProgressBar = (props: Props) => {
  
  return (
    <div className='w-full h-1 bg-green-400'>
      <div className={`absolute h-1 bg-sky-800 text-emerald-400 w-${props.progress}/12`}/>
    </div>
  )
}

export default ProgressBar