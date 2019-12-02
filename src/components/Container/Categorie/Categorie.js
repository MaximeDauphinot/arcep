import React from 'react';
import classes from './Categorie.css';
import Radium from 'radium';

// logo Iot
import { ReactComponent as ImplantMedicaux } from '../../../assets/blanc/arcep_picto_blanc_implants_medicaux_actifs_pacemaker.svg';
import { ReactComponent as Transport} from '../../../assets/blanc/arcep_picto_transports.svg';
import { ReactComponent as Alarme} from '../../../assets/blanc/arcep_picto_blanc_alarme-03.svg';
import { ReactComponent as Mesure} from '../../../assets/blanc/arcep_picto_blanc_mesures-18.svg';
import { ReactComponent as Drone} from '../../../assets/blanc/arcep_picto_blanc_drone.svg';
import { ReactComponent as Radar} from '../../../assets/blanc/arcep_picto_blanc_applications_a_bande_ultralarge_UWB_radar.svg';
import { ReactComponent as Audition} from '../../../assets/blanc/arcep_picto_blanc_aide_a_l_audition.svg';
import { ReactComponent as Radioperage} from '../../../assets/blanc/arcep_picto_blanc_application_de_radioreperage-16.svg';
import { ReactComponent as Cuisson} from '../../../assets/blanc/arcep_picto_blanc_plaque_de_cuisson.svg';
import { ReactComponent as Rfid} from '../../../assets/blanc/arcep_picto_blanc_RFID.svg';

//logo reseaux mobile
import { ReactComponent as Reseaux } from '../../../assets/blanc/arcep_picto_blanc_reseaux_mobiles_publics.svg';
import { ReactComponent as Radiomessageries} from '../../../assets/blanc/arcep_picto_blanc_radio_messagerie.svg';
import { ReactComponent as BoucleRadio} from '../../../assets/blanc/arcep_picto_blanc_boucle_locale_radio.svg';
import { ReactComponent as MobilePro} from '../../../assets/blanc/arcep_picto_blanc_reseaux_mobiles_pro.svg';
import { ReactComponent as Ppdr} from '../../../assets/blanc/arcep_picto_blanc_PPDR.svg';
import { ReactComponent as SystemeDeTerre} from '../../../assets/blanc/arcep_picto_blanc_systemes_de_terre_permattant_de_fournir_des_services_de_communications_electroniques.svg';
import { ReactComponent as Bluetooth} from '../../../assets/blanc/arcep_picto_blanc_transmission_de_donnees_a_large_bande_wifi_bluetooth.svg';

//logo amateur
import { ReactComponent as AmSattelite} from '../../../assets/blanc/arcep_picto_blanc_amateur_satellite.svg';

//logo pmse
import { ReactComponent as Pmse} from '../../../assets/blanc/arcep_picto_blanc_PMSE.svg';

//logo satellite
import { ReactComponent as SatelliteMobile} from '../../../assets/blanc/arcep_picto_blanc_stations_terriennes_du_service_mobile_par_satellite.svg';
import { ReactComponent as SatelliteFixe} from '../../../assets/blanc/arcep_picto_blanc_stations_terriennes_du_service_fixe_par_satellite.svg';
import { ReactComponent as SatellitTemporaire} from '../../../assets/blanc/arcep_picto_blanc_liaisons_video_temporaires_par_satellite_SNG-24.svg';
import { ReactComponent as SatelliteGps} from '../../../assets/blanc/arcep_picto_blanc_systeme_de_navigation_par_satellite_GPS.svg';
import { ReactComponent as NaviereSatellite} from '../../../assets/blanc/arcep_picto_blanc_stations_terriennes_a_bord_d_aeronefs_ou_de_navires.svg';
import { ReactComponent as TempSatellite} from '../../../assets/blanc/arcep_picto_blanc_elements_terrestres_complementaires_d_un_systeme_mobile_par_satellite.svg';
import { ReactComponent as TempEtalon} from '../../../assets/blanc/arcep_picto_blanc_frequences_etalon_et_signaux_horaires_par_satellite.svg';
import { ReactComponent as Aeronef} from '../../../assets/blanc/arcep_picto_blanc_services_de_communications_par_satellite_a_bord_d_aeronefs_AES.svg';

//logo faisceaux hertziens
import { ReactComponent as Faisceaux} from '../../../assets/blanc/arcep_picto_blanc_faisceaux_hertziens_FH.svg';

//logo autres
import { ReactComponent as Navire} from '../../../assets/noir/arcep_picto_noir_services_de_communications_par_satellite_a_bord_de_navires_communications_mobiles_a_bord_des_navires.svg';

