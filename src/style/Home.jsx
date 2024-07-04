import { StyleSheet } from "react-native";

const estiloHome = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#24292e',
        padding: 5, // Espaçamento interno de 5 unidades
    },
    body: {
        backgroundColor: '#24292e',
        letterSpacing: 1, // Espaçamento entre caracteres de 1 unidade
        width: 400, // Largura fixa de 400 unidades
        padding: 12, // Espaçamento interno de 12 unidades
        alignItems: 'center', // Alinha os itens no centro horizontalmente
    },
    imageProfile: {
        width: '80%', // Largura de 80% do contêiner pai
        height: 300, // Altura fixa de 300 unidades
        borderRadius: 150, // Borda arredondada com raio de 150 unidades (para criar um círculo com 300x300)
        marginBottom: 20, // Margem inferior de 20 unidades
        marginTop: 30, // Margem superior de 30 unidades
    },
    textColor: {
        color: "#fff", // Cor do texto branca
    },
    textField: {
        backgroundColor: '#808080', // Cor de fundo cinza
        borderRadius: 45, // Borda arredondada com raio de 45 unidades
        padding: 10, // Espaçamento interno de 10 unidades
        marginBottom: 10, // Margem inferior de 10 unidades
        textAlign: 'center', // Alinhamento central do texto
        width: '100%', // Largura de 100% do contêiner pai
    },
    textFieldTop: {
        ...this.textField, // Herda estilos de textField
        flexDirection: 'row', // Itens alinhados em linha
        justifyContent: 'center', // Alinhamento central dos itens na linha
        gap: 10, // Espaço entre os itens de 10 unidades
    },
    textFieldMid: {
        ...this.textField, // Herda estilos de textField
        marginBottom: 10, // Margem inferior de 10 unidades
    },
    textFieldBottom: {
        ...this.textField, // Herda estilos de textField
        flexDirection: 'row', // Itens alinhados em linha
        justifyContent: 'space-between', // Espaço entre os itens
        height: 120, // Altura fixa de 120 unidades
    },
    textSize: {
        flex: 1, // Cresce para ocupar o espaço disponível
        justifyContent: 'center', // Alinha no centro verticalmente
        flexWrap: "wrap", // Quebra de linha automática
        alignContent: 'center', // Alinha no centro horizontalmente
        alignItems: 'center', // Alinha no centro verticalmente
    },
    item: {
        flex: 1, // Cresce para ocupar o espaço disponível
        flexDirection: 'column', // Itens alinhados em coluna
        alignItems: 'center', // Alinha no centro horizontalmente
        marginVertical: 10, // Margem vertical de 10 unidades
        justifyContent: 'center', // Alinha no centro verticalmente
    },
});

export default estiloHome;
