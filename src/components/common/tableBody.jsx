import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  createId = column => {
    return column.path !== "name" && column.path !== "country.name"
      ? "columnAlignCenter"
      : null;
  };

  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td id={this.createId(column)} key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
export default TableBody;