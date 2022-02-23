import React from "react";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      data,
    } = this.props;
    
    const {
      location, proformaItem,
    } = data;

    return (
      <>
        {
          proformaItem.map((item) => {
            const parseStock = JSON.parse(item.product_stock);
            if (parseStock.length < location.length) {
              let temp = {};
              temp[parseStock.length + 1] = 0;
              parseStock.push(temp);
            }

            parseStock.sort((a,b) => Object.keys(a)[0] - Object.keys(b)[0]);
            const parseItem = JSON.parse(item.items);

            let totalStock = 0;
            let totalQty = 0;
            let percentQtyOfStock = 0;
            let count = 1;
            let tempCount = 1;

            parseStock.forEach((stock) => {
              totalStock += Object.values(stock)[0];
            });

            parseItem.forEach((key) => {
              percentQtyOfStock = (key['qty'] / totalStock * 100).toFixed(2);
            })

            parseItem.forEach((key) => {
              totalQty += key['qty'];
            })

            return (
              <tr key={item.product_id}>
                {
                  parseStock.map((stock, index) => {
                    if (stock[count] !== undefined) {
                      tempCount = count;
                      count += 2;
                      return <td key={stock[tempCount]}>{stock[tempCount]}</td>;
                    } else {
                      return <td key={index}>0</td>;
                    }
                  })
                }
                <td>{item.categoryDescription}</td>
                <td>{item.productDescription}</td>
                <td>{totalStock}</td>
                <td>{`${percentQtyOfStock} %`}</td>
                <td>{totalQty}</td>
              </tr>
            )
          })
        }
      </>
    )
  }
}
