import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = values => {
    console.log(values);
    handleChangeQuery(values.query);
  };
  return (
    <section>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field placeholder='Enter query...' name='query' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </section>
  );
};
export default SearchBar;
