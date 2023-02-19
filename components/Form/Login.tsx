import axios from 'axios'
import { Formik } from 'formik'
import { useLogin } from 'hooks/useAuth'
import { signIn } from 'next-auth/react'
import Router, { useRouter } from 'next/router'

export default function SignUp() {
  const login = useLogin()
  const { query } = useRouter()

  const ref = query.ref as string

  const handleSubmit = async (values) => {
    console.log(values)
    await login(values.email, values.password)
    if (ref) {
      Router.push(`/products/${ref}`)
    } else {
      Router.push('/')
    }
    // const response = await axios.post('http://localhost:5000/api/v1/auth/login', {email:values.email,password:values.password})
    // console.log(response.data)
  }

  return (
    <div className="flex justify-center h-[100vh] items-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col p-4 bg-zinc-500 rounded h-fit ">
            <label htmlFor="">
            Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="border flex flex-col"
                onBlur={handleBlur}
                value={values.email}
              />
              
            </label>
            {errors.email && touched.email && errors.email}
            <label htmlFor="">
            Password
              <input
                type="password"
                className="border flex flex-col "
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              
            </label>
            {errors.password && touched.password && errors.password}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}
