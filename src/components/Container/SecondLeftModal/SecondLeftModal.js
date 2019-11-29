import React, { Component } from 'react';
import classes from './SecondLeftModal.css';
import Radium from 'radium';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';


//noir
import { ReactComponent as Transport} from '../../../assets/noir/arcep_picto_noir_transports.svg';
import { ReactComponent as Maison} from '../../../assets/noir/arcep_picto_noir_maison.svg';
import { ReactComponent as Concert} from '../../../assets/noir/arcep_picto_noir_events_concerts.svg';
import { ReactComponent as SmartCity} from '../../../assets/noir/arcep_picto_noir_smart_cities.svg';

class secondLeftModal extends Component {
  state = {
    un: false,
    deux: false,
    trois: false,
    quatre: false,
}

  openHoverUnHandler = () => {
      this.setState({un: true})  
  }
  openHoverDeuxHandler = () => {
      this.setState({deux: true})  
  }
  openHoverTroisHandler = () => {
      this.setState({trois: true})  
  }
  openHoverQuatreHandler = () => {
    this.setState({quatre: true})
  }

  closeHoverUnHandler = () => {
    this.setState({un: false})
  }
  closeHoverDeuxHandler = () => {
    this.setState({deux: false})
  }
  closeHoverTroisHandler = () => {
    this.setState({trois: false})
  }
  closeHoverQuatreHandler = () => {
    this.setState({quatre: false})
  }

  render () {
    this.openHoverUnHandler = this.openHoverUnHandler.bind(this)
    this.openHoverDeuxHandler = this.openHoverDeuxHandler.bind(this)
    this.openHoverTroisHandler = this.openHoverTroisHandler.bind(this)
    this.openHoverQuatreHandler = this.openHoverQuatreHandler.bind(this)
    this.closeHoverUnHandler = this.closeHoverUnHandler.bind(this)
    this.closeHoverDeuxHandler = this.closeHoverDeuxHandler.bind(this)
    this.closeHoverTroisHandler = this.closeHoverTroisHandler.bind(this)
    this.closeHoverQuatreHandler = this.closeHoverQuatreHandler.bind(this)

    return (        
      <div className={classes.SecondLeftModal}>
        <div className={classes.Button}>
          <Icon size={30} icon={x} className={classes.Cross} onClick={this.props.close}/>
        </div>
        <div className={classes.Title}>
          <p>Les ondes qui vous entourent ?<br/> Venez <span> découvrir nos thématiques</span>.</p>
        </div>
        <div className={classes.Theme}>
          <div className={classes.rowSquare}>
            <div className={classes.square}  onClick={() => {this.props.closeUnderCategorie(); this.props.theme(1); this.props.closeSpectre();  this.props.closeCategorie(); this.props.close();}} onMouseOver={this.openHoverUnHandler} onMouseOut={this.closeHoverUnHandler}>
              <Maison className={classes.logoUnderCat}/>
              <p >À la maison</p>
            </div>
            <div className={classes.square}  onClick={() => {this.props.closeUnderCategorie(); this.props.theme(2); this.props.closeSpectre();  this.props.closeCategorie(); this.props.close();}} onMouseOver={this.openHoverDeuxHandler} onMouseOut={this.closeHoverDeuxHandler}>
              <Transport  className={classes.logoUnderCat}/>
              <p>Transports en commun</p>
            </div>
          </div>
          <div className={classes.rowSquare}>
            <div className={classes.square}  onClick={() => {this.props.closeUnderCategorie(); this.props.theme(3); this.props.closeSpectre();  this.props.closeCategorie(); this.props.close();}} onMouseOver={this.openHoverTroisHandler} onMouseOut={this.closeHoverTroisHandler}>
              <Concert  className={classes.logoUnderCat}/>
              <p>Concerts et évènements sportifs</p>
            </div>
            <div className={classes.square}  onClick={() => {this.props.closeUnderCategorie(); this.props.theme(4); this.props.closeSpectre();  this.props.closeCategorie(); this.props.close();}} onMouseOver={this.openHoverQuatreHandler} onMouseOut={this.closeHoverQuatreHandler}>
              <SmartCity  className={classes.logoUnderCat}/>
              <p>Internet des objets / Smart cities</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(secondLeftModal);