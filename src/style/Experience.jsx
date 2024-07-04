import { StyleSheet } from "react-native"

const estiloExperience = StyleSheet.create({
    tela: {
        backgroundColor: "#fff",
        marginBottom: "30"
    },
    topo: {
        height: '5%',
        backgroundColor: "#f54748",
    },
    topoTexto: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        paddingTop: 50,
    },
    receita: {
        marginVertical: 16,
        marginHorizontal: 32
    },
    receitaImagem: {
        height: 200,
        width: "auto" 
    },
    receitaTitulo: {
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 16, 
        textAlign: "center" 
    },
    receitaSubtitulo: {
        fontSize: 20,
        marginVertical: 16,
    }, 
    experiencia: {
        fontWeight: "bold",
    }

});

export default estiloExperience;