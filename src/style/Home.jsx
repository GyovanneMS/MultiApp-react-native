import { StyleSheet } from "react-native";

const estiloHome = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#24292e',
        //padding: 5,
    },
    body: {
        backgroundColor: '#24292e',
        letterSpacing: 1,
        width: 400,
        padding: 12,
        alignItems: 'center',
    },
    imageProfile: {
        width: '80%',
        height: 300,
        borderRadius: 150,
        marginBottom: 20,
        marginTop: 30
      },
    textColor: {
        color: "#fff",
    },
        textFieldTop: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        backgroundColor: '#808080',
        borderRadius: 45,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%'
    },
        textFieldMid: {
        marginBottom: 10,
        backgroundColor: '#808080',
        borderRadius: 40,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%'
    },
    textFieldBottom: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#808080',
        borderRadius: 45,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%',
        height: 120
    },

    textSize: {
        flex: 1,
        justifyContent: 'center',
        flexWrap: "wrap",
        alignContent: 'center',
        alignItems: 'center',
    },
    item: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'center'
    },
});

export default estiloHome;