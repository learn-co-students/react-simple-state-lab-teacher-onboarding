import React, { Component } from 'react';

export default class Matrix extends Component {
  constructor(props) {
    super();
    this.state = { color: props.value };
  }

  handleClick = () => {
    console.log("ADFAS")
    this.setState({color: '#333'});
  }

  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{ backgroundColor: this.state.color }}></div>
    );
  }
}
