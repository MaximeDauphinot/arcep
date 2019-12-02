import React, { Component } from 'react';
import Header from './components/Header/Header';
import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Accueil from './assets/Accueil01.png';
import Modal from 'react-modal';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';
import video from './assets/e-spectre-animation.mp4';
import * as d3 from 'd3';

const videoModalStyle = { 
  overlay: {
    width: '100%',
    height: '91%',
    flexGrow: '1',
    zIndex: '30',
    boxShadow: '1px 0px 1px rgba(0, 0, 0, 0.15)',
  }, 
  content: {
    backgroundColor: 'wihte',
    width: '100%',
    height: '100%',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '0',
    border: '0px',
    borderRadius: '0px'
  }
}
class App extends Component {
  state = {
    rightModalIsOpen: false,
    leftSecondModalIsOpen: false,
    leftModalIsOpen: false,
    themeIsOpen: false,
    categorieIsOpen: false,
    spectre: true,
    spectreTopBar: 1,
    nameSpectreTopBar: 'Vide',
    underCategorie: false,
    videoModal: true,
    videoIsPlaying: false,
    width: 0,
    height: 0,
    scrollSpectreTopBar: 0
  }
  
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    changeScrollSpectreTopBar(scroll) {
      this.setState({ scrollSpectreTopBar: scroll });
    }

    openUnderCategorie () {
      this.setState({underCategorie: true})
    }

    closeUnderCategorie () {
      this.setState({underCategorie: false})
    }

    videoIsPlaying () {
      this.setState({videoIsPlaying: true})
    }

    videoIsNotPlaying () {
      this.setState({videoIsPlaying: false})
    }

    openModalVideo () {
      this.setState({videoModal: true})
    }

    closeModalVideo () {
      this.setState({videoModal: false})
    }

    setSpectreTopBarToOne () {
      this.setState({spectreTopBar: 1})
    }

    moveUpSpectreTopBar () {
      if (this.state.spectreTopBar < 11){
        const numSpectre = this.state.spectreTopBar + 1
        this.setState({spectreTopBar: numSpectre})
      }
    }
    
    moveDownSpectreTopBar () {
      if (this.state.spectreTopBar > 0){
        const numSpectre = this.state.spectreTopBar - 1
        this.setState({spectreTopBar: numSpectre})
      }
    }

    changeSpectreTopBarWithScroll (numSpectre) {
      this.setState({spectreTopBar: numSpectre})
    }

    openThemeHandler () {
      this.setState({themeIsOpen: true})
    }

    closeThemeHandler () {
      this.setState({themeIsOpen: false});
      d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
      d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
      d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
      d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
      d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
      d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
      d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')
      d3.selectAll("#topTest4").raise();
    }

    openCategorieHandler () {
      this.setState({categorieIsOpen: true})
      this.setState({scrollSpectreTopBar: 0})
    }

    closeCategorieHandler () {
      this.setState({categorieIsOpen: false})
      this.setState({scrollSpectreTopBar: 0})
      d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
      d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
      d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
      d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
      d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
      d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
      d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')
      d3.selectAll("#topTest4").raise();
    }

    openSpectreHandler () {
      this.setState({spectre: true})
      this.setState({scrollSpectreTopBar: 0})
    }

    closeSpectreHandler () {
      this.setState({spectre: false})
    }

   openSecondLeftModal () {
    this.setState({leftSecondModalIsOpen: true});
    this.setState({leftModalIsOpen: false});
    this.setState({rightModalIsOpen: false});
    document.getElementById('pastilleLeft').style.visibility = 'visible';
    document.getElementById('pastilleLeft').style.pointerEvents = 'none';
    document.getElementById('pastilleRight').style.pointerEvents = 'none';
    }

    closeSecondLeftModal () {
      this.setState({leftSecondModalIsOpen: false});
      document.getElementById('pastilleLeft').style.pointerEvents = 'auto';
      document.getElementById('pastilleRight').style.pointerEvents = 'auto';
    }
  
    openRightModal () {
    this.setState({rightModalIsOpen: true});
    this.setState({leftSecondModalIsOpen: false});
    document.getElementById('pastilleLeft').style.pointerEvents = 'auto';
    document.getElementById('pastilleRight').style.pointerEvents = 'auto';
    document.getElementById('pastilleRight').style.visibility = 'hidden';
  }

  closeRightModal () {
    this.setState({rightModalIsOpen: false});
    document.getElementById('pastilleRight').style.visibility = 'visible';
  }

  openLeftModal () {
    this.setState({leftModalIsOpen: true});
    document.getElementById('pastilleLeft').style.visibility = 'hidden';
  }

  closeLeftModal () {
    this.setState({leftModalIsOpen: false});
    document.getElementById('pastilleLeft').style.visibility = 'visible';
  }


