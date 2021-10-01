import React from 'react'

const LocationMarker = ({lat,lng,onClick}) => {
    return (
        <div onClick={onClick} style={{fontSize: '2rem',color:'red'}}>
           <i class="fas fa-map-pin"></i>
        </div>
    )
}

export default LocationMarker
