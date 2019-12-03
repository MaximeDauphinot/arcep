import React from 'react';
import classes from './underCategories.css';
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
import { ReactComponent as BoucleRadio} from '../../../assets/blanc/arcep_picto_blanc_boucle_locale_radio.svg';
import { ReactComponent as MobilePro} from '../../../assets/blanc/arcep_picto_blanc_reseaux_mobiles_pro.svg';
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
import { ReactComponent as Aeronef} from '../../../assets/blanc/arcep_picto_blanc_services_de_communications_par_satellite_a_bord_d_aeronefs_AES.svg';

//logo faisceaux hertziens
import { ReactComponent as Faisceaux} from '../../../assets/blanc/arcep_picto_blanc_faisceaux_hertziens_FH.svg';

//logo autres
import { ReactComponent as Navire} from '../../../assets/noir/arcep_picto_noir_services_de_communications_par_satellite_a_bord_de_navires_communications_mobiles_a_bord_des_navires.svg';





let style = {
    firstContainer: {
    },
    secondContainer: {
    }
}
let classe = null;

let title = null;
let titleThird = null;
const slash = ' / ';

let fenetre = {
    leftWindow: {},
    rightWindow: {}
}

let styleTheme = {
    height: ((65 * window.innerHeight) / 100) - 60
}

