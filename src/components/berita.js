import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './topic.css';

class Berita extends Component {
    constructor(){
        super();
        this.state = { berita: [] }
    }

    componentDidMount(){
        axios
        .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=5989679691f248bb9b63eaa88b5716d1")
        .then((response) => {
            const data = response.data;
            this.setState({ berita: data.articles});
            console.log(response);
        });
    }

    render(){
        return(
            <div>
                <h1 className="judul">Headline News</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th style={{ width: 20 }}>Author</th>
                            <th style={{ width: 20 }}>Title</th>
                            <th style={{ width: 20 }}>Description</th>
                            <th style={{ width: 20 }}>Image</th>
                            <th style={{ width: 20 }}>Published At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.berita.map((news, key)=> {
                            return(
                                <tr>
                                    <td>{news.source.name}</td>
                                    <td>{news.title}</td>
                                    <td>{news.description}</td>
                                    <td><img style={{ width: 100 }}key={news.id} src={news.urlToImage}></img></td>
                                    <td>{news.publishedAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Berita;
