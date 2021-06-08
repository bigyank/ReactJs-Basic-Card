import React from "react";
import style from "./CardBody.module.css";

export default class CardBody extends React.Component {
  render() {
    return <div className={style.cardBody}>{this.props.children}</div>;
  }
}
