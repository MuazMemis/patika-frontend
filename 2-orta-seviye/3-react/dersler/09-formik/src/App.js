import { Formik, Field, Form } from "formik";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <label htmlFor="firstName" style={{ marginRight: "10px" }}>
            First Name
          </label>
          <Field name="firstName" placeholder="Jane" />

          <br />
          <br />

          <label htmlFor="lastName" style={{ marginRight: "10px" }}>
            Last Name
          </label>
          <Field name="lastName" placeholder="Doe" />

          <br />
          <br />

          <label htmlFor="email" style={{ marginRight: "10px" }}>
            Email
          </label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <br />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
