import React from 'react';
import './HolaMundo.css';

class HolaMundo extends React.Component {
    render() {
        return (
            <div>
                <h2 >Hola {this.props.nombre} </h2>
                <p> {this.props.edad}  </p>
            </div>
        )
    }
}

export default HolaMundo;