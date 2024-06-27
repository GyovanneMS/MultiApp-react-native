import { StyleSheet } from "react-native"

const estiloExperience = StyleSheet.create({
    tela: {
        backgroundColor: "#fff"
    },
    topo: {
        height: '30%',
        backgroundColor: "#f54748",
    },
    // topoImagem: {
    //     height: "50%" 
    // }, 
    topoTexto: {
        color: "#fff",
        fontSize: 40,
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
        paddingTop: 90,
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