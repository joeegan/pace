import React, { Component } from 'react';

export default class Switcher extends Component {

  render() {
    return (
      <tr>
        <td>
          <select onChange={this.props.handleChange}>
            <option value="SAME">same</option>
            <option value="PROJECTED">projected</option>
          </select>
        </td>
        <td>Method</td>
      </tr>
    );
  }

}
