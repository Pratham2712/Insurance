import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';

const Map = () => {
    
    const coords = {
        lat: 19.100189,
        lng:  72.883850
    }
    
    return (
        <section>
            <div style={{width: '100%',height: '50vh'}}>
            <GoogleMapReact bootstrapURLKeys={{key : 'AIzaSyDCQAWU1m_jF9spycH_c50Htp5yxhgdg50'}} defaultCenter={coords} defaultZoom={13}>
                    <LocationMarker lat={coords.lat} lng={ coords.lng}/>
            </GoogleMapReact>
            </div>
        </section>
    )
}

export default Map



/* AIzaSyDCQAWU1m_jF9spycH_c50Htp5yxhgdg50 */
  /* lat: 19.100189,
            lng:  72.883850 */