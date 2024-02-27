import { View, Text, Pressable, Image } from "react-native";
import styles from "./styles";

export default function Product({ navigation, route }) {
    const { id, valor, imagem, lanche } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product</Text>
            <Text style={styles.text2}>{lanche}</Text>
            <Image source={{ uri: imagem }} style={{ width:300, height: 300 }} />
            <Text style={styles.text2}>{valor}</Text>           
        </View>
    );
}
