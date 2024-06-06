import React, { useState, useEffect } from 'react';

function Signup() {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      window.location.reload(); // Reload the page after successful form submission
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 20 characters";
    }
    return errors;
  };

  return (
    <div className='relative w-full h-screen bg-zinc-600'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={"https://media.istockphoto.com/id/859900656/vector/kitchen-icon-of-dish-fork-and-knife-simple-set-of-restaurant-vector-line-icons.jpg?s=612x612&w=0&k=20&c=2Nr9P2nAPiXWpPuOlN8msjbhfH08TbR15v4lZ14jCK4="} alt="background" />

      <div className='flex justify-center items-center h-full'>
       
        <form className='max-w-[480px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit}>
          <h2 className='text-4xl font-bold text-center py-4'>Sign Up</h2>
          <div className='flex flex-col mb-4'>
            <label>Name</label>
            <input
              className='border relative bg-gray-200 p-2 '
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="text-black-800">{formErrors.name}</p>
          </div>
          <div className='flex flex-col mb-4'>
            <label>Email</label>
            <input
              className='border relative bg-gray-200 p-2'
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-black-800">{formErrors.email}</p>
          </div>
          <div className='flex flex-col mb-4'>
            <label>Create password</label>
            <input
              className='border relative bg-gray-200 p-2'
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="text-black-800">{formErrors.password}</p>
          </div>
          <button className='w-full py-3 mt-8 bg-zinc-900 text-white' type="submit">Create an account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
