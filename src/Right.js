// @flow
import React from 'react'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import fb from './assets/fb.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'
const images=[img1,img2];
const siconssrc=[fb,linkedin,twitter];
export default class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cur: 0 };
        this.socialicons=[];
        let i=0;
        siconssrc.forEach(x=>{
            this.socialicons.push(<Socialicon src={x} key={i}/>);
            i++;
        });
        
    }

    rightSlide(){
        if(this.state.cur==0){
            console.log("sliding right");
        this.setState({cur:1});
        }
    }

    leftSlide(){
        if(this.state.cur==1){
        this.setState({cur:0});
        }
    }

    render() {
        return (
            <div className="col col-md-6 col-xs-12 right" style={{backgroundImage:`url(${images[this.state.cur]})`}}>
                 <div className={"rightslider "+((this.state.cur==0)?"active":"")} 
                 onClick={()=>this.rightSlide()}>
                      
                </div> 
                <div className={"leftslider "+((this.state.cur==1)?"active":"")}
                onClick={()=>this.leftSlide()}>
                </div>
                <div className="text">
                    <h5>Type Text</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    <div className="dot" style={{opacity:(this.state.cur==0)?1:0.3}} onClick={()=>this.leftSlide()} />
                    <div className="dot" style={{opacity:(this.state.cur==1)?1:0.3}} onClick={()=>this.rightSlide()} />
                </div>
                <div className="sicons">
            {this.socialicons}
            </div>
            </div>
        )
    }
}

function Socialicon(props)
{
    return(
        <div className="sicon">
            <img src={props.src}/>
        </div>
    )
}