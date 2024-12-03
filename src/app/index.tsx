import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Index(){
    function signUp(){
        router.navigate("/sign-up");
    }

    return (
        <View style={styles.container} >
                <TouchableOpacity activeOpacity={ 0.7 } style={styles.button} onPress={signUp} >
                    <Text style={styles.label} >Criar Conta</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    label: { fontSize: 16, fontWeight: "bold", color: "#fff" },
    button: { backgroundColor: "#000", paddingHorizontal: 32, paddingVertical: 10,  borderRadius: 10}
})