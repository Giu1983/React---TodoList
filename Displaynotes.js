import React from 'react'; 

export default class Displaynotes extends React.Component {
    render(){

        const { notes }: this.props; 
        return(
            <div>
            <h1>{Note.title}</h1>
            <div>{Note.body}</div>
            </div>
        )
    }
}