import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from "./ResultDetail"
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
                        >
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)