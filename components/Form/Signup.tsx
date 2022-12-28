import React from 'react';
import { useFormik } from 'formik';
import { useRegister } from 'hooks/useAuth';

export default function register() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const register = useRegister();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      await register(values.name, values.email, values.password);
    },
  });
  return (
    <div className="flex justify-center ">
      <form onSubmit={formik.handleSubmit} className="flex flex-col w-40 ">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
