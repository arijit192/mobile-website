import React from "react";

import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";
import Footer from "../components/footer/Footer";

class Index extends React.Component {
  render() {
    return (
      <div>
        <HamburgerMenu />
        <Footer />
      </div>
    );
  }
}

export default Index;
