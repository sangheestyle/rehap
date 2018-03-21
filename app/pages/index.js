import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDx2YUaqkF1uYODYC-tiYG5T3u01ReyFQk",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: {lat: 40.7852126, lng: -73.9778406},
    zoom: 15,
    positions: [
        ['Barney Greengrass', {lat: 40.7880323, lng: -73.9743894}],
        ['Beer Shop NYC', {lat: 40.784103, lng: -73.9801517}],
        ['Levain Bakery', {lat: 40.7799286, lng: -73.9825209}],
        ['Sushi Yasaka', {lat: 40.7796602, lng: -73.9855967}],
        ['sweetgreen', {lat: 40.7798304, lng: -73.9871202}],
        /*
        ['Chirping Chicken', {lat: 40.7812752, lng: -73.9966153}],
        ['Irving Farm Coffee Roasters', {lat: 40.7826224, lng: -73.9952421}],
        ['St Agnes Library', {lat: 40.784841, lng: -73.9796547}],
        ['Barnes & Noble', {lat: 40.7860836, lng: -73.9809578}],
        ['Peacefood Cafe', {lat: 40.785275, lng: -73.9781063}],
        ['George Keeley', {lat: 40.785859, lng: -73.9771443}],
        ['Book Culture on Columbus', {lat: 40.783776, lng: -73.9750796}],
        ['Osteria Cotta', {lat: 40.7855246, lng: -73.9732191}],
        ['Joe Coffee', {lat: 40.7857649, lng: -73.9735261}],
        ['Milk Bar Upper West Side', {lat: 40.7871151, lng: -73.9715038}],
        ["Pizza Pete's", {lat: 40.7862402, lng: -73.9731394}],
        ['The Parlour Bar & Restaurant', {lat: 40.7883833, lng: -73.977745}],
        ['Westsider Rare & Used Books Inc.', {lat: 40.7846039, lng:-73.979066}],
        ['Great Lawn', {lat: 40.7812648, lng: -73.9677283}],
        ['Bridle Path', {lat: 40.785373, lng: -73.966937}],
        ['Birdbath Bakery', {lat: 40.785801, lng: -73.9751507}],
        ['Han Dynasty', {lat: 40.7875643, lng: -73.9786116}],
        ['Shake Shack', {lat: 40.7808622, lng: -73.9787299}],
        ['Orwashers Bakery', {lat: 40.7845141, lng: -73.9775304}],
        ["Jacob's Pickles", {lat: 40.7866273, lng: -73.9777246}],
        */
    ]
  }),
  withScriptjs,
  withGoogleMap
)(props => (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={{ lat: props.center.lat, lng: props.center.lng }}>
        {props.isMarkerShown &&
            props.positions.map(pos => (<Marker position={{ lat: pos[1].lat, lng: pos[1].lng }} />))}
    </GoogleMap>
))

export default () => (
    <div>
        <h3>My favorite spots in Upper West Side.</h3>
        <MyMapComponent isMarkerShown />
    </div>
)