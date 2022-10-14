import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
export default StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        margin: 'auto'
    },
    label: {
        flex: 0.1
    },
    input: {
        flex: 0.9,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        marginTop: 20
    },
    checkbox: {
        flexDirection: "row",
        alignItems: "center"
    },
    radio: {
        flexDirection: "row",
        alignItems: "center"
    },
    hContainer: { marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container2: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43a1c9',
    },
    containerLocation: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titreText: {
        fontSize: 20,
        textAlign: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 20
    },
    title: {
        fontSize: 24,
    }
})