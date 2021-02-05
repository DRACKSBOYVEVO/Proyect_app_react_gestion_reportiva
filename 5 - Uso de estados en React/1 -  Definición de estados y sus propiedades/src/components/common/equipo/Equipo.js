import React, { Component } from 'react';

// Material
import Icon from 'material-ui/Icon';

// Estilos
import './Equipo.css';


class Equipo extends Component {

  render() {
    return (
      <div>
        <img className={"team-logo"} src={this.props.logo} alt={this.props.nombre} />
        <Icon >star_rate</Icon>
      </div>
    );
  }
}

export default Equipo;
