import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import cx from 'classnames'

export function AvatarImage({ image, w = '16', h = '16' }: any) {
  return (
    <>
      <NextImage
        src={image}
        className={cx('object-cover rounded-full', `h-[16px] w-[16px]`)}
        alt="profile"
        width={w}
        height={h}
      />
    </>
  )
}

export function Avatar({ letter = 'A', image = '', w = '32', h = '32' }: any) {
  // console.log(image)
  let [isImage, setIsImage] = useState<boolean>(true)
  useEffect(() => {
    image === '' ? setIsImage(false) : setIsImage(true)
  }, [image])

  return (
    <div
      className={cx(
        `flex items-center text-center justify-center rounded-full w-10 bg-gray-300/20 `,
        `w-${w} h-${h}`,
      )}
    >
      {isImage ? (
        <AvatarImage w={w} h={h} image={image} />
      ) : (
        <div className="font-mono font-medium">{letter}</div>
      )}
    </div>
  )
}
