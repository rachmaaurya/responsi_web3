import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class TentangSaya extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn.idntimes.com/content-images/community/2021/05/screenshot-2021-05-19-yoona-lim-on-instagram-jigott-bc6625f7a13a3f72bf970bdf855ac5e0-de1afb6bf79732c15139465e0978d628_200x200.png"
                            alt="profile"
                            className="profile-img"
                        />
                        <div className="banner-text">
                            <h3>Halo!</h3>
                            <h5>Nama saya Rachma Aurya Nurhaliza. Lahir di Nganjuk, Jawa Timur tanggal 15 Maret 2001. Saat ini, saya sedang menempuh pendidikan semester 4 di Universitas Gadjah Mada jurusan D4 Teknologi Rekayasa Perangkat Lunak.</h5>
                            <hr />
                            <p>Hubungi saya di rachmaaurya1215@gmail.com atau di bawah ini</p>
                            <div className="social-links">
                                <a  href="https://www.facebook.com/rachmaaurya.nurhaliza" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.twitter.com/rachmaaurya" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.github.com/rachmaaurya" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default TentangSaya;