let style = {
    firstContainer: {
        
    },
    secondContainer: {

    },
    thirdContainer: {
        
    },
    fourthContainer: {
        
    }
}

let title = {
    black: '',
    grey: ''
}

let firstContainer = null;
let secondContainer = null;
let thirdContainer = null;
let fourthContainer = null;
let fivethContainer = null;
let sixthContainer = null;
let seventhContainer = null;
let eightthContainer = null;
let ninethContainer = null;

let styleTheme = {
    height: ((65 * window.innerHeight) / 100) - 60
}

const categorie = (props) => {
    if (props.categorie === 'Objets/IoT'){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '11.11111%',
                flexDirection: 'column'
            },
            secondContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '11.11111%',
                flexDirection: 'column'
            },
            thirdContainer: {
                height: (60 * window.innerHeight) / 100,
                width: '11.11111%',
                flexDirection: 'column'
            },
            thirdContainersd: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: '60%',
                flexDirection: 'column'
            },
            fourthContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '11.11111%',
                flexDirection: 'column'
            },

        }
        title = {
            black: 'Objets/IoT',
            grey: 'Accueil / '
        }

        firstContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 1); props.openUnderCategorie();}} style={style.firstContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision} id="test">
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                    </div>
                        <div className={classes.alignContainer}>
                            <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <ImplantMedicaux className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Implants médicaux actifs</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        secondContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 2); props.openUnderCategorie();}}  style={style.secondContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                    </div>
                        <div className={classes.alignContainer}>
                            <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Transport className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Systèmes télématiques pour la circulation et le transport</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        thirdContainer = (
            <div  style={style.thirdContainer}>
                <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 3); props.openUnderCategorie();}} style={style.thirdContainersd} className={classes.hoverCategorie}>
                    <div className={classes.btnhover} >
                        <div className={classes.decision}>
                            <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                        </div>
                            <div className={classes.alignContainer}>
                                <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Alarme className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Alarmes</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 4); props.openUnderCategorie();}} className={classes.hoverCategorie} style={{backgroundColor: 'rgb(55, 86, 157)', margin: '4px 2px 0px',height: 'calc(40% - 4px)',flexDirection: 'column',}}>
                    <div className={classes.btnhover} >
                        <div className={classes.decision}>
                            <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                        </div>
                            <div className={classes.alignContainer}>
                                <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Mesure className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Mesures</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        fourthContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 5); props.openUnderCategorie();}}  style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                    </div>
                        <div className={classes.alignContainer}>
                            <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Drone className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Commandes de modèles réduits</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        fivethContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 6); props.openUnderCategorie();}}  style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/07-0683.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                    </div>
                        <div className={classes.alignContainer}>
                            <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Radar className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Applications à bande ultralarge (UWB)</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        sixthContainer = (
            <div style={style.thirdContainer} >
                <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 7); props.openUnderCategorie();}} className={classes.hoverCategorie} style={{backgroundColor: 'rgb(55, 86, 157)', margin: '0px 2px 4px',height: 'calc(40% - 4px)',flexDirection: 'column',}}>
                    <div className={classes.btnhover} >
                        <div className={classes.decision}>
                            <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                        </div>
                            <div className={classes.alignContainer}>
                                <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Non-spécifique</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 8); props.openUnderCategorie();}} style={style.thirdContainersd} className={classes.hoverCategorie}>
                    <div className={classes.btnhover} >
                        <div className={classes.decision}>
                            <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                        </div>
                            <div className={classes.alignContainer}>
                                <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Audition className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Aides à l'audition</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        seventhContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 9); props.openUnderCategorie();}} style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                    </div>
                        <div className={classes.alignContainer}>
                            <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Radioperage className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Application de radiorepérage</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        eightthContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 10); props.openUnderCategorie();}} style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                    </div>
                        <div className={classes.alignContainer}>
                            <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Cuisson className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>Applications inductives</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        ninethContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Objets/IoT', 11); props.openUnderCategorie();}}  style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/14-1263.pdf" ><button className={classes.button + ' ' + classes.buttonObjets}>Décision</button></a>
                    </div>
                        <div className={classes.alignContainer}>
                            <div className={classes.underCategorieContainer}>
                        <div className={classes.logoUnderCat}>
                            <Rfid className={classes.logoUnderCat}/>
                        </div>
                        <div>
                            <p className={classes.titleUnderCat}>RFID</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    } else if (props.categorie === 'Réseaux mobile et THD'){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '20%',
                flexDirection: 'column'
            },
            secondContainer: {
                height: (60 * window.innerHeight) / 100,
                width: '20%',
                flexDirection: 'column'
            },
            thirdContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '20%',
                flexDirection: 'column'
            },
            fourthContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '20%',
                flexDirection: 'column'
            },
            thirdContainersd: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: '50%',
                flexDirection: 'column'
            },
        }
        title = {
            black: 'Réseaux mobile et THD',
            grey: 'Accueil / '
        }
        firstContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Réseaux mobile et THD', 1); props.openUnderCategorie();}} style={style.firstContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                    <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonReseaux}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Reseaux className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Réseaux mobiles ouverts au public</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        secondContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Réseaux mobile et THD', 2); props.openUnderCategorie();}} className={classes.hoverCategorie} style={style.thirdContainer}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonReseaux}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                <div className={classes.logoUnderCat}>
                    <BoucleRadio className={classes.logoUnderCat}/>
                </div>
                <div>
                    <p className={classes.titleUnderCat}>Boucle locale radio</p>
                </div>
            </div>
                    </div>
                </div>
            </div>
        )
        thirdContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Réseaux mobile et THD', 3); props.openUnderCategorie();}} style={style.thirdContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonReseaux}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <MobilePro className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Réseaux mobiles professionnels PMR</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        fourthContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Réseaux mobile et THD', 4); props.openUnderCategorie();}} style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonReseaux}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Bluetooth className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Transmission de données à large bande</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        fivethContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Réseaux mobile et THD', 5); props.openUnderCategorie();}} style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover} >
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonReseaux}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <SystemeDeTerre className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Systèmes de Terre permettant de fournir des services de communications électroniques</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        sixthContainer = null;
        seventhContainer = null;
        eightthContainer = null;
        ninethContainer = null;
    } else if (props.categorie === 'Amateur'){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(194, 44, 119)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '35%',
                flexDirection: 'column'
            },
            secondContainer: {
                backgroundColor: 'rgb(194, 44, 119)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '65%',
                flexDirection: 'column'
            }
        }
        title = {
            black: 'Amateur',
            grey: 'Accueil / '
        }
        firstContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Amateur', 1); props.openUnderCategorie();}} style={style.firstContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                    <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonAmateur}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <AmSattelite className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Amateur</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        secondContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Amateur', 2); props.openUnderCategorie();}} style={style.secondContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                    <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonAmateur}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <AmSattelite className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Amateur-satellite</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        thirdContainer = null;
        fourthContainer = null;
        fivethContainer = null;
        sixthContainer = null;
        seventhContainer = null;
        eightthContainer = null;
        ninethContainer = null;
    } else if (props.categorie === 'PMSE'){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(210, 47, 47)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
                flexDirection: 'column'
            },
            secondContainer: {
                backgroundColor: 'rgb(210, 47, 47)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '75%',
                flexDirection: 'column'
            }
        }
        title = {
            black: 'PMSE',
            grey: 'Accueil / '
        }
        firstContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('PMSE', 1); props.openUnderCategorie();}} style={style.firstContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="http://www.arcep.fr/uploads/tx_gsavis/15-0830.pdf" ><button className={classes.button + ' ' + classes.buttonPMSE}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Pmse className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Audio/multimédia sans fil</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        secondContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('PMSE', 2); props.openUnderCategorie();}} style={style.secondContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="https://www.arcep.fr/uploads/tx_gsavis/16-1130.pdf" ><button className={classes.button + ' ' + classes.buttonPMSE}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Pmse className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>PMSE</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        thirdContainer = null;
        fourthContainer = null;
        fivethContainer = null;
        sixthContainer = null;
        seventhContainer = null;
        eightthContainer = null;
        ninethContainer = null;
    } else if (props.categorie === 'Satellite'){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(75, 172, 208)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
                flexDirection: 'column'
            },
            secondContainer: {
                backgroundColor: 'rgb(75, 172, 208)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
                flexDirection: 'column'
            },
            thirdContainer: {
                backgroundColor: 'rgb(75, 172, 208)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
                flexDirection: 'column'
            },
            thirdContainersd: {
                backgroundColor: 'rgb(75, 172, 208)',
                margin: '0px 2px',
                height: '60%',
                flexDirection: 'column'
            },
            fourthContainer: {
                backgroundColor: 'rgb(75, 172, 208)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
                flexDirection: 'column'
            }
        }
        title = {
            black: 'Satellite',
            grey: 'Accueil / '
        }
        firstContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Satellite',1); props.openUnderCategorie();}} style={style.firstContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonSatellite}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                    <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <SatelliteMobile className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p style={{maxWidth: '120px'}} className={classes.titleUnderCat}>Stations terriennes du service mobile par satellite</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        secondContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Satellite', 2); props.openUnderCategorie();}} style={style.secondContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonSatellite}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <SatelliteFixe className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p style={{maxWidth: '120px'}} className={classes.titleUnderCat}>Stations terriennes du service fixe par satellite</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        thirdContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Satellite', 3); props.openUnderCategorie();}} style={style.thirdContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonSatellite}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                            <div className={classes.logoUnderCat}>
                                <SystemeDeTerre className={classes.logoUnderCat}/>
                            </div>
                            <div>
                                <p style={{maxWidth: '120px'}} className={classes.titleUnderCat}>Systèmes par satellite</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        fourthContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Satellite', 4); props.openUnderCategorie();}} style={style.fourthContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonSatellite}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer}>
                            <div className={classes.logoUnderCat}>
                                <Aeronef className={classes.logoUnderCat}/>
                            </div>
                            <div>
                                <p style={{maxWidth: '120px'}} className={classes.titleUnderCat}>AES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        fivethContainer = null;
        sixthContainer = null;
        seventhContainer = null;
        eightthContainer = null;
        ninethContainer = null;
    } else if (props.categorie === 'Faisceaux hertziens'){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(242, 157, 75)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '100%',
                flexDirection: 'column'
            },
        }
        title = {
            black: 'Faisceaux hertziens',
            grey: 'Accueil / '
        }
        firstContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Faisceaux hertziens', 1); props.openUnderCategorie();}} style={style.firstContainer} className={classes.hoverCategorie}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonFaisceaux}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                    <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Faisceaux className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Faisceaux hertziens</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
        secondContainer = null;
        thirdContainer = null;
        fourthContainer = null;
        fivethContainer = null;
        sixthContainer = null;
        seventhContainer = null;
        eightthContainer = null;
        ninethContainer = null;
    } else if (props.categorie === 'Autres'){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(240, 237, 231)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '50%',
                flexDirection: 'column'
            },
            secondContainer: {
                backgroundColor: 'rgb(240, 237, 231)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '50%',
                flexDirection: 'column'
            },
        }
        title = {
            black: 'Autres',
            grey: 'Accueil / '
        }
        firstContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Autres', 1); props.openUnderCategorie();}} style={style.firstContainer} className={classes.hoverCategorieAutres}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonAutres}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer} style={{color: 'black'}}>
                            <div className={classes.logoUnderCat}>
                                <Navire className={classes.logoUnderCat}/>
                            </div>
                            <div>
                                <p className={classes.titleUnderCat}>Autres applications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        secondContainer = (
            <div onClick={() => {props.closeCategorie(); props.underCategorie('Autres', 2); props.openUnderCategorie();}} style={style.secondContainer} className={classes.hoverCategorieAutres}>
                <div className={classes.btnhover}>
                    <div className={classes.decision}>
                        <a className={classes.lien} rel="noopener noreferrer" target="_blank" href="#" ><button className={classes.button + ' ' + classes.buttonAutres}>Décision</button></a>
                    </div>
                    <div className={classes.alignContainer}>
                        <div className={classes.underCategorieContainer} style={{color: 'black'}}>
                            <div className={classes.logoUnderCat}>
                                <Navire className={classes.logoUnderCat}/>
                            </div>
                            <div>
                                <p className={classes.titleUnderCat}>DECT et autres téléphones sans fil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        thirdContainer = null;
        fourthContainer = null;
        fivethContainer = null;
        sixthContainer = null;
        seventhContainer = null;
        eightthContainer = null;
        ninethContainer = null;
    }
    return (        
      <div className={classes.themes} >
          <div className={classes.modalMiddle}>
            <div className={classes.sectionTitle}>
                <p style={{color: 'black', fontWeight: 'bold'}}><span onClick={() => {props.leftClose(); props.rightClose(); props.changeCategorie(''); props.closeUnderCategorie(); props.closeCategorie(); props.openSpectre();}} style={{cursor: 'pointer', color: 'rgb(147, 147, 147)'}}>{title.grey}</span>{title.black}</p>
            </div>
            <div style={styleTheme} className={classes.fullWidthContainer}>
                {firstContainer}
                {secondContainer}
                {thirdContainer}
                {fourthContainer}
                {fivethContainer}
                {sixthContainer}
                {seventhContainer}
                {eightthContainer}
                {ninethContainer}
            </div>
        </div>
      </div>
    );
}

export default Radium(categorie);