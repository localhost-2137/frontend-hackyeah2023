import {Link} from "react-router-dom";

type markerProps = {
    isLink?: boolean,
    universityId?: number,
    onMouseOver?: () => void,
    lat: number,
    lng: number,
}

const Marker = ({isLink, universityId, onMouseOver}: markerProps) => {

    if (isLink) {
        return (<Link to={`/university/${universityId}`} onMouseOver={onMouseOver}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#B22D41"
                 className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
        </Link>)
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#B22D41"
                 className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
        </div>
    )
}


export default Marker