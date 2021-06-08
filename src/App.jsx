import React from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import CardBody from "./Components/CardBody";
import CardMedia from "./Components/CardMedia";
import Typography from "./Components/Typography";

class App extends React.Component {
  render() {
    const imgSrc = "https://source.unsplash.com/random/500x500";

    return (
      <Card>
        <CardMedia source={imgSrc} />
        <CardBody>
          <Typography component="h2">Lorem Ipsum</Typography>
          <Typography component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            aut sapiente facere omnis! Corrupti et placeat illum neque commodi
            obcaecati sit voluptatum, quod, est recusandae ab quas hic unde!
            Perferendis?
          </Typography>
        </CardBody>
        <Button>Learn More</Button>
      </Card>
    );
  }
}

export default App;
