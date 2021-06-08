import React from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import CardBody from "./Components/CardBody";
import CardMedia from "./Components/CardMedia";

class App extends React.Component {
  render() {
    return (
      <Card>
        <CardMedia />
        <CardBody>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            aut sapiente facere omnis! Corrupti et placeat illum neque commodi
            obcaecati sit voluptatum, quod, est recusandae ab quas hic unde!
            Perferendis?
          </p>
        </CardBody>
        <Button>Learn More</Button>
      </Card>
    );
  }
}

export default App;
