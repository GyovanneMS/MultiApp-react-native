import { View, StyleSheet, Text, Image, Linking, ScrollView } from "react-native";
import React, {useEffect, useState} from "react";
import estiloHome from "../style/Home";
import citacoesMotivacionais from '../data/APIMotivacional.js';
import axios from "axios";
import {FontAwesome6} from "@expo/vector-icons";

export default function Home(){

    const [fraseMotivacional, definirFraseMotivacional] = useState("");
    const [fraseAuthor, definirFraseAuthor] = useState("");

    useEffect(function() {
        axios.get('https://zenquotes.io/api/random')
        .then(response => {
          const data = response.data;
          definirFraseAuthor(data[0].a);
          definirFraseMotivacional(data[0].q);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, [])

    function handleEmailPress(){
        Linking.openURL('mailto:gyovannecontato@gmail.com');
    }

    function handlePhonePress(){
        Linking.openURL('tel:+119781789999');
    }

    function handleGithubPress(){
        Linking.openURL('https://github.com/GyovanneMS');
    }

    function handleLinkedinPress(){
        Linking.openURL('https://www.linkedin.com/in/gyovanne-martins-612923240/');
    }
    return <ScrollView contentContainerStyle={estiloHome.container}>
        <View style={estiloHome.body}>
            <Image 
                source={require('../assets/chileAnagonye.jpg')}
                style={estiloHome.imageProfile}/>
            <View style={estiloHome.textFieldTop}>
                <Text style={[estiloHome.textColor, {fontWeight: 600}]}>
                    Gyovanne Martins Sabará
                </Text>
            </View>
            <View style={estiloHome.textFieldTop}>
                <Text style={[estiloHome.textColor]}>
                    18 anos || Desenvolvedor Web e DBA
                </Text>
            </View>
            <View style={estiloHome.textFieldMid}>
                <Text style={[estiloHome.textColor, {fontWeight: 600}]}>
                    Perfil
                </Text>
                <Text style={[estiloHome.textColor, {textAlign: "justify"}]}>
                    Olá, eu sou o Gyovanne e sou DataBase Administrator, mas faço de tudo um pouco.
                    Adoro programar em SQL, fazer modelagem DER e MER e tudo com que tem haver com banco de dados.
                </Text>
            </View>

            <View style={estiloHome.textFieldMid}>
                <Text style={[estiloHome.textColor, {fontWeight: 600}]}>
                    Educação:
                </Text>
                <Text style={[estiloHome.textColor, {textAlign: "justify"}]}>
                    CURSO DE JOGOS E OUTRAS TECNOLOGIAS {'\n'}
                    Supergeeks: 2017 - Atual, {'\n'}
                    DESENVOLVIMENTO DE SISTEMAS {'\n'}
                    SENAI (curso técnico): Jan/2022 - Jun/2023{'\n'}
                    ANÁLISE E DESENVOLVIMENTO DE SISTEMAS {'\n'}
                    FATEC Carapicuíba: Fev/2024 - Dez/2026
                </Text>
            </View>
            <View style={estiloHome.textFieldBottom}>
                <Text style={[estiloHome.textColor, estiloHome.textSize, estiloHome.item]} onPress={handleEmailPress}><FontAwesome6 name="at" size={32} color={"black"}/> Email</Text>
                <Text style={[estiloHome.textColor, estiloHome.textSize, estiloHome.item]} onPress={handlePhonePress}><FontAwesome6 name="phone" size={32} color={"black"}/>{`\n`}Celular</Text>
                <Text style={[estiloHome.textColor, estiloHome.textSize, estiloHome.item]} onPress={handleGithubPress}> <FontAwesome6 name="github" size={32} color={"black"}/> Github</Text>
                <Text style={[estiloHome.textColor, estiloHome.textSize, estiloHome.item]} onPress={handleLinkedinPress}><FontAwesome6 name="linkedin" size={32} color={"black"}/> Linkedin</Text>
            </View>
        </View>
    </ScrollView>
}