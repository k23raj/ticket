import React from 'react';
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap'


class CustomerList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        axios.get('/customers')
            .then(response => {
                const customers = response.data
                this.setState({ customers })
            })
            .catch(err => {
                this.props.history.push('/users/login')
            })
    }

    render() {
        return (
            <div className='page-content'>
                <h3>Customers</h3>
                <Button color="primary" style={{marginBottom: '1rem'}} >
                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/customers/new'>
                      Add Customer
                    </Link>
                </Button>
                
                {this.state.customers.length !== 0 ?
                    <Table striped bordered style={{ width: '1000px' }}>
                        <thead style={{ fontWeight: 'bold' }}>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map((customer) => {

                                    return (
                                        <tr key={customer._id}>
                                            <td><Link to={`/customers/show/${customer._id}`}>{customer.name}</Link></td>
                                            <td>{customer.email}</td>
                                            <td>{customer.mobile}</td>
                                            <td><Link to={`/customers/show/${customer._id}`}>show</Link></td>
                                        </tr>
                                    )

                                })}

                        </tbody>
                    </Table> : <p>...Loading</p>}
            </div>
        )
    }
}

export default CustomerList