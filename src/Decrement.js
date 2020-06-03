import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.myNum, previous: "" };
  }

  handleDecrement = (state) => {
    if (state.number === 0) {
      return alert("Cannot be less than zero!");
    }
    this.setState({ number: state.number - 1, previous: state.number });
  };

  render() {
    return (
      <div>
        <h1>{"Input Number: "}{this.props.myNum}</h1>
        <p>{"Previous Number: "}{this.state.previous}</p>
        <button onClick={() => this.handleDecrement(this.state)}>
          Minus One
        </button>
        <p> {"Current Number: "}{this.state.number}{"  "}</p>
      </div>
    );
  }
}

Decrement.propTypes = {
  start: PropTypes.number.isRequired,
};

export default Decrement;