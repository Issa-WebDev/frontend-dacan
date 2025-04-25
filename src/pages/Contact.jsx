import React from "react";
import ContactHeader from "../components/ContactHeader";
import ContactData from "../components/ContactData";
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main className="mt-20">
      <ContactHeader />
      <ContactData />
      <ContactForm />
      <Location />
    </main>
  );
};

export default Contact;
