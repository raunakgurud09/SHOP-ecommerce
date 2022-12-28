import { Avatar } from '@/components/ui/Avatar/Avatar'
import Image from '@/components/ui/Image'
import MyModal from '@/components/ui/Modal/headlessModal'
import withAuth from '@/components/withAuth'
import { useUser } from 'hooks/user/useUser'

const profile = () => {
  const { data: currentUser } = useUser()
  return (
    <div className="container flex flex-col m-auto  h-[100vh]">
      {currentUser && (
        <>
          <h3 className="text-xl">Profile</h3>
          <div className="flex">
            <div className="w-1/4">
              {/* <Avatar image={currentUser.image} w="100" h="100" /> */}
              <Image
                src={currentUser.image}
                alt={currentUser.name}
                width="160"
                height="160"
                className="h-48 w-48 rounded-full object-cover"
              />
            </div>
            <div className="w-3/4">
              <div>change image</div>
              <div>bio</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default withAuth(profile)
