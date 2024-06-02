import { Map } from "react-kakao-maps-sdk";

const Maps = () => {
    return (
        <>
            <Map
                className="map"
                center={{ lat: 33.5563, lng: 126.79581 }}
                level={3}
            ></Map>
        </>
    )
}

export default Maps;