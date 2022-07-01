import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import FontAwesomeIcon from './utilities/FontAwesomeIcons';
//@ts-ignore
import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1Ijoidm9wcGVuIiwiYSI6ImNsNHI4ZGd3ajBhNWwza21ueW04aXIzNDcifQ.9ss7beusIlPFUBdluhMVUQ';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation');
    throw new Error('Tu navegador no soporta el GeoLocation');
}



createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
// .use( store )
.use( router )
.mount('#app')