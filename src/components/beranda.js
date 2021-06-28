import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Beranda extends Component {
    render() {
        return(
                <Grid className="beranda-grid">
                    <div className="banner-beranda">
                        <h3>Saatnya memperbanyak ilmu dan peduli dengan lingkungan sekitar.</h3>
                        <h5>Website ini membantu untuk menambah wawasan dengan mengenai berbagai macam berita Indonesia dan Update Covid-19 di Indonesia.</h5>
                        <a href="http://localhost:3000/berita"><h5>Next</h5>
                        </a>
                    </div>
                </Grid>
        )
    }
}

export default Beranda;
