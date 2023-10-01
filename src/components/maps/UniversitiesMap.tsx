import GoogleMapReact from 'google-map-react';
import {University} from "../../logic/types.ts";
import Marker from "./Marker.tsx";

type UniversitiesMapProps = {
    universities: University[]
}

const UniversitiesMap = ({universities}: UniversitiesMapProps) => {

    const center = {
        lat: 51.9194,
        lng: 19.1451
    }

    return (
        <div className="w-full h-[600px]">
            <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyBBrgkDjBbbVikmSAVbSo85hTemAxKOCfc'}}
                            defaultCenter={center} defaultZoom={4} yesIWantToUseGoogleMapApiInternals>
                {universities && universities.map(university => {
                    <Marker lat={university.lat} lng={university.lng} key={university.id}/>
                })}
            </GoogleMapReact>
        </div>
    )
}

export default UniversitiesMap