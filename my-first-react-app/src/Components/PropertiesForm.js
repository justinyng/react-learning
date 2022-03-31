import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const PropertiesForm = () => {
  return (
    <>
      <h1>Add New Property</h1>
      <Formik
        initialValues={{
          name: '',
          streetAddress: '',
          latitude: '',
          longitude: '',
          addDemographicData: false,
        }}
        onSubmit={(values) => {
          createProperties(values);
        }}
      >
        <Form>
          <label>Name: </label>
          <Field
            name="name"
            type="text"
            placeholder="my name"
            autoComplete="off"
          />
          <br />
          <label>Street Address: </label>
          <Field
            name="streetAddress"
            type="text"
            placeholder="1234 56st"
            autoComplete="off"
          />
          <br />
          <label>Latitude: </label>
          {/* TODO: Add validation for latitude -90 to 90 */}
          <Field
            name="latitude"
            type="text"
            placeholder="-34.123"
            autoComplete="off"
          />
          <br />
          <label>Longitude: </label>
          {/* TODO: Add validation for longitude -180 to 180 */}
          <Field
            name="longitude"
            type="text"
            placeholder="-77.123"
            autoComplete="off"
          />
          <br />
          <label>Add Demographic data?</label>
          <Field type="checkbox" name="addDemographicData" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

const createProperties = (values) => {
  const properties = {
    name: values.name,
    streetAddress: values.streetAddress,
    latitude: values.latitude,
    longitude: values.longitude,
  };
  const addDemographicData = values.addDemographicData;
  axios
    .post(`https://localhost:7070/api/properties`, properties, {
      params: { addDemographicData },
    })
    .then(
      (response) => {
        console.log(response);
        alert(
          `Created successfully!! \r\n ${JSON.stringify(
            response.data,
            null,
            2
          )}`
        );
      },
      (error) => {
        console.log(error);
      }
    );
};

export default PropertiesForm;
