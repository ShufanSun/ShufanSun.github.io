import React from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className="relative z-0 text-center">
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
