import { ScrollView, StatusBar, View, Text, Image, StyleSheet } from "react-native";
import React, {useEffect, useState} from "react";
import estiloExperience from"../style/Experience.jsx";

export default function Experience(){
    return <ScrollView>
    <StatusBar backgroundColor="#f54748" barStyle="light-content"/>
        <View style={ estiloExperience.topo }>
            <Image 
              style={ estiloExperience.topoImagem }
              source={ require("../assets/a vida é um jogo.jpg") }/>
            <Text style={ estiloExperience.topoTexto }> 
                Minhas experiências 
            </Text>
        </View>
        <View style={ estiloExperience.receita }>
            <Text style={ estiloExperience.receitaTitulo }> NOME DA RECEITA </Text>
            <Image
                style={ estiloExperience.receitaImagem }
                source={ require("../assets/splash.png") }/>
            </View>
            <Text style={ estiloExperience.receitaSubtitulo }> INGREDIENTES </Text>
            <Text>
            1 Colher de açúcar { "/n" }
            1 Xícara de trigo
            </Text>
            <Text style={ estiloExperience.receitaSubtitulo }> MODO DE PREPARO </Text>
            <Text>
            Em um liquidificador... { "/n" }
            Acrescente o fermento...
            </Text>
  </ScrollView>
}