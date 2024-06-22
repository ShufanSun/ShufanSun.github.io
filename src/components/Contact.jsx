import React from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
      {/* Add your contact information here */}
      <p>Contact Info:</p>
      <p>Email: <a href="mailto:ssun329@wisc.edu" style={styles.emailLink}>ssun329@wisc.edu</a></p>
        </div>
  );
};

const styles = {
  emailLink: {
    color: 'yellow',
    textDecoration: 'underline'
  }
};

export default SectionWrapper(Contact, "contact");
