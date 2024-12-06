import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
export interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
}
const API_URL: string | undefined = process.env.customKey;
export const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
  budget: Yup.string(),
});

export const initialValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
  budget: "",
};
export const handleSubmit = async (values: FormValues) => {
  try {
    const response = await axios.post(`${API_URL}/send-email`, {
      email: values.email,
      fullName: values.fullName,
      subject: values.subject,
      message: values.message,
      budget: values.budget,
    });

    if (response.status === 200) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email, please try again.");
    }
  } catch (error) {
    console.error("There was an error sending the email:", error);
    alert("An error occurred while sending the email. Please try again later.");
  }
};
const ContactForm = () => {
  return (
    <div className="bg-[#333333] text-white lg:ml-[320px] mx-3 lg:mx-0 rounded-2xl flex flex-col lg:px-10 px-3 mb-10 md:py-20 py-5  h-fit">
      <h1 className="md:text-3xl text-2xl font-bold mb-4 ">Let's Chat!</h1>
      <p className="mb-8 text-sm md:text-base">
        We will ask the right questions, discuss possibilities, and make an
        action plan.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Full Name */}
            <div>
              <label className="block  mb-2" htmlFor="fullName">
                Full Name <span className="text-customRed font-bold">*</span>
              </label>
              <Field
                name="fullName"
                type="text"
                className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block mb-2" htmlFor="email">
                Email Address
                <span className="text-customRed font-bold">*</span>
              </label>
              <Field
                name="email"
                type="email"
                className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                placeholder="Your email address"
              />
            </div>

            <div>
              <label className="block mb-2" htmlFor="subject">
                Subject <span className="text-customRed font-bold">*</span>
              </label>
              <Field
                name="subject"
                type="text"
                className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block  mb-2" htmlFor="budget">
                Your Budget <span>(Optional)</span>
              </label>
              <Field
                name="budget"
                type="text"
                className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                placeholder="A range of budget for project"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="block  mb-2" htmlFor="message">
                Message
              </label>
              <Field
                name="message"
                as="textarea"
                rows="4"
                className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                placeholder="Write your message here..."
              />
            </div>

            <div className="lg:col-span-2 text-right">
              <button
                type="submit"
                className="py-3 px-6 bg-red-600 rounded-lg  font-bold hover:bg-red-500 transition"
              >
                Send Your Message →
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
