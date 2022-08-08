import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import points from "./source/points";

const mapState = {
    center: [55.751574, 37.573856],
    zoom: 5
};

class Contact extends React.Component {

    state = {
        selectedPoint: null
    };

    onPlacemarkClick = point => () => {
        this.setState({selectedPoint: point});
    };

    render() {
        const {selectedPoint} = this.state;

        return (
            <div>
                <p>This is contact page!</p>
                <YMaps>

                    <Map defaultState={mapState}>
                        <Clusterer
                            options={{
                                preset: "islands#invertedVioletClusterIcons",
                                groupByCoordinates: false
                            }}
                        >
                            {points.map((point, index) => (
                                <Placemark
                                    key={index}
                                    geometry={point.coords}
                                    onClick={this.onPlacemarkClick(point)}
                                />
                            ))}
                        </Clusterer>
                    </Map>
                </YMaps>
                {selectedPoint && (
                    <div>
                        <h1>Selected point: {selectedPoint.title}</h1>
                        <p>{selectedPoint.descr}</p>
                    </div>
                )}
            </div>

        );
    }
}
export default Contact;