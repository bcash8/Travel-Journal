import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.image} alt="Palisade Golf Course" className="card-image" />
            <div className="card-text">
                <div className="card-location">
                    <img className="card-location-icon" src="https://cdn-icons-png.flaticon.com/512/67/67347.png" />
                    <h3>{props.item.location}</h3>
                    <a href={props.item.googleMaps} target="_blank">View on Google Maps</a>
                </div>

                <h1 className="card-title">{props.item.title}</h1>
                
                <div className="card-dates">
                    <h2>{props.item.startDate}</h2>
                    <h2> - </h2>
                    <h2>{props.item.endDate}</h2>
                </div>

                <p>{props.item.description}</p>
            </div>
        </div>
    )
}