import GoogleMapReact from 'google-map-react';

type MapProps = {
    lat: number,
    lng: number
}

const Marker = () => (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#B22D41"
             className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
    </div>
);


const Map = ({lat, lng}: MapProps) => {

    const center = {
        lat: lat,
        lng: lng,
    }

    console.log(center)

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