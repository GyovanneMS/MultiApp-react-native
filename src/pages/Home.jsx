import { View, StyleSheet, Text, Image, Linking, ScrollView } from "react-native";
import React, {useEffect, useState} from "react";
import estiloHome from "../style/Home";
import citacoesMotivacionais from '../data/APIMotivacional.js';
import axios from "axios";

export default function Home(){

    const [fraseMotivacional, definirFraseMotivacional] = useState("");
    const [fraseAuthor, definirFraseAuthor] = useState("");

    useEffect(function() {
        axios.get('https://zenquotes.io/api/random')
        .then(response => {
          const data = response.data;
          console.log(`Quote: ${data[0].q}\nAuthor: ${data[0].a}`);
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
                    Competências:
                </Text>
                <Text style={[estiloHome.textColor, {textAlign: "justify"}]}>
                    Lógica de programação, Raciocínio computacional, Python, HTML, CSS, JavaScript, React, React Native, SQL, Mainframe, COBOL e PHP.
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
                <Text style={[estiloHome.textColor, estiloHome.textSize]} onPress={handleEmailPress}>Email</Text>
                <Text style={[estiloHome.textColor, estiloHome.textSize]} onPress={handlePhonePress}>Telefone</Text>
                <Text style={[estiloHome.textColor, estiloHome.textSize]} onPress={handleGithubPress}>Github</Text>
                <Text style={[estiloHome.textColor, estiloHome.textSize]} onPress={handleLinkedinPress}>Linkedin</Text>
            </View>
        </View>
        <Text>{fraseMotivacional}</Text>
        <Text>{fraseAuthor}</Text>
    </ScrollView>
}