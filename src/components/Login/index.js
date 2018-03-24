// @flow
import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import { routes } from '../../utils//routes';
import logo from '../../assets/logo.png';

type Props = {
  errors: Object,
  history: Object,
  touched: Object,
};

function Login(props: Props) {
  const { errors, touched } = props;
  return (
    <Box full justify="center" pad="medium">
      <Box align="center" justify="center">
        <Image size="small" src={logo} />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <Form>
        <FormFields>
          <FormField label="Email" error={touched.email && errors.email && errors.email}>
            <Field name="email" type="email" />
          </FormField>
          <FormField
            label="Password"
            error={touched.password && errors.password && errors.password}
          >
            <Field name="password" type="password" />
          </FormField>
        </FormFields>
        <Box margin={{ top: 'large' }} pad={{ between: 'medium' }}>
          <Button primary label="Log In" type="submit" />
          <Button label="Register" onClick={() => props.history.push(routes.register)} />
        </Box>
      </Form>
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
