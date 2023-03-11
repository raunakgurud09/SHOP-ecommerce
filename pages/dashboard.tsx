import Index from '@/components/dashboard/Index'
import FilledButton from '@/components/ui/Buttons/Filled'
import React, { useEffect, useState } from 'react'

const options = ['General', 'Banner', 'Add Product', 'Products']

function dashboard() {
  const [option, setOption] = useState(0)

  const handleOptionChange = (e) => {
    for (let index = 0; index < options.length; index++) {
      if (options[index] === e.target.name) {
        setOption(index)
      }
    }
  }

  useEffect(() => {
    // first

    return () => {
      // second
    }
  }, [option])

  return (
    <div className="h-screen bg-slate-500/10 p-4 rounded">
      <div className="w-full bg-slate-700 p-8 rounded flex justify-between items-center flex-row">
        <div className="text-xl font-bold">website Name</div>
        <div>
          <FilledButton text="Visit" />
          <FilledButton text="Deploy" />
          <FilledButton text="Destroy" />
        </div>
      </div>
      <div className="pt-4 flex flex-row justify-between">
        <div className="w-1/4 bg-slate-700/20 h-full rounded p-1">
          {options.map((option) => (
            <div
              key={option}
              className="w-auto m-2 hover:bg-slate-700 h-10 text-center rounded-full flex justify-center align-center"
            >
              <button
                onClick={handleOptionChange}
                name={option}
                className="w-full font-semibold"
              >
                {option}
              </button>
            </div>
          ))}
        </div>
        <div className="w-3/4 h-96 bg-slate-700/20">
          <div className="">upload zone</div>
          <Index value={option} />
        </div>
      </div>
    </div>
  )
}

export default dashboard
