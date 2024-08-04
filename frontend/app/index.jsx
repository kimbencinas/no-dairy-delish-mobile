import React from 'react'
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>NoDairyDelish</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})