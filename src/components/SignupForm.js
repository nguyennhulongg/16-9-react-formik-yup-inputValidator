import * as Yup from "yup";
import './signup.css'
import { useFormik } from 'formik';

const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Hey! What's your name?").min(4, "Must be more than 4 characters"),
      email: Yup.string().required("Oh! you have not entered your email").matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
        "Please enter a valid email address"
      ),
      password: Yup.string().required("Required").matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
        "Minimum eight characters, at least one letter, one number and one special character"
      ),
      confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref("password"),null], "Oops! It's wrong"),
      phone: Yup.string().required("Phone number is required bro").matches(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/, 
        "Must be a valid phone number"
      )
    }),
    onSubmit: (values) => {
      
    },
  });
  

  return ( 
    <section>
      <form className='info-form' onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input 
          type ="text"  
          id='name' 
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder='Enter Your Name'
        />
        {formik.errors.name && <p>{formik.errors.name}</p>}

          <label>Email</label>
        <input 
          type ="email"  
          id='email' 
          name='email'
          placeholder='Enter Your Email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}

          <label>Phone</label>
        <input 
          type ="text"  
          id='phone' 
          name='phone'
          placeholder='Enter Your Phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && <p>{formik.errors.phone}</p>}

          <label>Password</label>
        <input 
          type ="password"  
          id='password' 
          name='password'
          placeholder='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <p>{formik.errors.password}</p>}

          <label>Confirm Password</label>
        <input 
          type ="password"  
          id='confirmPassword' 
          name='confirmedPassword'
          placeholder='Confirm Your Password'
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmedPassword && <p>{formik.errors.confirmedPassword}</p>}

        <button type="submit" className='submit-btn'>Submit</button>
      </form>
    </section>
  );
}

export default SignupForm;