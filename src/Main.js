// @flow
import React from 'react'
import Right from './Right'
import Left from './Left'
import Nav from './Nav'
import Contact from './Contact';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disp_popup: false
        }
        this.toggle_popup = this.toggle_popup.bind(this);

    }

    toggle_popup() {
        this.setState((prevstate) => {
            return {
                disp_popup:!(prevstate.disp_popup)

            }

        })
    }
    render() {
        let darkening = "";
        if (this.state.disp_popup == true) darkening = "darken";
        return (<>
            <Contact disp={this.state.disp_popup} toggle={this.toggle_popup} />
            <div >
                <Nav action={this.toggle_popup} />
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
}