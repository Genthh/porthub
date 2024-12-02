import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Footer } from "./ProjectDetailsComponent";
import { Field, Form, Formik } from "formik";
import { handleSubmit, initialValues, validationSchema } from "./EmailForm";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col  justify-between lg:mb-20 ">
      <ContactHeader />
      <ContactForm />
      <div className="">
        <hr />
        <Footer />
        <hr />
      </div>
    </div>
  );
};

export default Contact;

const ContactHeader = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 160 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);
  return (
    <div>
      <h1
        ref={textRef}
        className="text-white  md:my-20 my-10 text-center md:text-8xl text-4xl font-semibold uppercase"
      >
        Get In Touch
      </h1>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex flex-wrap lg:my-20 my-10">
      <div className="md:w-1/2 gap-x-20 px-3 md:px-0 flex flex-col gap-y-4">
        <p className="uppercase text-white max-w-lg md:text-5xl font-semibold">
          Let's make your brand
          <span className="font-extralight ml-2">brilliant!</span>
        </p>
        <p className="text-customGrayColor max-w-lg">
          If you would like to work with us or just want to get in touch, we’d
          love to hear from you!
        </p>
        <div className="flex gap-x-10 mt-5">
          <p className="flex flex-col text-base max-w-xs text-white">
            Address
            <span className="text-sm mt-2 text-customGrayColor">
              Prishtina, Kosova
              <br />
              (Southeast Europe)
            </span>
          </p>
          <p className="flex flex-col text-base max-w-xs text-white">
            Email
            <span className="text-sm text-customGrayColor mt-2">
              lorikzek@gmail.com
            </span>
          </p>
        </div>
        <p className="text-2xl mt-5 font-semibold underline text-[#d0ff71]">
          +383-49-828-434
        </p>
        <ul className="flex gap-x-4 text-white mt-5">
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Behance</li>
        </ul>
      </div>
      <div className="text-white flex flex-col px-3 md:px-0 w-full md:w-1/2 mt-10 md:mt-0">
        <p className="mb-5">Send a message</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Full Name */}
              <div>
                <Field
                  name="fullName"
                  type="text"
                  className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                  placeholder="Your email address"
                />
              </div>

              <div>
                <Field
                  name="subject"
                  type="text"
                  className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                  placeholder="Subject"
                />
              </div>

              <div>
                <Field
                  name="budget"
                  type="text"
                  className="w-full border-b border-customColor bg-transparent p-2 focus:outline-none "
                  placeholder="A range of budget for project"
                />
              </div>

              <div className="lg:col-span-2">
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
    </div>
  );
};
