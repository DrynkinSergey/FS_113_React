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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field placeholder='New todo value' name='todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;
