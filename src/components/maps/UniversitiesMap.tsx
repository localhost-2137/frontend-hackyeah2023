import GoogleMapReact from 'google-map-react';
import Marker from "./Marker.tsx";
import {University} from "../../logic/types.ts";

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
                            defaultCenter={center} defaultZoom={6} yesIWantToUseGoogleMapApiInternals>
                {universities && universities.map(university => {
                    return <Marker isLink={true} universityId={university.id} lat={university.lat} lng={university.lng}
                                   key={university.id}/>
                })}
                <div>

                </div>
            </GoogleMapReact>
        </div>
    );
};

export default UniversitiesMap;