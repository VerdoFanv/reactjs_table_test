import React from "react";

export default class TableHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
    } = this.props;
    
    const {
      location
    } = data;

    return (
      <tr>
        {
          location.map((locationData, index) => <td key={index}>{locationData.name}</td>)
        }
        <td>Category</td>
        <td>Product</td>
        <td>Total Stock</td>
        <td>Percent %</td>
        <td>Total Order</td>
      </tr>
    )
  }
}