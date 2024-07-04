import { StyleSheet } from "react-native";

const estiloExperience = StyleSheet.create({
    tela: {
        backgroundColor: "#fff", // Cor de fundo branca
        marginBottom: 30 // Margem inferior de 30 unidades (valor numérico, não string)
    },
    topo: {
        height: '5%', // Altura de 5% do contêiner pai
        backgroundColor: "#f54748", // Cor de fundo vermelho escuro
    },
    topoTexto: {
        color: "#fff", // Cor do texto branca
        fontSize: 30, // Tamanho da fonte de 30 unidades
        textAlign: "center", // Alinhamento central do texto
        justifyContent: "center", // Justificação central do conteúdo
        paddingTop: 50, // Preenchimento superior de 50 unidades
    },
    receita: {
        marginVertical: 16, // Margem vertical de 16 unidades
        marginHorizontal: 32 // Margem horizontal de 32 unidades
    },
    receitaImagem: {
        height: 200, // Altura fixa de 200 unidades
        width: "auto" // Largura automática, ajusta ao tamanho do conteúdo
    },
    receitaTitulo: {
        fontSize: 32, // Tamanho da fonte de 32 unidades
        fontWeight: "bold", // Fonte em negrito
        marginVertical: 16, // Margem vertical de 16 unidades
        textAlign: "center" // Alinhamento central do texto
    },
    receitaSubtitulo: {
        fontSize: 20, // Tamanho da fonte de 20 unidades
        marginVertical: 16, // Margem vertical de 16 unidades
    },
    experiencia: {
        fontWeight: "bold", // Fonte em negrito
        fontFamily: 'Verdana' // Família da fonte Verdana
    }
});

export default estiloExperience;
