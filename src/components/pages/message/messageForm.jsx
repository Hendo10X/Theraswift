import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import Button from "../../common/button";

const MessageForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.message);
        resetForm();
      }}
    >
      <Form
        className="grid items-center bg-green-500 p-5 px-20 gap-5 shadow-xl "
        style={{ gridTemplateColumns: "4fr 1fr" }}
      >
        <Field
          name="message"
          placeholder="Type your message here"
          className="w-full rounded-md py-2 px-5 outline-none border border-transparent focus:border-green-600"
        />

        <Button size="lg" variant="filled" colorScheme="primary">
          Send
        </Button>
      </Form>
    </Formik>
  );
};

export default MessageForm;

MessageForm.propTypes = {
  onSubmit: PropTypes.func,
};
