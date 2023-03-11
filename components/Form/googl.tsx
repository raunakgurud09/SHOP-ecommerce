import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GoogleLogin as GoogleLoginLib } from 'react-google-login'
// import { gapi } from 'gapi-cjs'

import { IconGoogle } from '@/components/Icons'
import Button from '../ui/Buttons/Button'
import { GOOGLE_CLIENT_ID } from '@/constants/index'
import { useGoogleLogin } from '@/hooks/useAuth'
import Spinner from '../ui/spinner'

interface GoogleError {
  error: string
  details: string
}

const GoogleLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const googleLogin = useGoogleLogin()
  const { query } = useRouter()
  const ref = query.ref as string

//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId: GOOGLE_CLIENT_ID,
//         scope: '',
//       })
//     }
//     gapi.load('client:auth2', start)
//   }, [])

  const handleOnSuccess = async (response: any): Promise<void> => {
    console.log("success")
    try {
      setIsLoggingIn(true)
      const tokenId = response.tokenId
      await googleLogin(tokenId)
      setIsLoggingIn(false)
      if (ref) {
        Router.push(`/products/${ref}`)
      } else {
        Router.push('/profile')
      }
    } catch (error) {
      //   setToast('error', error.message);
      alert('error1')
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleOnFailure = (response: GoogleError) => {
    console.log(response.details)
    if (response.error === 'popup_closed_by_user') return
  }

  return (
    <>
      {isLoggingIn && <Spinner />}
      <div className="container">
        <GoogleLoginLib
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleOnSuccess}
          onFailure={handleOnFailure}
        />
      </div>
    </>
  )
}

export default GoogleLogin

// render={(renderProps) => (
//     <Button
//       type="button"
//       onClick={renderProps.onClick}
//       disabled={renderProps.disabled}
//       icon={<IconGoogle />}
//       title="Login with Google"
//       variant="light"
//       style={{ width: '100%' }}
//     />
//   )}
