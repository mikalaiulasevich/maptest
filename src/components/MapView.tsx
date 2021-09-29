import * as React from "react";

import {StyleSheet, HostComponent, StyleProp, View, ViewStyle, requireNativeComponent} from 'react-native';

const RCTMGLMapView: HostComponent<React.FC> = requireNativeComponent<React.FC>('RCTMGLMapView');

type MapViewProperties = {
    children: React.ReactElement,
    style: StyleProp<ViewStyle>
}

const MapView: React.FC<MapViewProperties> =
    ({children, style}: MapViewProperties): JSX.Element => {
        return (
            <View style={[style, styles.container]} testID="RCTMGLMapView">
                <RCTMGLMapView>
                    {children}
                </RCTMGLMapView>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapView;

