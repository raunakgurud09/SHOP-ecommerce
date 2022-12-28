import cx from 'classnames'
import { useUser } from 'hooks/user/useUser'
import { useEffect, useRef, useState } from 'react'

export default function DropDown({ children }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false)
  const { data: currentUser } = useUser()

  const dropDownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide)
    return () => window.removeEventListener('click', handleClickOutSide)
  }, [isOpenDropDown])

  const handleClickOutSide = (e: Event) => {
    const target = e.target
    if (target instanceof Node && dropDownRef.current?.contains(target)) {
      return
    }
    setIsOpenDropDown(false)
  }

  const handleCloseDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown)
  }

  return (
    <li ref={dropDownRef}>
      <div onClick={handleCloseDropDown}>
        <div>{children}</div>
      </div>
      <div
        className={cx(
          'absolute p-2 rounded top-[50%] left-[50%] mr-[-50%] translate-x-[-50%] translate-y-[-50%] w-96 h-48  bg-slate-50/10 transition-opacity z-50 backdrop-blur',
          isOpenDropDown ? 'visible' : 'invisible'
        )}
        aria-label="modal"
      >
        <div></div>
        <div>Lorem ipsum dolor sit amet.lorem50</div>
      </div>
    </li>
  )
}
