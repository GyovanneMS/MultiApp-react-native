import React from "react";
import { View, Text } from "react-native";
import estiloHardSkills from "../style/HardSkills";

export default function Grafico(props){
    return <View style={estiloHardSkills.grafico}>
                <View style={[estiloHardSkills.graficoBarra, {width:  `${props.porcentagem}%`}]}>
                    <Text style={estiloHardSkills.graficoTexto}>
                        { props.porcentagem + "%"}
                    </Text>
                </View>
            </View>

}