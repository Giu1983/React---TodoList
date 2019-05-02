import React from 'react'; 

export default class Notelist extends from React.Component  {
    renderNotes(){
        const notes: object.data{this.props.notes}; 

        return notes.map(0) =><div><h2>{n.title}</h2></div>
    }

    render() {
        return (
         <div>{this.renderNotes}</div>
        )
    
}
}