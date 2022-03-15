import React, { Component } from "react";
import { ButtonToolbar, Table } from "react-bootstrap"

import { Button} from "react-bootstrap"
import { AddDepModal } from './AddDepModal';


export class PurchaseHistories extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }

    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'PurchaseHistories')
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
        let addModalClose = () => this.setState({ addModalShow: false }, this.refreshList)
        return (
            <div>
                <Table className="mt-2" striped bordered size="sm">
                    <thead>
                        <tr>
                            <th>Ticket</th>
                            <th>Quantity</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr>
                                <td>{dep.Ticket}</td>
                                <td>{dep.Quantity}</td>
                                <td>{dep.Date.substring(0, 10)}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}