import React, { Component } from 'react';

export class Customer extends Component {
    static displayName = Customer.name;

  constructor(props) {
    super(props);
    this.state = { customers: [], loading: true };
  }

  componentDidMount() {
    this.populateCustomerData();
  }

    static renderCustomersTable(customers) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>customerId</th>
            <th>companyName</th>
            <th>contactName</th>
            <th>contactTitle</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(cusomter =>
            <tr key={cusomter.CustomerId}>
              <td>{cusomter.CustomerId}</td>
              <td>{cusomter.companyName}</td>
              <td>{cusomter.contactName}</td>
              <td>{cusomter.contactTitle}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

    render() {
     // If the contents are loading then Display Loading... Else Fetch the Data and Display the customers
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : Customer.renderCustomersTable(this.state.customers);

    return (
      <div>
        <h1 id="tabelLabel">Customer Information</h1>
        {contents}
      </div>
    );
  }

  // const response = await fetch('https://localhost:7260/api/Customers');
  //  const response = await fetch('192.168.200.117:4440/api/customers');
    async populateCustomerData() {
        const response = await fetch('192.168.200.117:3440/api/customers');
      const data = await response.json();
      this.setState({ customers: data, loading: false });
  }
}
