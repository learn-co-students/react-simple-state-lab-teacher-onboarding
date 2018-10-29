import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  static defaultProps = {
    values: [
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO'],
    ['#FOO', '#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO','#FOO']
    ]
  }

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
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