const underCategories = (props) => {

    style = {
        firstContainer: {
            backgroundColor: '',
            margin: '0px 2px',
            height: (60 * window.innerHeight) / 100,
            justifyContent: 'center',
            width: '25%',
            flexDirection: 'column'
        },
        secondContainer: {
            backgroundColor: '',
            margin: '0px 2px',
            height: (60 * window.innerHeight) / 100,
            justifyContent: 'center',
            width: '75%',
            flexDirection: 'column'
        }
    }

    if (props.underCategorie === 'Objets/IoT'){
        if (props.wichUnder === 1){
            titleThird = 'Implants médicaux actifs';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <ImplantMedicaux className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Implants médicaux actifs</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La catégorie des implants médicaux actifs recouvre la composante radio de tout dispositif médical actif conçu pour être implanté, en totalité ou en partie, par une intervention chirurgicale ou médicale, dans un organisme humain ou animal et, le cas échéant, ses périphériques.</p>
                </div>
            )
        } else if (props.wichUnder === 2){
            titleThird = 'Systèmes télématiques pour la circulation et le transport';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Transport className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Systèmes télématiques pour la circulation et le transport</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La catégorie des systèmes télématiques pour la circulation et les transports regroupe des dispositifs radio utilisés dans le domaine des transports (routier, ferroviaire, maritime, fluvial ou aérien, selon les restrictions techniques pertinentes), de la gestion du trafic, de la navigation, de la gestion de la mobilité et des systèmes de transport intelligents (STI). Ces dispositifs sont généralement utilisés pour constituer des interfaces entre différents modes de transport, assurer la communication entre véhicules (de voiture à voiture par exemple), entre des 
                    véhicules et des emplacements fixes (de voiture à infrastructure) et la communication à destination et en provenance des usagers.</p>
                </div>
            )
        } else if (props.wichUnder === 3){
            titleThird = 'Alarmes';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Alarme className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Alarmes</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}> Il peut s'agir notamment des systèmes d'alarme sociale, qui sont des systèmes de communication radio fiables permettant à une personne en situation de détresse dans un espace confiné de lancer un appel à l’aide. Ces systèmes sont généralement utilisés pour aider les personnes âgées ou handicapées.</p>
                </div>
            )
        } else if (props.wichUnder === 4){
            titleThird = 'Mesures';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Mesure className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Mesures</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La catégorie des dispositifs de mesure regroupe les dispositifs radio qui font partie des systèmes de communication radio bidirectionnels permettant la télésurveillance et la télémesure ainsi que la transmission de données dans les infrastructures de réseau intelligentes, notamment dans les domaines de l’électricité, du gaz et de l’eau</p>
                </div>
            )
        } else if (props.wichUnder === 5){
            titleThird = 'Commandes de modèles réduits';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Drone className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Commandes de modèles réduits</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Les dispositifs de commande pour modèles réduits sont des équipements radio de télécommande et de télémétrie utilisés pour commander à distance les mouvements de modèles réduits (de véhicules, essentiellement) dans l’air, sur terre, sur l’eau ou sous l’eau.</p>
                </div>
            )
        } else if (props.wichUnder === 6){
            titleThird = 'Applications à bande ultralarge (UWB)';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Radar className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Applications à bande ultralarge (UWB)</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Comme leurs noms l’indiquent, les applications à bande ultra large s’appuient sur un spectre qui s’étale sur une large bande de fréquences. C’est un signal de très faible intensité, difficile à détecter. C’est pourquoi cette technique est utilisée pour des applications radar et de repérage.</p>
                </div>
            )
        } else if (props.wichUnder === 7){
            titleThird = 'Non-spécifique';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Non-spécifique</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La catégorie de dispositifs à courte portée non spécifiques regroupe tous les types de dispositifs radio, quelle que soit leur finalité, qui remplissent les conditions techniques prévues pour une bande de fréquences donnée. Les exemples les plus courants sont les instruments de télémétrie, les télécommandes, les alarmes, les systèmes de transmission de données en général et les autres applications similaires.</p>
                </div>
            )
        } else if (props.wichUnder === 8){
            titleThird = "Aides à l'audition";
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Audition className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Aides à l'audition</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La catégorie des dispositifs d’aide à l’audition regroupe les systèmes de radiocommunication qui permettent aux déficients auditifs d’améliorer leur capacité d’audition. Ces systèmes comportent généralement un ou plusieurs émetteurs et un ou plusieurs récepteurs.</p>
                </div>
            )
        } else if (props.wichUnder === 9){
            titleThird = 'Application de radiorepérage';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Radioperage className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Application de radiorepérage</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La catégorie des applications de radiorepérage regroupe des dispositifs radio permettant de déterminer la position, la vitesse et/ou d’autres caractéristiques d’un objet ou d’obtenir des données relatives à ces paramètres. Ces dispositifs sont généralement utilisés pour divers types d’applications de mesure.</p>
                </div>
            )
        } else if (props.wichUnder === 10){
            titleThird = 'Applications inductives';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Cuisson className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Applications inductives</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La catégorie des applications inductives regroupe des dispositifs radio qui utilisent les champs magnétiques avec des systèmes de boucle inductive pour la communication en champ proche. Parmi les applications les plus répandues, on peut citer les systèmes d’immobilisation de véhicules, d’identification des animaux, d’alarme, de détection de câbles, de gestion des déchets, d’identification des personnes, de transmission vocale sans fil ou de contrôle d’accès, les capteurs de proximité, les systèmes antivol, y compris les systèmes antivol RF à induction, et les systèmes de transfert de données vers des dispositifs portables, d’identification automatique d’articles, de commande sans fil et de péage routier automatique</p>
                </div>
            )
        } else if (props.wichUnder === 11){
            titleThird = 'RFID';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Rfid className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>RFID</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Le RFID (pour Radio Frequency Identification) est une technologie développée pour mémoriser et récupérer des données à distance, jusqu’à une dizaine de mètres. La catégorie des dispositifs d’identification par radiofréquence (RFID) 
regroupe des systèmes de communication fondé sur des étiquettes/interrogateurs, constitués de dispositifs radio (étiquettes) fixés à des objets animés ou inanimés et d’émetteurs/récepteurs (interrogateurs) qui activent les étiquettes et reçoivent des données en retour. Ces dispositifs sont utilisés pour suivre et identifier des objets, dans le cadre d’applications de surveillance électronique des objets par exemple, et pour recueillir et transmettre des données relatives à des objets munis d’étiquettes, qui peuvent être sans batterie, assistées par batterie ou alimentées par batterie. Les réponses fournies par l’étiquette sont validées par l’interrogateur et transmises à son système hôte.
Les applications utilisant le RFIP sont nombreuses : badges d’accès, antivol, traçabilité des produits et des marchandises, passeports, titres de transport en commun, paiement sans contact…</p>
                </div>
            )
        }
        style.firstContainer.backgroundColor = 'rgb(55, 86, 157)';
        style.secondContainer.backgroundColor = 'rgb(55, 86, 157)';
        classe = classes.buttonObjets;
        title = {
        black: 'Objets/IoT',
        grey: 'Accueil / '
    }
     } else if (props.underCategorie === 'Réseaux mobile et THD'){
        if (props.wichUnder === 1){
            titleThird = 'Réseaux mobiles ouverts au public';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Reseaux className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Réseaux mobiles ouverts au public</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Les réseaux mobiles utilisent des ondes électromagnétiques pour transmettre des informations entre les antennes-relais et les téléphones mobiles des utilisateurs. 

Les technologies utilisées pour les réseaux mobiles évoluent régulièrement, depuis la 2G jusqu'à bientôt la 5G :
- Le réseau GSM (pour Global System for Mobile Communications) est une norme de seconde génération (2G) pour la téléphonie mobile. Il permet de téléphoner, d’envoyer des SMS et des MMS. Cette norme a évolué avec l'arrivée de la technologie EDGE (Enhanced Data Rates for GSM Evolution) qui offre une amélioration des débits.
- Le réseau UMTS (Universal Mobile Telecommunication System) est une évolution de la norme GSM de téléphonie mobile, correspondant à la 3ème génération (3G). Cette norme généralise le transfert de données et l'accès à internet par les téléphones portables.
- Le réseau LTE (pour Long Term Evolution) est une technologie plus récente, plus connu sous le nom de ""4G"". Avantage : cette technologie offre des débits très élevés qui permettent l'échange de données et l'accès à internet via un téléphone mobile. 
- Pour l'avenir, les réseaux mobiles pourront utiliser la technologie 5G, qui doit permettre un saut de performance en termes de débit (qui doit être multiplié par 10), de délai de transmission (qui doit être divisé par 10) et de fiabilité de la communication, ainsi qu'en termes de capacité à connecter un très grand nombre de périphériques simultanément.

Les réseaux mobiles peuvent être ouverts au public ou réservés à des professionnels qui souhaitent disposer d'une solution de communication privée. Les bandes de fréquences utilisées sont attribuées de manière exclusive aux titulaires par l'Arcep.


</p>
                </div>
            )
        }  else if (props.wichUnder === 2){
            titleThird = 'Boucle locale radio';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <BoucleRadio className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Boucle locale radio</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>La boucle locale radio consiste à apporter un service d'accès fixe à Internet grâce aux ondes radio. Cette solution constitue une alternative aux solutions filaires pour le raccordement des clients, l'ADSL et le FttH notamment. À ce jour, les fréquences utilisées pour de tels réseaux sont des fréquences de la bande 3,4 - 3,6 GHz, pour la métropole comme pour les DOM.</p>
                </div>
            )
        } else if (props.wichUnder === 3){
            titleThird = 'PMR/PAMR';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <MobilePro className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>PMR/PAMR</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Les réseaux mobiles professionnels (souvent rassemblés sous le sigle PMR pour "" professionnal mobile radio "") sont des réseaux mobiles d'ampleur généralement locale ou régionale, exploités pour des usages professionnels.
 
                                Ces réseaux mobiles professionnels sont utilisés par des entreprises de tailles très diverses (depuis le professionnel indépendant jusqu'aux grands groupes) et de différents secteurs d'activités tels que :
                                les transports (entreprises de transports routiers, sociétés de bus, de taxis, services aéroportuaires, sociétés d'autoroutes, ambulanciers…) ;
                                la sécurité et le gardiennage ;
                                le bâtiment et les travaux publics ;
                                l'énergie (sociétés de distribution d'électricité) ;
                                l'industrie ;
                                des associations dans le cadre d'activités sportives ou de loisirs.
                                
                                Des réseaux ""PMR"" sont également utilisés par certains services de l'Etat, des hôpitaux, des collectivités locales, ainsi que certains établissements publics. Comme les autres utilisations du spectre par des services de communications électroniques, l'utilisation de fréquences par de tels réseaux est soumis à autorisation d'utilisation de fréquences délivrée par l'ARCEP. Ce n'est toutefois pas le cas de ceux exploités par le ministère de l'intérieur et le ministère de la défense qui sont eux-mêmes affectataires de bandes de fréquences au même titre que l'ARCEP.
                                
                                Les utilisations de réseaux professionnels concernent un nombre très élevé d'installations. En avril 2018, 24 916 réseaux PMR avaient fait l'objet d'une autorisation attribuée à titre individuel par l'ARCEP. A cela s'ajoutent les nombreuses utilisations dans des bandes libres, c'est-à-dire non soumises à autorisation individuelle.

                                Plus d'informations sur : <a href="https://www.arcep.fr/la-regulation/grands-dossiers-reseaux-mobiles/innovation-start-up/le-portail-bandes-libres/les-reseaux-mobiles-professionnels-pmr.html">https://www.arcep.fr/la-regulation/grands-dossiers-reseaux-mobiles/innovation-start-up/le-portail-bandes-libres/les-reseaux-mobiles-professionnels-pmr.html</a>
                                </p>
                </div>
            )
        } else if (props.wichUnder === 4){
            titleThird = 'Systèmes de Terre permettant de fournir des services de communications électroniques';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <SystemeDeTerre className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Systèmes de Terre permettant de fournir des services de communications électroniques</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Ces fréquences peuvent être utilisées pour des réseaux mobiles.</p>
                </div>
            )
        } else if (props.wichUnder === 5){
            titleThird = 'Transmission de données à large bande';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Bluetooth className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Transmission de données à large bande</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Le débit d'une communication sans fil étant directement lié à la taille de la bande allouée à la communications, les applications utilisant une large bande de fréquences peuvent proposer des débits importants. Ce type d'usages regroupe notamment le WiFi et le Bluetooth.</p>
                </div>
            )
        }
         style.firstContainer.backgroundColor = 'rgb(127, 190, 174)';
         style.secondContainer.backgroundColor = 'rgb(127, 190, 174)';
         classe = classes.buttonReseaux;
         title = {
        black: 'Réseaux mobile et THD',
        grey: 'Accueil / '
    }
     }  else if (props.underCategorie === 'Amateur'){
        if (props.wichUnder === 1){
            titleThird = 'Amateur';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <AmSattelite className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Amateur</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Le radioamateur est une personne qui a reçu l’autorisation officielle de communiquer par radio, avec d’autres personnes, elles aussi légalement autorisées. Ces communications se font sur les bandes de fréquences 
                        fixées au niveau international par l’Union Internationale des Télécommunications (UIT) au service amateur et au service amateur par satellite.
                        
                        On dénombre, en France, près de 13324 radioamateurs titulaires d’un certificat d’opérateur des services d’amateur et d’un indicatif (chiffres IARU d’avril 2019).  
                        En France, deux administrations sont compétentes :
                        - l'Arcep qui fournit les autorisations d’exploitation de fréquences ; 
                        - l'ANFR qui délivre un certificat d’opérateur radioamateur et attribue un indicatif permettant d’exploiter les fréquences allouées par l’Arcep. Elle est aussi compétente dans les questions de brouillages.</p>
                </div>
            )
        } else if (props.wichUnder === 2){
            titleThird = 'Amateur-satellite';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <AmSattelite className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Amateur-satellite</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Le radioamateur est une personne qui a reçu l’autorisation officielle de communiquer par radio, avec d’autres personnes, elles aussi légalement autorisées. Ces communications se font sur les bandes de fréquences 
                        fixées au niveau international par l’Union Internationale des Télécommunications (UIT) au service amateur et au service amateur par satellite.
                        
                        On dénombre, en France, près de 13324 radioamateurs titulaires d’un certificat d’opérateur des services d’amateur et d’un indicatif (chiffres IARU d’avril 2019).  
                        En France, deux administrations sont compétentes :
                        - l'Arcep qui fournit les autorisations d’exploitation de fréquences ; 
                        - l'ANFR qui délivre un certificat d’opérateur radioamateur et attribue un indicatif permettant d’exploiter les fréquences allouées par l’Arcep. Elle est aussi compétente dans les questions de brouillages.</p>
                </div>
            )
        }
         style.firstContainer.backgroundColor = 'rgb(194, 44, 119)';
         style.secondContainer.backgroundColor = 'rgb(194, 44, 119)';
         classe = classes.buttonAmateur;
         title = {
        black: 'Amateur',
        grey: 'Accueil / '
    }
     } else if (props.underCategorie === 'PMSE'){
        if (props.wichUnder === 1){
            titleThird = 'Audio/multimédia sans fil';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Pmse className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Audio/multimédia sans fil</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Applications destinées aux systèmes audio sans fil, notamment: les haut-parleurs sans fil; les casques sans fil; les casques sans fil pour appareils portables tels quebaladeurs CD, cassette ou radio; les casques sans fil destinés à être utilisés à bord d'un véhicule, par exemple avec une radio ou un téléphone portable, etc.; les oreillettesutilisées lors des concerts ou autres spectacles scéniques.</p>
                </div>
            )
        } else if (props.wichUnder === 2){
            titleThird = 'PMSE';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Pmse className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>PMSE</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Les équipements "" PMSE "" (pour programme making and special events), 
                    appelés également équipements auxiliaires sonores de conception de 
                    programmes et de radiodiffusion, constituent un outil de travail 
                    quotidien pour les professionnels de l'audiovisuel et du spectacle.Il
                    s'agit d'équipements techniques, typiquement de microphones sans fil ou
                    de retours de scène, qui sont essentiels aux productions de contenus 
                    culturels pour la télévision, les théâtres et les opéras, la couverture 
                    d'évènements médiatique ou sportifs, etc. Ces équipements PMSE 
                    fonctionnent grâce à des fréquences radioélectriques, dont les 
                    conditions d'utilisation sont prévues par un cadre réglementaire fixé 
                    par l'Arcep.</p>
                </div>
            )
        }
         style.firstContainer.backgroundColor = 'rgb(210, 47, 47)';
         style.secondContainer.backgroundColor = 'rgb(210, 47, 47)';
         classe = classes.buttonPMSE;
         title = {
        black: 'PMSE',
        grey: 'Accueil / '
    }
     } else if (props.underCategorie === 'Satellite'){
        if (props.wichUnder === 1){
            titleThird = "Stations terriennes du service mobile par satellite";
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <SatelliteMobile className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Stations terriennes du service mobile par satellite</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Réseaux ouvert au public du service mobile par satellite</p>
                </div>
            )
        } else if (props.wichUnder === 2){
            titleThird = 'Stations terriennes du service fixe par satellite';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <SatelliteFixe className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Stations terriennes du service fixe par satellite</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Réseaux ouvert au public du service fixe par satellite</p>
                </div>
            )
        } else if (props.wichUnder === 3){
            titleThird = 'Systèmes par satellite';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <SatellitTemporaire className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Systèmes par satellite</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Cette catégorie regroupe divers systèmes par satellite, comme :
- l'émission de fréquence à des fins d'étalonnage ou de détermination de l'heure
- le calcul de la position d'un mobile à partir de signaux émis par satellite
- la connexion des avions ou des navires par satellite, par exemple pour apporter un service Internet à bord par Wifi
- la couverture médiatique d’événements d’actualité (compétition sportive, festival, etc.)grâce à des liaisons temporaires de vidéo-reportage par satellite</p>
                </div>
            )
        } else if (props.wichUnder === 4){
            titleThird = 'AES';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Aeronef className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>AES</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Installations radioélectriques à bord d'aéronefs circulant dans l'espace aérien français en vue de fournir des services de communications par satellite</p>
                </div>
            )
        }
         style.firstContainer.backgroundColor = 'rgb(75, 172, 208)';
         style.secondContainer.backgroundColor = 'rgb(75, 172, 208)';
         classe = classes.buttonSatellite;
         title = {
        black: 'Satellite',
        grey: 'Accueil / '
    }
     } else if (props.underCategorie === 'Faisceaux hertziens'){
        if (props.wichUnder === 1){
            titleThird = 'Faisceaux hertziens';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer}>
                    <div className={classes.logoUnderCat}>
                        <Faisceaux className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Faisceaux hertziens</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p className={classes.textUndercat}>Un faisceau hertzien est un système de transmission de signaux - aujourd'hui principalement numériques - mono-directionnel ou bi-directionnel et généralement permanent, entre deux sites géographiques fixes. Il exploite le support d'ondes radioélectriques, par des fréquences porteuses allant de 1 GHz à 86 GHz (gamme des micro-ondes), focalisées et concentrées grâce à des antennes directives. L'Arcep a pour mission d'allouer des fréquences pour les faisceaux hertziens. 
                        Les faisceaux hertziens sont, dans leur grande majorité (80%), utilisés par les opérateurs mobiles, afin de densifier leurs réseaux et notamment de connecter leurs antennes au réseau internet ; ils peuvent également être utilisés pour des stations de radio, des société industrielles ou de transport, des collectivités ou encore des hôpitaux qui connectent différents bâtiment entre eux.</p>
                </div>
            )
        } 
         style.firstContainer.backgroundColor = 'rgb(242, 157, 75)';
         style.secondContainer.backgroundColor = 'rgb(242, 157, 75)';
         classe = classes.buttonFaisceaux;
         title = {
        black: 'Faisceaux hertziens',
        grey: 'Accueil / '
    }
     } else if (props.underCategorie === 'Autres'){
        if (props.wichUnder === 1){
            titleThird = 'Autres applications';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer} style={{color: 'black'}}>
                    <div className={classes.logoUnderCat}>
                        <Navire className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>Autres applications</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign} >
                    <p style={{color: 'black'}} className={classes.textUndercat}>Cette catégorie regroupe les autres applications.</p>
                </div>
            )
        } else if (props.wichUnder === 2){
            titleThird = 'DECT et autres téléphones sans fil';
            fenetre.leftWindow = (
                <div className={classes.underCategorieContainer} style={{color: 'black'}}>
                    <div className={classes.logoUnderCat}>
                        <Navire className={classes.logoUnderCat}/>
                    </div>
                    <div>
                        <p className={classes.titleUnderCat}>DECT et autres téléphones sans fil</p>
                    </div>
                </div>
            )
            fenetre.rightWindow = (
                <div className={classes.textAlign}>
                    <p style={{color: 'black'}} className={classes.textUndercat}>Un téléphone DECT (Digital Enhanced Cordless Telecommunications) est un téléphone sans fil numérique.</p>
                </div>
            )
        }
         style.firstContainer.backgroundColor = 'rgb(240, 237, 231)';
         style.secondContainer.backgroundColor = 'rgb(240, 237, 231)';
         classe = classes.buttonAutres;
         title = {
        black: 'Autres',
        grey: 'Accueil / '
    }
     }

    return (
        <div   className={classes.themes} id="underCat">
          <div  className={classes.modalMiddle}>
            <div className={classes.sectionTitle}>
                <p style={{color: 'black', fontWeight: 'bold'}}><span onClick={() => {
                    props.leftClose();
                    props.rightClose();
                    props.changeCategorie('');
                    props.changeLinkChoiceHandler(null);
                    props.closeUnderCategorie();
                    props.openSpectre();
                    }} style={{cursor: 'pointer', color: 'rgb(147, 147, 147)'}}>{title.grey}</span><span style={{cursor: 'pointer'}}onClick={() => {
                        props.closeUnderCategorie();
                        props.setSpectreTopBarToOne();
                        props.closeTheme();
                        props.changeLinkChoiceHandler(null);
                        props.categorie(props.underCategorie);
                        props.openCategorie()}}>{title.black}</span><span style={{ color: 'rgb(147, 147, 147)'}}>{slash}</span> {titleThird}</p>
            </div>
            <div  style={styleTheme} className={classes.fullWidthContainer}>
                <div style={style.firstContainer}>
                    {props.link !== null && <div className={classes.decision}>
                                        <a className={classes.lien} href={props.link} rel="noopener noreferrer" target="_blank"><button className={classes.button + ' ' + classe}>Décision</button></a>
                                    </div>}
                    <div className={classes.alignContainer}>
                        {fenetre.leftWindow}
                    </div>
                </div>
                <div style={style.secondContainer}>
                    <div className={classes.alignContainerSD}>
                        {fenetre.rightWindow}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Radium(underCategories);