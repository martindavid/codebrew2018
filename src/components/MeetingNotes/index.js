// @flow
import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

function MeetingNotes(props: Props) {
  const { errors, touched } = props;
  return (
    <Box pad="medium">
      <Heading tag="h2">Write 3 things you have learned today</Heading>
      <Box flex="grow" justify="center">
        <Form>
          <FormFields>
            <FormField label="One" error={touched.one && errors.one && errors.one}>
              <Field name="one" type="text" />
            </FormField>
            <FormField label="Two" error={touched.two && errors.two && errors.two}>
              <Field name="two" type="text" />
            </FormField>
            <FormField label="Three" error={touched.three && errors.three && errors.three}>
              <Field name="three" type="text" />
            </FormField>
          </FormFields>
          <Box margin={{ top: 'medium' }}>
            <Button primary label="Submit" type="submit" fill />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

const mapPropsToValues = () => ({
  one: '',
  two: '',
  three: '',
});

const validationSchema = Yup.object().shape({
  one: Yup.string().required('Required'),
  two: Yup.string().required('Required'),
  three: Yup.string().required('Required'),
});

const handleSubmit = (values, { props }) => {
  props.history.push('/yp/home/complete');
};

export default withFormik({ mapPropsToValues, validationSchema, handleSubmit })(MeetingNotes);
