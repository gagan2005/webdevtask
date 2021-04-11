// @flow
import React from 'react'
import logo from './assets/logo.png'
const links = [
    "https://www.google.com", "https://www.yahoo.com", "https://www.facebook.com"
];
const linktexts = ["About", "Blog", "Career"];
export default function Nav(props) {
    let linkcomps = [];
    for (let i = 0; i < 4; i++) {
        linkcomps.push(<Link key={i} text={linktexts[i]} link={links[i]} />);
    }
    return (

        <div className="navv">
            <div className="logo">
                <img src={logo}>

                </img>
            </div>
            <div className="links">
                {linkcomps}
                <a className="link Contact" onClick={props.action}>Contact</a>
            </div>
        </div>


    );

}

function Link(props) {

    return (

        <a className="link" href={props.link}>{props.text}</a>);
}