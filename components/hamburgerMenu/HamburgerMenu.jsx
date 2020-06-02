import React from "react";
import styles from "./HamburgerMenu.module.css";

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.menu} onClick={this.props.handleTriggerMenu}>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
      </div>
    );
  }
}

export default HamburgerMenu;
