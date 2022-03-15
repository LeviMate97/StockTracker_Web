import React, { Component } from "react";
import { Table } from "react-bootstrap"


export class Dividends extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Dividends')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        const { deps } = this.state;
        return (
            <div>
                <Table className="mt-2" striped bordered size="sm">
                    <thead>
                        <tr>
                            <th>Ticket</th>
                            <th>Amount</th>
                            <th>Ex-dividend date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr>
                                <td>{dep.Ticket}</td>
                                <td>{dep.Amount}</td>
                                <td>{dep.ExDividendDate.substring(0, 10)}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}