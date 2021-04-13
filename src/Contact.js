// @flow
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react'
import Right from './Right';

// import catndog from './assets/Cat-N-Dog-Logo copy.png'
const submitquery = gql`
mutation sendMutation(
    $message: String!
    $email: String!
  ){
    sendMessage( email :$email , message :$message){
        email
    }
}`;

function Contact(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitform] = useMutation(submitquery, {
        variables: {
            name: name,
            email: email,
            message: message
        }
        ,
        onError:(error)=>{
            setError(error.message);
             console.log(Object.keys(error));

            
        },
        onCompleted:(error)=>{
            setError("Succesful");
        }
    });
    const [error , setError] = useState("");

    
    if (props.disp == true)
        return (
            <div style={{ height: '100vh', width: '100vw', position: 'absolute' }} className="darken">
                <div className="contactus">
                    <Cancelicon toggle={props.toggle} />
                    <h3 style={{ color: '#495057', fontWeight: 'bold' }}>Contact</h3>
                    <span style={{ color: "#ADB5BD", fontSize: "12px" }}>
                        Lorem Ipsum is simply dummy text of the printing
                        </span>
                    <br></br><br></br>
                    <Inpele label="Name" text="Enter Your name" var={name} funn={setName} />


                    <Inpele label="Email" text="Enter Your email" var={email} funn={setEmail} />
                    <Inpele label="Message" text="Your message" var={message} funn={setMessage} />

                    <button className="submit" onClick={() => submitform()}>Submit</button>
                    <span className="error">{error}</span>
                </div>
            </div>
        )
    else return <></>

}

function Inpele(props) {
    return (
        <div className="inpele">
            <div>{props.label}</div>
            <input placeholder={props.text} onChange={
                (e) => {
                    props.funn(e.target.value)
                }
            }></input>
        </div>);
}

function Cancelicon(props) {
    return (
        <div className="cancelicon" style={{ float: "right" }} onClick={props.toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
        </div>
    )
}


export default Contact;