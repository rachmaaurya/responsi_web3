import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './topic.css';

class Covid extends Component {
    constructor(){
        super();
        this.state = { 
            confirmed: 0,
            recovered: 0,
            deaths: 0
        }
    }

    
    componentWillMount(){
        axios
        .get("https://covid19.mathdro.id/api/countries/id")
        .then((response) => {
            const data = response.data;
            this.setState({ confirmed: data.confirmed.value });
            this.setState({ recovered: data.recovered.value });
            this.setState({ deaths: data.deaths.value });
            console.log(response);
            console.log(data);
        });
    }

    render(){
        return(
            <div>
                <h1 className="judul">Update Kasus COVID-19 Di Indonesia</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th style={{ width: 20 }}>Jumlah Kasus</th>
                            <th style={{ width: 20 }}>Jumlah Sembuh</th>
                            <th style={{ width: 20 }}>Jumlah Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <td>{this.state.confirmed}</td>
                                    <td>{this.state.recovered}</td>
                                    <td>{this.state.deaths}</td>
                                </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Covid;
