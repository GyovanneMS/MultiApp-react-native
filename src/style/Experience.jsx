import { StyleSheet } from "react-native"

const estiloExperience = StyleSheet.create({
    tela: {
        backgroundColor: "#fff"
    },
    topo: {
        alignItems: "center",
        backgroundColor: "#f54748",
    },
    topoImagem: {
        height: "50%" 
    }, 
    topoTexto: {
        color: "#fff",
        fontSize: 32,
        textAlign: "center"   
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
        fontSize: 24,
        marginVertical: 16,
    }

});

export default estiloExperience;