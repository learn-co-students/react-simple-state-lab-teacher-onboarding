import React, { Component } from 'react';
import Cell from './Cell.js';
export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell key={val} color={val} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
const defaultArray = new Array(10).fill(new Array(10).fill("#F00"))
Matrix.defaultProps = {
  values: defaultArray
}
