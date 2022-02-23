import React, { useState } from 'react';
import TableHead from './TableHead';
import TableData from './TableData';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const datas = require('../data.json');
    const toStringify = JSON.stringify(datas);
    console.log();

    return (
      <>
        <div className={"container"}>
          <div className={"row"}>
            <table className={"table"}>
              <thead className={"table-light"}>
                <TableHead data={JSON.parse(toStringify)}/>
              </thead>
              <tbody>
                <TableData data={JSON.parse(toStringify)}/>
              </tbody>
            </table>
          </div>  
        </div>    
      </>
    );
  }
}