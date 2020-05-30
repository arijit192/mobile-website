import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.font} style={{ color: "white" }}>
        <p>
          Made with
          <span>
            <img
              src="./assets/svg/heart.svg"
              className={styles.heartIcon}
            ></img>
          </span>
          by me
        </p>
      </div>
    );
  }
}

export default Footer;
