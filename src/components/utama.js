import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangSaya';
import Berita from './berita';
import Covid from './covid';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        <Route path="/berita" component={Berita} />
        <Route path="/covid" component={Covid} />
        <Route path="/tentangSaya" component={TentangSaya} />
    </Switch>
)

export default Utama;
