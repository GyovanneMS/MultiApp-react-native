import { StyleSheet } from "react-native";

const estiloMap = StyleSheet.create({
    tela: { flex: 1 }, // Define a tela para ocupar toda a área disponível
    indicador: { backgroundColor: "#144272", padding: 32 }, // Estilo do indicador com fundo azul escuro e espaçamento interno de 32
    indicardorTexto: { color: "white", fontSize: 20, gap: 20, marginTop: 10 }, // Estilo para o texto do indicador, com cor branca, tamanho de fonte 20, espaçamento entre linhas de 20 e margem superior de 10
    mapa: { height: "100%", width: "100%" }, // Define o mapa para ocupar toda a altura e largura disponível
    Imagem: { height: 30, width: 30, backgroundColor: "#FFFF00" }, // Estilo para uma imagem com altura e largura de 30 unidades e fundo amarelo
    textInput: { // Estilo para um campo de entrada de texto
        backgroundColor: "white", // Fundo branco
        fontWeight: "semibold", // Peso da fonte semibold (não é um valor padrão, pode precisar ser ajustado)
        margin: 10, // Margem de 10 unidades ao redor do campo
        fontSize: 20, // Tamanho da fonte de 20 unidades
        borderBlockColor: "black", // Cor da borda preta (possível erro tipográfico, poderia ser borderColor)
        borderWidth: 3, // Largura da borda de 3 unidades
        paddingLeft: 20 // Preenchimento interno à esquerda de 20 unidades
    }
});

export default estiloMap;
