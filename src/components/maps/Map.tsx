import GoogleMapReact from 'google-map-react';
import Marker from "./Marker.tsx";

type MapProps = {
    lat: number,
    lng: number
}

const Map = ({lat, lng}: MapProps) => {

    const center = {
        lat,
        lng
    }

    return (
        <div className="w-full h-[600px]">
            <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyBBrgkDjBbbVikmSAVbSo85hTemAxKOCfc'}}
                            defaultCenter={center} defaultZoom={11} yesIWantToUseGoogleMapApiInternals
            >
                <Marker lat={lat} lng={lng} text=""/>
            </GoogleMapReact>
        </div>
    )
}

export default Map