import {useEffect, useRef, useState} from "react";
import '../../pages/Ayazhan/Contacts/Contacts.css'

export function MyMapComponent({zoom,}) {
    const ref = useRef();
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }
        console.log(latitude)
        console.log(longitude)
        new window.google.maps.Map(ref.current, {
            center: {lat: latitude, lng: longitude},
            zoom,
        });
    });

    return <div ref={ref} id="map" className="ymap" style={{height: '707px'}} />;
}
