import React from "react";
import style from "./Typography.module.css";

export default class Typography extends React.Component {
  render() {
    const { component, variant } = this.props;
    return (
      <p className={`${style[component]} ${style[variant]}`}>
        {this.props.children}
      </p>
    );
  }
}
