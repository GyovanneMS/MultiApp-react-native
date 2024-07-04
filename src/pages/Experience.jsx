import { ScrollView, StatusBar, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import estiloExperience from "../style/Experience.jsx";
import experiencias from "../data/Experiencia.js";

export default function Experience() {
    return (
        <ScrollView>
            <StatusBar backgroundColor="#f54748" barStyle="light-content" />
            <View style={estiloExperience.topo}>
                <Text style={estiloExperience.topoTexto}>
                    Minhas experiências
                </Text>
            </View>
            {
                experiencias.map((experiencia) => (
                    <View key={experiencia.id}>
                        <View style={estiloExperience.receita}>
                            <Text style={estiloExperience.receitaTitulo}>{experiencia.NomeExperiencia}</Text>
                            <Text style={estiloExperience.receitaSubtitulo}>{experiencia.Subtitulo}</Text>
                            <Image
                                style={estiloExperience.receitaImagem}
                                source={experiencia.Imagem}
                            />
                        </View>
                        <Text> 
                            {experiencia.Skills.map((Skill, index) => (
                                <Text key={index} style={estiloExperience.experiencia}>
                                    {Skill}
                                    {index < experiencia.Skills.length - 1 ? ', ' : ''}
                                </Text>
                            ))}
                        </Text>
                        <Text>
                            {experiencia.Experiencia}
                        </Text>
                    </View>
                ))
            }
        </ScrollView>
    );
}
