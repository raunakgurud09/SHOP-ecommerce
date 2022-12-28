import { useEffect, useState } from 'react'
import cx from 'classnames'

export default function SmallBadge({ children, number = 2 }) {
  const [count, setCount] = useState<number>(number)

  // useEffect(() => {}, [count])

  const incrementCount = () => {
    if (count >= 9) {
      return setCount(0)
    }
    setCount(count + 1)
    // setCount((count) => count++)
    console.log(count)
  }

  return (
    <div className="max-w-fit relative justify-center items-center">
      <div className="flex-shrink">{children}</div>
      <div
        className={cx(
          'rounded-full w-4 h-4 absolute top-[-20%] right-[-10%] flex justify-center items-center',
          `${number < 5 ? 'bg-red-500' : 'bg-blue-500'}  `
        )}
      >
        <div className="text-xs" onClick={incrementCount}>
          {count}
        </div>
      </div>
    </div>
  )
}
