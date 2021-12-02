import React from "react";
import { View, Text, TouchableOpacity, Share, TouchableOpacityBase } from "react-native";
import styles from "./style";

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu IMC hoje é: " +props.resultImc,
        })
    }

    return(
        <View styles={styles.contextImc}>
            <View style={styles.boxSharebutton}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}
                >
                <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    );
}