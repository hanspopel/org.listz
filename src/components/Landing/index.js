import React from 'react';
import data from './123.json';
import data1 from './1234.json';
import data2 from './12345.json';
import { CsvToHtmlTable } from 'react-csv-to-table';
import Table from'../Table_alpha/Table_alpha';

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data2: data2,
        data1: data1
        };
  }

  render() {

    // var products = this.state.data.products





    return (

      <div class="d-flex justify-content-center listz-page" >


    <Table/>


  <div class="w-75 page-div" >

      

      </div>
      </div>
    );
  }


}

