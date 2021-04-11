// @flow
import React, { useState } from 'react'
import Right from './Right'
import Left from './Left'
import Nav from './Nav'
import Contact from './Contact';
function Main () {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         disp_popup: false
    //     }
    //     this.toggle_popup = this.toggle_popup.bind(this);

    // }

    function toggle_popup() {

        setDisp_popup(!disp_popup);
        // this.setState((prevstate) => {
        //     return {
        //         disp_popup:!(prevstate.disp_popup)

        //     }

        // })
    }
  
        let darkening = "";
        const [disp_popup , setDisp_popup] =useState(false);
        if (disp_popup == true) darkening = "darken";
        return (<>
            <Contact disp={disp_popup} toggle={()=>toggle_popup()} />
            <div >
                <Nav action={()=>toggle_popup()} />
                <div className="container-fluid main-container">
                    <div className="row">
                        <Left />
                        <Right />
                    </div>
                </div>
            </div>
        </>

        );
    }
export default Main;