  render() {
    this.openRightModal = this.openRightModal.bind(this);
    this.openSecondLeftModal = this.openSecondLeftModal.bind(this);
    this.closeRightModal = this.closeRightModal.bind(this);
    this.closeSecondLeftModal = this.closeSecondLeftModal.bind(this);
    this.openLeftModal = this.openLeftModal.bind(this);
    this.closeLeftModal = this.closeLeftModal.bind(this);
    this.openThemeHandler = this.openThemeHandler.bind(this);
    this.closeThemeHandler = this.closeThemeHandler.bind(this);
    this.openSpectreHandler = this.openSpectreHandler.bind(this);
    this.closeSpectreHandler = this.closeSpectreHandler.bind(this);
    this.openCategorieHandler = this.openCategorieHandler.bind(this);
    this.closeCategorieHandler = this.closeCategorieHandler.bind(this);
    this.moveUpSpectreTopBar = this.moveUpSpectreTopBar.bind(this);
    this.moveDownSpectreTopBar = this.moveDownSpectreTopBar.bind(this);
    this.setSpectreTopBarToOne = this.setSpectreTopBarToOne.bind(this);
    this.openUnderCategorie = this.openUnderCategorie.bind(this);
    this.closeUnderCategorie = this.closeUnderCategorie.bind(this);
    this.openModalVideo = this.openModalVideo.bind(this);
    this.closeModalVideo = this.closeModalVideo.bind(this);
    this.videoIsPlaying = this.videoIsPlaying.bind(this);
    this.videoIsNotPlaying = this.videoIsNotPlaying.bind(this);
    this.changeSpectreTopBarWithScroll = this.changeSpectreTopBarWithScroll.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.changeScrollSpectreTopBar = this.changeScrollSpectreTopBar.bind(this)

    if (this.state.videoIsPlaying){
      videoModalStyle.overlay.height = '100%'
    }

    return (
      <StyleRoot>
        <div className={classes.App}>
          <Header 
            open={this.openRightModal} 
            close={this.closeRightModal} 
            modal={this.state.rightModalIsOpen}
            closeTheme={this.closeThemeHandler}
            openSecond={this.openSecondLeftModal}
            closeSecond={this.closeSecondLeftModal}
            spectre={this.state.spectre}
            openSpectre={this.openSpectreHandler}
            closeSpectre={this.closeSpectreHandler}
            categorie={this.state.categorieIsOpen}
            openCategorie={this.openCategorieHandler}
            closeCategorie={this.closeCategorieHandler}
            spectreTopBar={this.state.spectreTopBar}
            upSpectreTopBar={this.moveUpSpectreTopBar}
            downSpectreTopBar={this.moveDownSpectreTopBar}
            imgTopBarSpectre={this.state.nameSpectreTopBar}
            setSpectreTopBarToOne={this.setSpectreTopBarToOne}
            underCategorie={this.state.underCategorie}
            openUnderCategorie={this.openUnderCategorie}
            closeUnderCategorie={this.closeUnderCategorie}
            openModalVideo={this.openModalVideo}
            videoIsPlaying={this.videoIsPlaying}
            scrollSpectreTopBar={this.state.scrollSpectreTopBar}
            changeScrollSpectreTopBar={this.changeScrollSpectreTopBar}/>
          <Container 
            open={this.openRightModal} 
            close={this.closeRightModal} 
            modal={this.state.rightModalIsOpen} 
            openSecond={this.openSecondLeftModal}
            closeSecond={this.closeSecondLeftModal}
            modalSecond={this.state.leftSecondModalIsOpen}
            openThird={this.openLeftModal}
            closeThird={this.closeLeftModal}
            modalThird={this.state.leftModalIsOpen}
            theme={this.state.themeIsOpen}
            openTheme={this.openThemeHandler}
            closeTheme={this.closeThemeHandler}
            spectre={this.state.spectre}
            openSpectre={this.openSpectreHandler}
            closeSpectre={this.closeSpectreHandler}
            categorie={this.state.categorieIsOpen}
            openCategorie={this.openCategorieHandler}
            closeCategorie={this.closeCategorieHandler}
            imgTopBarSpectre={this.state.nameSpectreTopBar}
            setSpectreTopBarToOne={this.setSpectreTopBarToOne}
            underCategorie={this.state.underCategorie}
            openUnderCategorie={this.openUnderCategorie}
            closeUnderCategorie={this.closeUnderCategorie}
            changeSpectreTopBarWithScroll={this.changeSpectreTopBarWithScroll}
            spectreTopBar={this.state.spectreTopBar}
            barHeight={this.state.height}
            changeScrollSpectreTopBar={this.changeScrollSpectreTopBar}/>
            <Modal 
              isOpen={this.state.videoModal}
              onRequestClose={this.props.closeSecond}
              ariaHideApp={false}
              style={videoModalStyle}
              >
                  {!this.state.videoIsPlaying ?
                  <div id="Acceuil">
                    <img src={Accueil} alt="Accueil" className={classes.acceuil} />
                    <div className={classes.acceuilModalButtons}>
                      <div className={classes.button}>
                        <button 
                          onClick={() => {
                            this.videoIsPlaying();
                            document.getElementById('Acceuil').style.display = 'none';}} 
                            className={classes.styleButton}>Comment l’utiliser ?</button>
                      </div>
                      <div className={classes.button}>
                        <button onClick={() => {this.closeModalVideo();}} className={classes.styleButton}>Accéder à l’outil</button>
                      </div>
                    </div>
                  </div> : null}
                 {this.state.videoIsPlaying ?
                    <div id="vidz" style={{zIndex: 40, position: 'absolute', width: '100%', height: '100%', justifyContent: 'flex-end'}}>
                      <div className={classes.Cross}>
                        <Icon onClick={() => {this.videoIsNotPlaying(); this.closeModalVideo();}} icon={x} size={30} className={classes.crossStyle}/> 
                      </div>
                      <video controls onEnded={() => {this.videoIsNotPlaying(); this.closeModalVideo();}} src={video} autoPlay={true} style={{width: '100%', height: '100%', zIndex: 50, position: 'absolute'}}> </video> 
                    </div> : null}
            </Modal>
          <Footer />
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
