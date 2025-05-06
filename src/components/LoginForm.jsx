import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sequi exercira necessitatibus perspiciatis!</p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className='fieldset'>
                  <label className='label'>Email</label>
                  <Field name='email' type='email' className='input' placeholder='Email' />
                  <label className='label'>Password</label>
                  <Field name='password' type='password' className='input' placeholder='Password' />
                  <div>
                    <Link to='/register' className='link link-hover'>
                      You don't have account? Sign UP!
                    </Link>
                  </div>
                  <button type='submit' className='btn btn-neutral mt-4'>
                    Login
                  </button>
                </fieldset>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
