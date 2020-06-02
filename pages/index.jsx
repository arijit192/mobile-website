import React from "react";
import Head from "next/head";

import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";
import Footer from "../components/footer/Footer";
import Menubar from "../components/Menubar/Menubar";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      triggeredMenu: false,
    };
  }
  handleTriggerMenu = () => {
    this.setState({ triggeredMenu: true });
  };
  handleCloseMenu = () => {
    this.setState({ triggeredMenu: false });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Sawadee Ka!</title>
          <meta lang="en-US" />
        </Head>
        <HamburgerMenu handleTriggerMenu={this.handleTriggerMenu} />
        <Menubar
          triggeredMenu={this.state.triggeredMenu}
          closeMenu={this.handleCloseMenu}
        />
        <Footer />
      </div>
    );
  }
}

export default Index;
