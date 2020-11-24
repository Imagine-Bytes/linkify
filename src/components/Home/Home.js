import React, { useState } from 'react';
import '../App.css';
import Header from '../Header/Header';
import { HomeStyled } from './Home.styled'



function Home() {
    const [link, setLink] = useState('')
    return (
        <div className="Home" >
            <Header />
            <HomeStyled>
                <div id="intro">
                    <h1>Linkify.io</h1>
                    <h3>An extremely fast URL shortner</h3>

                </div>

                <div className="form">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Enter URL"
                        value={link}
                        onChange={(e) => {
                            setLink(e.target.value)
                        }} />
                    <button
                        className="btn btn-lg btn-primary pull-xs-right"
                        type="submit">
                        Linkify it!
                  </button>
                </div>
            </HomeStyled>
        </div>
    );
}


export default Home;
