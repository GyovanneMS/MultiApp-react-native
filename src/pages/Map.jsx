import { View, Text, Image, Pressable } from "react-native";
import React, {useEffect, useState, useRef} from "react";
import MapView, {Marker} from "react-native-maps";
import * as Location from "expo-location";
import estiloMap from"../style/Map.jsx";
import ponteiro from "../assets/adaptive-icon.png";
import {Ionicons, Entypo, FontAwesome6} from "@expo/vector-icons";
//Entypo - home

export default function Map(){

    const [ localizacao, definirLocalizacao ] = useState({})
    const icon = useRef(false)

    useEffect(function() {
        async function ObterLocalizacao() {
          await Location.requestForegroundPermissionsAsync()
          definirLocalizacao(await Location.getCurrentPositionAsync({}))
        }
        ObterLocalizacao();
      }, [])
    return <View style={ estiloMap.tela }>
        { 
            Object.keys(localizacao).length > 0 &&
            <>
                <View style={ estiloMap.indicador }>
                    <Text style={ estiloMap.indicardorTexto }> Distância da empresa até minha moradia </Text>
                    <Text style={ estiloMap.indicardorTexto }> Latitude: { localizacao.coords.latitude } </Text>
                    <Text style={ estiloMap.indicardorTexto }> Longitude: { localizacao.coords.longitude } </Text>
                    <Text style={ estiloMap.indicardorTexto }> Altitude: { localizacao.coords.altitude } </Text>
                    {/* <Image 
                        source="require(../../assets/ponter.webp)"
                        style={estiloMap.Imagem}/> */}
                </View>
                <MapView
                initialRegion={{
                    latitude: localizacao.coords.latitude,
                    longitude: localizacao.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                style={ estiloMap.mapa } >
                    <Marker
                        key={0}
                        coordinate={{
                            latitude: localizacao.coords.latitude,
                            longitude: localizacao.coords.longitude
                            }}
                            title="Aqui"
                            description="aqui">
                                <Pressable>
                                    <Ionicons name="business" size={32} color={"black"} />
                                </Pressable>
                            </Marker>
                </MapView>
            </>
        }
      </View>
}

