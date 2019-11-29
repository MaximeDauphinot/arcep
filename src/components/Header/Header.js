import React, { Component } from 'react';
import classes from './Header.css';
import LogoSpectre from './Logo/logo';
import Radium from 'radium';
import Modal from 'react-modal';
import SpectreTopBar from './SpectreTopBar/SpectreTopBar';
import RightMenu from './RightMenu/RightMenu';
import ModalTopBar from './ModalTopBar/ModalTopBar';

const modalStyle = { 
    overlay: {
      width: '100vw',
      height: '100vh',
      zIndex: '10',
    }, 
    content: {
      backgroundColor: 'rgb(221, 96, 92)',
      width: '100%',
      height: '100%',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '0',
      justifyContent: 'flex-end',
      border: '0px',
      borderRadius: '0px'
    }
}

class header extends Component {
  state = {
    modalIsOpen: false,
  }

  openModal () {
    this.setState({modalIsOpen: true});
    document.getElementById('pastilleLeft').style.visibility = 'hidden';
    document.getElementById('pastilleRight').style.visibility = 'hidden';
  }

  closeModal () {
    this.setState({modalIsOpen: false});
    document.getElementById('pastille').style.visibility = 'visible';
    document.getElementById('pastilleLeft').style.visibility = 'visible';
    document.getElementById('pastilleRight').style.visibility = 'visible';
  }

 

  render() {
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    if (this.state.modalIsOpen)
      document.getElementById('pastille').style.visibility = 'hidden';

    return (        
      <div className={classes.Header}>
        <LogoSpectre
          closeTheme={this.props.closeTheme}
          openSpectre={this.props.openSpectre}
          closeCategorie={this.props.closeCategorie}
          setSpectreTopBarToOne={this.props.setSpectreTopBarToOne}
          closeUnderCategorie={this.props.closeUnderCategorie}/>
        <SpectreTopBar
          spectreTopBar={this.props.spectreTopBar}
          imgTopBarSpectre={this.props.imgTopBarSpectre}
          scrollSpectreTopBar={this.props.scrollSpectreTopBar}
          spectre={this.props.spectre}
          />
        <RightMenu 
          menu={this.openModal} 
          open={this.props.open} 
          close={this.props.close} 
          modal={this.props.modal}
          spectreTopBar={this.props.spectreTopBar}
          upSpectreTopBar={this.props.upSpectreTopBar}
          downSpectreTopBar={this.props.downSpectreTopBar}
          changeScrollSpectreTopBar={this.props.changeScrollSpectreTopBar}
          scrollSpectreTopBar={this.props.scrollSpectreTopBar}
          spectre={this.props.spectre}/>
        <Modal 
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => {this.setState({modalIsOpen: false})}}
          ariaHideApp={false}
          style={modalStyle}>
          <ModalTopBar 
            close={this.closeModal}
            closeTheme={this.props.closeTheme}
            openSecond={this.props.openSecond}
            closeSecond={this.props.closeSecond}
            openSpectre={this.props.openSpectre}
            closeCategorie={this.props.closeCategorie}
            setSpectreTopBarToOne={this.props.setSpectreTopBarToOne}
            closeUnderCategorie={this.props.closeUnderCategorie}
            openModalVideo={this.props.openModalVideo}
            videoIsPlaying={this.props.videoIsPlaying}/>
        </Modal>
      </div>
    );
  }
}

export default Radium(header);
