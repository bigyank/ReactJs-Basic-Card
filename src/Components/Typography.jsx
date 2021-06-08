import React from "react";
import style from "./Typography.module.css";

export default class Typography extends React.Component {
  render() {
    const { component } = this.props;
    return <p className={style[component]}>{this.props.children}</p>;
  }
}
