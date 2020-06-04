import React, { Component } from "react";
import Link from "next/link";

export default class contact extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            fontFamily: "Satisfy",
            color: "white",
            fontSize: "larger",
            textAlign: "center",
            padding: "10%",
          }}
        >
          Working on it too. Have some patients..
        </p>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <button
            style={{
              textAlign: "center",
              backgroundColor: "#eb00ff",
              color: "white",
              border: "0px solid transparent",
            }}
          >
            <Link href="/">
              <a style={{ textDecoration: "none" }}>Go to home</a>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
