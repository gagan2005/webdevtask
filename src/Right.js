// @flow
import React, { useState } from 'react'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import fb from './assets/fb.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'
const images = [img1, img2];
const siconssrc = [fb, linkedin, twitter];
function Right() {
   
    const [cur, setCur] = useState(0);
    let socialicons = [];
    let i = 0;
    siconssrc.forEach(x => {
        socialicons.push(<Socialicon src={x} key={i} />);
        i++;
    });

    function rightSlide() {
        if (cur == 0) {
            console.log("sliding right");
            setCur(1);
        }
    }

    function leftSlide() {
        if (cur == 1) {
            setCur(0);
        }
    }


    return (
        <div className="col col-md-6 col-xs-12 right" style={{ backgroundImage: `url(${images[cur]})` }}>
            <div className={"rightslider " + ((cur == 0) ? "active" : "")}
                onClick={() => rightSlide()}>

            </div>
            <div className={"leftslider " + ((cur == 1) ? "active" : "")}
                onClick={() => leftSlide()}>
            </div>
            <div className="text">
                <h5>Type Text</h5>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                <div className="dot" style={{ opacity: (cur == 0) ? 1 : 0.3 }} onClick={() => leftSlide()} />
                <div className="dot" style={{ opacity: (cur == 1) ? 1 : 0.3 }} onClick={() => rightSlide()} />
            </div>
            <div className="sicons">
                {socialicons}
            </div>
        </div>
    );

}

function Socialicon(props) {
    return (
        <div className="sicon">
            <img src={props.src} />
        </div>
    )
}

export default Right;