import cx from 'classnames'
import { Avatar } from '../Avatar/Avatar'

interface Users {
  name?: string
  email?: string
  image?: string
  role?: string
  isVerified?: boolean
}

export default function UserCard({ name, image, email, role, isVerified }: Users) {
  return (
    <>
      <div className="flex p-2 border-2 rounded bg-primary  max-w-fit relative">
        <div>
          <Avatar image={image} letter={name.charAt(0).toLocaleUpperCase()} />
        </div>
        <div>
          <h3 className="p-1 text-m font-semibold">{name}</h3>
          <p className="p-1">{email}</p>
          <p className="p-1">{role}</p>
        </div>
        <div
          className={cx(
            'absolute w-4 h-4 top-[-7%] right-[-5%] rounded-full',
            isVerified ? 'bg-green-600' : 'bg-slate-700'
          )}
          aria-label="isVerified"
        ></div>
      </div>
    </>
  )
}
