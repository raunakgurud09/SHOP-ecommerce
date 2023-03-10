import { Avatar } from '@/components/ui/Avatar/Avatar'
import FilledButton from '@/components/ui/Buttons/Filled'
import OutlinedButton from '@/components/ui/Buttons/Outlined'
import Image from '@/components/ui/Image'
import UploadButton from '@/components/ui/upload/uploadButton'
import withAuth from '@/components/withAuth'
import useUpdateUser from 'hooks/user/useUpdateUser'
import { useUser } from 'hooks/user/useUser'
import { useState } from 'react'
import { MAX_FILE_SIZE } from '../constants'

interface InitialState {
  image: string | ArrayBuffer | null
}
const profile = () => {
  const { data: currentUser } = useUser()

  const updateUser = useUpdateUser()

  const initialState: InitialState = {
    image: '',
  }
  const [userInfo, setUserInfo] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    handleUpdateProfile()
  }

  const handleUpdateProfile = async () => {
    if (!currentUser) return
    try {
      await updateUser(currentUser?._id, userInfo)
    } catch (error) {
      alert('not updated')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      console.log(selectedFile, 'clicked')

      if (!selectedFile) return

      if (selectedFile.size > MAX_FILE_SIZE) {
        // setToast('error', 'Photo must be less than 1mb')
        alert("message")
        return
      }
      
      if (
        selectedFile.type !== 'image/png' &&
        selectedFile.type !== 'image/jpeg'
        ) {
        alert("message in")
        // setToast('error', 'Invalid file type')
        return
      }

      imageChange(selectedFile)
    } else {
      return
    }
  }
  const imageChange = (file: Blob) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setUserInfo({ ...userInfo, image: reader.result })
    }
    reader.readAsDataURL(file)
  }

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
              <div>
                <p>change image</p>
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <input
                      type="file"
                      className="opacity-0 absolute w-full h-full "
                      onChange={handleChange}
                      accept="image/x-png,image/jpeg"
                    />
                    <OutlinedButton text="Change Photo" />
                  </div>
                </form>
              </div>
              <div>bio</div>
              <FilledButton text="submit" onClick={handleUpdateProfile} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default withAuth(profile)
