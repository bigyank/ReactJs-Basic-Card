import React from "react";
import style from "./Button.module.css";

export default class Button extends React.Component {
  render() {
    return <button className={style.btn}>{this.props.children}</button>;
  }
}
