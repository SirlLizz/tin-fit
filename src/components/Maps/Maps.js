import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import "./Maps.css";

import points from "./points";

class Maps extends React.Component {

    state = {
        selectedPoint: points[0]
    };

    mapState = {
        center: [53.217558, 50.167299],
        zoom: 12
    };

    onPlacemarkClick = point => () => {
        this.setState({selectedPoint: point});
        this.mapState.center = point.coords;

    };

    onPlacemarkMouseEnter = point => () => {
    };

    onLoad() {

    };

    render() {
        const {selectedPoint} = this.state;

        return (
            <>
                <div className="studio-head">
                    <h1 className="studio-head-text">Наши студии</h1>
                    <div className="btn-group mr-2" role="group" aria-label="First group" onLoad={this.onLoad}>
                        {points.map((point, index) => (
                            <button key={index} type="button" className="btn btn-secondary" onClick={this.onPlacemarkClick(point)} >{point.title}</button>
                        ))}
                    </div>
                </div>
                <YMaps>
                    <Map defaultState={this.mapState} className="map">
                        <Clusterer
                            options={{
                                preset: "islands#invertedBlackClusterIcons",
                                groupByCoordinates: false
                            }}
                        >
                            {points.map((point, index) => (
                                <Placemark
                                    key={index}
                                    geometry={point.coords}
                                    onClick={this.onPlacemarkClick(point)}
                                    onMouseEnter={this.onPlacemarkMouseEnter(point)}
                                    options = {{
                                        preset: "islands#blackIcon"

                                    }}

                                />
                            ))}
                        </Clusterer>
                    </Map>
                </YMaps>
                {selectedPoint && (
                    <div>
                        <h1 className="title">Как нас найти?</h1>
                        <p className="decr-text">{selectedPoint.descr.toString()}</p>
                    </div>
                )}
            </>

        );
    }
}
export default Maps;

