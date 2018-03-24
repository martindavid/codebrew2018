// @flow
import React from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import ProfileIcon from '../../assets/profile-icon.png';
import { routes, routeForGetStartedYP } from '../../utils/routes';

type Props = {
  countries: Array<string>,
  errors: Object,
  history: Object,
  languages: Array<string>,
  setFieldValue: (string, any) => void,
  touched: Object,
  values: Object,
};

const Icon = styled(Image)`
  width: 100px;
  height: 100px;
`;

function GetStartedDemographic(props: Props) {
  const {
    countries, errors, languages, setFieldValue, touched, values,
  } = props;

  return (
    <Box
      full
      justify="center"
      pad={{ vertical: 'medium', horizontal: 'medium', between: 'medium' }}
    >
      <Box align="center" pad={{ between: 'medium' }}>
        <Icon src={ProfileIcon} />
        <Heading align="center">Profile</Heading>
      </Box>
      <Form>
        <FormFields>
          <FormField label="Age" error={touched.age && errors.age && errors.age}>
            <Field name="age" type="text" />
          </FormField>
          <FormField label="Country" error={touched.country && errors.country && errors.country}>
            <TextInput
              suggestions={countries.filter(el =>
                el.toLowerCase().includes(values.country.toLowerCase()))}
              value={values.country}
              onDOMChange={e => setFieldValue('country', e.target.value)}
              onSelect={e => setFieldValue('country', e.suggestion)}
            />
          </FormField>
          <FormField
            label="Language Spoken"
            error={touched.language && errors.language && errors.language}
          >
            <TextInput
              suggestions={languages.filter(el =>
                el.toLowerCase().includes(values.language.toLowerCase()))}
              value={values.language}
              onDOMChange={e => setFieldValue('language', e.target.value)}
              onSelect={e => setFieldValue('language', e.suggestion)}
            />
          </FormField>
        </FormFields>
        <Box pad={{ between: 'small' }} margin={{ top: 'medium' }}>
          <Button primary label="Next" type="submit" />
          <Button label="Cancel" onClick={() => props.history.push(routes.getStarted)} />
        </Box>
      </Form>
    </Box>
  );
}

const mapPropsToValues = () => ({
  age: '',
  country: '',
  language: '',
});

const validationSchema = Yup.object().shape({
  age: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  language: Yup.string().required('Required'),
});

const handleSubmit = (values, { props }) => {
  props.setProfile(values);
  props.history.push(routeForGetStartedYP(1));
};

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
})(GetStartedDemographic);
