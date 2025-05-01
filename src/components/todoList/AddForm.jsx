import { Field, Form, Formik } from 'formik';
const AddForm = ({ handleAddTodo }) => {
  const initialValues = {
    todo: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    handleAddTodo(values);
    options.resetForm();
  };
  return (
    <div className='flex justify-center'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='flex gap-4 py-2'>
          <Field className='input input-primary' placeholder='New todo value' name='todo' />
          <button className='btn btn-primary' type='submit'>
            Add todo
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;
