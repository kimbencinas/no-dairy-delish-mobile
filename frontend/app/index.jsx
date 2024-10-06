import { useNavigation } from 'expo-router'
import React from 'react'
import 'nativewind'
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function App() {

    return (
        <SafeAreaView>
            <View>
                <Text>NoDairyDelish</Text>
            </View>
            <ScrollView>
                <View>
                    <Text>Welcome</Text>
                </View>
            </ScrollView>
            <View className="absolute bottom-0 bg-gray-200">
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Bookmarks</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
