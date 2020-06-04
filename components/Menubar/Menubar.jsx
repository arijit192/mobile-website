import React, { Component } from "react";
import Link from "next/link";
import Styles from "../Menubar/Menubar.module.css";

export default class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.triggerCloseMenu = this.triggerCloseMenu.bind(this);
  }
  firstCircle = React.createRef();
  secondCircle = React.createRef();
  menuList = React.createRef();
  closeBtn = React.createRef();

  componentDidUpdate(prevProps) {
    if (prevProps.triggeredMenu !== this.props.triggeredMenu) {
      if (this.props.triggeredMenu === true) {
        this.firstCircle.current.classList.remove(Styles.first_circle_close);
        this.firstCircle.current.classList.add(Styles.first_circle_open);
        this.secondCircle.current.classList.remove(Styles.second_circle_close);
        this.secondCircle.current.classList.add(Styles.second_circle_open);
        this.menuList.current.classList.remove(Styles.menuList_close);
        this.menuList.current.classList.add(Styles.menuList_open);
        this.closeBtn.current.classList.remove(Styles.closeBtn_close);
        this.closeBtn.current.classList.add(Styles.closeBtn_open);
        this.closeBtn.current.classList.remove(Styles.closeBtn);
      }
    }
  }

  triggerCloseMenu = () => {
    this.firstCircle.current.classList.remove(Styles.first_circle_open);
    this.firstCircle.current.classList.add(Styles.first_circle_close);
    this.secondCircle.current.classList.remove(Styles.second_circle_open);
    this.secondCircle.current.classList.add(Styles.second_circle_close);
    this.menuList.current.classList.remove(Styles.menuList_open);
    this.menuList.current.classList.add(Styles.menuList_close);
    this.closeBtn.current.classList.remove(Styles.closeBtn_open);
    this.closeBtn.current.classList.add(Styles.closeBtn_close);
    this.props.closeMenu();
  };
  render() {
    return (
      <div>
        <div>
          <div ref={this.firstCircle}></div>
          <div ref={this.secondCircle}></div>
          <div ref={this.menuList} className={Styles.menuList}>
            <Link href="/about">
              <a className={Styles.menuLinks}>About Me</a>
            </Link>
            <Link href="/contact">
              <a className={Styles.menuLinks}>Contact</a>
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
          <img
            ref={this.closeBtn}
            className={Styles.closeBtn}
            src="close.svg"
            height="55px"
            width="55px"
            onClick={this.triggerCloseMenu}
          />
        </div>
      </div>
    );
  }
}
