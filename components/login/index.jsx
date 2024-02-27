import React,{useState} from "react"
import { View, Text, Pressable, TextInput, Alert } from "react-native"
import styles from "./styles"

export default function Login({navigation}) {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    
    function logar(){
        if(user=='manu' && pass=='123'){
            navigation.navigate('Home')
        }else{
            Alert.alert('Erro ao logar!!!')
        }
    }

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.text}>Login</Text>
            </View>

            <View style={styles.caixaX}>
                <TextInput
                    style={styles.caixa}
                    placeholder="User"
                    value={user}
                    onChangeText={setUser}
                />
            </View>

            <View style={styles.caixaX}>
                <TextInput
                    style={styles.caixa}
                    placeholder="Password"
                    value={pass}
                    onChangeText={setPass}
                    secureTextEntry={true}
                />
            </View>


            <View style={styles.caixaX}>
                <Pressable
                    style={styles.button}
                    onPress={()=>logar()}
                >
                    <Text style={styles.textButton}>Ok</Text>
                </Pressable>
            </View>

        </View>

    )
}