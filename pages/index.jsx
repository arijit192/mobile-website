import React from "react";
import Head from "next/head";

import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";
import Footer from "../components/footer/Footer";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "hello",
    };

    this.handleClickMenu = this.handleClickMenu.bind(this);
  }
  handleClickMenu = () => {
    console.log("clicked");
  };
  render() {
    return (
      <div>
        <Head>
          <title>Sawadee Ka!</title>
          <meta lang="en-US" />
        </Head>
        <HamburgerMenu handleClickMenu={this.handleClickMenu} />
        <Footer />
      </div>
    );
  }
}

export default Index;
