import { View, Text, Image, Pressable, Button, TextInput } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import estiloMap from "../style/Map.jsx";
import ponteiro from "../assets/adaptive-icon.png";
import { Ionicons, Entypo, FontAwesome6 } from "@expo/vector-icons";
import axios from "axios";
import { API_KEY } from "@env";
import {definirLocalizacaoGlobalmente} from "../data/Localizaco.js";
//Entypo - home

export default function Map() {
  const [localizacao, definirLocalizacao] = useState({});
  const [longitude, definirLongitude] = useState(0.0);
  const [latitude, definirLatitude] = useState(0.0);
  const [cidade, definirCidade] = useState("");
  const [rua, definirRua] = useState("");
  const icon = useRef(false);

  useEffect(function () {
    async function ObterLocalizacao() {
      await Location.requestForegroundPermissionsAsync();
      definirLocalizacao(await Location.getCurrentPositionAsync({}));
    }
    ObterLocalizacao();
  }, []);

  async function ReceberLocal() {
    try {
      const endereco = `${rua}, ${cidade}, Brazil`;
      const resposta = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          endereco
        )}&key=${API_KEY}`
      );
      if (Object.keys(resposta.data).length > 0) {
        definirLatitude(parseFloat(resposta.data.results[0].geometry.lat));
        definirLongitude(parseFloat(resposta.data.results[0].geometry.lng));
      }
      await definirLocalizacaoGlobalmente(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={estiloMap.tela}>
      {Object.keys(localizacao).length > 0 && (
        <>
          <View style={estiloMap.indicador}>
            <Text style={estiloMap.indicardorTexto}>Coloque sua rua e cidade</Text>
            <TextInput
              style={estiloMap.textInput}
              placeholder="Ex: Rua Avenida..."
              value={rua}
              onChangeText={definirRua}
            />
            <TextInput
              style={estiloMap.textInput}
              placeholder="Ex: São Paulo"
              value={cidade}
              onChangeText={definirCidade}
            />
            <Button onPress={ReceberLocal} title="Submeter" />
          </View>
          {/* <MapView
                initialRegion={{
                    latitude: {latitude},
                    longitude: {longitude},
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
                            title="Estamos aqui"
                            description="Estamos aqui">
                                <Pressable>
                                    <Ionicons name="location-outline" size={32} color={"red"} />
                                </Pressable>
                            </Marker>
                </MapView> */}
        </>
      )}
    </View>
  );
}
