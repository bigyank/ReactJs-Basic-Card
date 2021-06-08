import React from "react";
import style from "./CardMedia.module.css";

export default class CardMedia extends React.Component {
  constructor() {
    super();
    this.imgUrl = "https://source.unsplash.com/random/560x600";
  }
  render() {
    return <img src={this.imgUrl} className={style.cardMedia} />;
  }
}
