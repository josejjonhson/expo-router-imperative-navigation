import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function SignUp(){
    function back(){
        router.back();
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={back} >
                <Text style={styles.back} >Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    back: { fontSize: 16, fontWeight: "bold" }
})