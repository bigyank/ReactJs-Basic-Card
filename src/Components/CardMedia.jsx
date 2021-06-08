import React from "react";
import style from "./CardMedia.module.css";

export default class CardMedia extends React.Component {
  render() {
    const { source } = this.props;
    return <img src={source} className={style.cardMedia} />;
  }
}
