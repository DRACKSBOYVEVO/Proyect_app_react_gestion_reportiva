import React, { Component } from 'react';

// Material
import Icon from 'material-ui/Icon';

// Estilos
import './Equipo.css';


class Equipo extends Component {

  state = {
    fav: { value: 'star1' }
  }

  render() {
    return (
      <div>
        <img className={"team-logo"} src={this.props.logo} alt={this.props.nombre} />
        <Icon className={this.state.fav.value} >star_rate</Icon>
      </div>
    );
  }
}

export default Equipo;
