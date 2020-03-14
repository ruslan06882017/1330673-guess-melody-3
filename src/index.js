/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";

function Car(props) {
  const classes = [`card`];

  if (props.car.marked) {
    classes.push(`marked`);
  }

  return (
    <div className="list">
      <div className={classes.join(` `)} onClick={props.onMark}>
        <div className="card-img">
          <img
            src={props.car.img}
            alt={props.car.name} />
        </div>
        <h3>{props.car.name}</h3>
        <p>{props.car.price} $</p>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {marked: false, name: `BMW M2 Coupe`, price: 20000, img: `https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg`},
        {marked: false, name: `Audi TT`, price: 15000, img: `https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598`},
        {marked: false, name: `Rolls Royce`, price: 50000, img: `http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg`},
        {marked: false, name: `Mercedes amg coupe`, price: 18000, img: `https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2`}
      ]
    };
  }

  handleMarked(name) {
    const cars = this.state.cars.concat();
    const car = cars.find((c) => c.name === name);
    car.marked = !car.marked;
    this.setState({cars});
  }

  renderCars() {
    return this.state.cars.map((car) => {
      return (
        <Car car={car}
          key={car.name}
          onMark = {this.handleMarked.bind(this, car.name)}
        />
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div className="list">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(`#root`));
