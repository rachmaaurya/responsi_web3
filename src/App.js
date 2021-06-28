import React, { Component } from 'react';
import './App.css';
import Utama from './components/utama';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Content } from 'react-mdl';

class App extends Component {
  render() {
    return(
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="R.A.N." scroll>
            <Navigation>
              <Link to="/beranda">Home</Link>
              <Link to="/berita">Articles</Link>
              <Link to="/covid">COVID-19</Link>
              <Link to="/tentangSaya">About Us</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
              <Utama />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
