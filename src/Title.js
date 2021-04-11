// @flow
import React from 'react'
import play from './assets/google-play-badge.png'
import Apple from './assets/Apple.svg'
import { useQuery, gql } from '@apollo/client';

const dataQuery = gql`
query{
    getData
}
`;


// import catndog from './assets/Cat-N-Dog-Logo copy.png'
let data = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
function Title() {

    const { data } = useQuery(dataQuery);
    console.log(data);
    return (
        <div className="title">
            <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>
            <p>
                {data && data.getData}
            </p>
            <div className="icons">
                <GetIcon imgsrc={Apple} />
                <GetIcon imgsrc={play} />
            </div>
        </div>
    )
}

class GetIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="geticon">
                <img src={this.props.imgsrc}></img>
            </div>
        )
    }
}

export default Title;