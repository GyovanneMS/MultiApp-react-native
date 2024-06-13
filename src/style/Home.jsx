import { StyleSheet } from "react-native";

const estiloHome = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#24292e",
        // justifyContent: "center",
        margin: 0,
    },
    body: {
        backgroundColor: "32f363d",
        letterSpacing: "1px",
        width: 300,
        padding: 12,
    },
    imageProfile: {
        width: '100%',
        height: 300,
        borderRadius: 9000,
    }, 
    textColor: {
        color: "#fff",
    },
    textFieldTop: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
        justifyContent: "center"
    },
    textFieldMid: {
        marginBottom: 10
    },
    textFieldBottom: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    textSize: {
        fontSize: 20,
        color: "yellow",
    }
});

export default estiloHome;