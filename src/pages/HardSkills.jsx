import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, Pressable, Dimensions } from 'react-native';
import Skills from '../data/Skills.js';
import Janela from '../components/Janela';
import { useLocalizacao } from '../data/Localizaco.js';
import { Picker } from '@react-native-picker/picker';


export default function HardSkills() {
  const [competencias, definirCompetencias] = useState(Skills);
  const [Level, definirLevel] = useState("");
  const [Tipo, definirTipo] = useState("");
  const [Nome, definirNome] = useState("");
  const [mostrar, definirMostrar] = useState(false);
  const [ localizacao, definirLocalizacao ] = useState({})

  useEffect(function() {
    async function ObterLocalizacao() {
      await Location.requestForegroundPermissionsAsync()
      definirLocalizacao(await Location.getCurrentPositionAsync({}))
      console.log(localizacao);
    }
    ObterLocalizacao()
  }, [])

  function AdicionarCompetencias() {
    const novaCompetencia = { Nome, Level, Tipo };
    definirCompetencias([...competencias, novaCompetencia]);
    definirLevel("");
    definirNome("");
    definirTipo("");
  }

  useEffect(() => {
    async function useLocal() {
      const localizacao = useLocalizacao();
      if (localizacao._j.lat == -23.5689496 && localizacao._j.long == -46.8108584) definirMostrar(true);
    }
    useLocal();
  }, []);

  function colorText(nivel) {
    if (nivel === 'Alto') {
      return { color: '#00FF00' }; // verde
    } else if (nivel === 'Médio') {
      return { color: '#FFFF00' }; // amarelo
    } else {
      return { color: '#FF0000' }; // vermelho
    }
  }

  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {mostrar && (
        <View>
          <Janela>
            <Text style={{ fontSize: 18, marginBottom: 16, marginTop: 16, textAlign: "center" }}>Adicionar Competência</Text>
            <TextInput
              style={{ backgroundColor: "#fff", marginBottom: 16, padding: 8 }}
              value={Nome}
              onChangeText={definirNome}
              placeholder='Competência'
              keyboardType='default'
            />
            <Picker
              selectedValue={Level}
              style={{ height: 50, width: '100%', marginBottom: 16 }}
              onValueChange={(itemValue) => definirLevel(itemValue)}
            >
              <Picker.Item label="Baixo" value="Baixo" />
              <Picker.Item label="Médio" value="Médio" />
              <Picker.Item label="Alto" value="Alto" />
            </Picker>
            <Picker
              selectedValue={Tipo}
              style={{ height: 50, width: '100%', marginBottom: 16 }}
              onValueChange={(itemValue) => definirTipo(itemValue)}
            >
              <Picker.Item label="Linguagem" value="Linguagem" />
              <Picker.Item label="Tecnologia" value="Tecnologia" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
            <Pressable onPress={AdicionarCompetencias}>
              <View style={{ backgroundColor: "#698269", padding: 8 }}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Adicionar</Text>
              </View>
            </Pressable>
          </Janela>
        </View>
      )}

      <Janela>
        <Text style={styles.header}>Linguagens</Text>
        <View style={styles.container}>
          {competencias.filter(competencia => competencia.Tipo === 'Linguagem').map((competencia, indice) => (
            <View key={indice} style={[styles.square, { backgroundColor: "#F5F5DC" }]}>
              <Text style={[styles.text, colorText(competencia.Level)]}>
                {competencia.Nome}
              </Text>
              <Text style={[styles.text, colorText(competencia.Level)]}>
                {competencia.Level}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.header}>Tecnologia</Text>
        <View style={styles.container}>
          {competencias.filter(competencia => competencia.Tipo === 'Tecnologia').map((competencia, indice) => (
            <View key={indice} style={[styles.square, { backgroundColor: "#ADD8E6" }]}>
              <Text style={[styles.text, colorText(competencia.Level)]}>
                {competencia.Nome}
              </Text>
              <Text style={[styles.text, colorText(competencia.Level)]}>
                {competencia.Level}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.header}>Outros</Text>
        <View style={styles.container}>
          {competencias.filter(competencia => competencia.Tipo === 'Outro').map((competencia, indice) => (
            <View key={indice} style={[styles.square, { backgroundColor: "#E6E6FA" }]}>
              <Text style={[styles.text, colorText(competencia.Level)]}>
                {competencia.Nome}
              </Text>
              <Text style={[styles.text, colorText(competencia.Level)]}>
                {competencia.Level}
              </Text>
            </View>
          ))}
        </View>
      </Janela>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  square: {
    width: Dimensions.get('window').width / 3 - 16, // Ajuste para margens
    height: Dimensions.get('window').width / 3 - 16, // Ajuste para margens
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    marginHorizontal: 8,
  },
  text: {
    textAlign: 'center',
  },
});
