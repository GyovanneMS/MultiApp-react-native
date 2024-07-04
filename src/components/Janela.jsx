import React from "react";
import { View } from "react-native";
import estiloHardSkills from "../style/HardSkills";

export default function Janela(props){
    return <View style={ estiloHardSkills.janela }>
        { props.children }
    </View>
}