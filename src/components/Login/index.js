// @flow
import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import Box from 'grommet/components/Box';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';

function Login() {
  return (
    <Box full align="center" justify="center" pad="medium">
      <Box size="full">
        <Form>
          <FormFields>
            <FormField label="Email">
              <Field name="email" type="email" />
            </FormField>
            <FormField label="Password">
              <Field name="password" type="password" />
            </FormField>
          </FormFields>
        </Form>
      </Box>
    </Box>
  );
}

const mapPropsToValues = () => ({
  email: '',
  password: '',
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const handleSubmit = (values) => {
  // Do something
};

export default withFormik({ mapPropsToValues, validationSchema, handleSubmit })(Login);
