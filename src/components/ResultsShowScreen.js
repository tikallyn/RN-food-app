import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import yelp from "../api/yelp"

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 5,
        alignSelf: 'center'
    },
    image: {
        alignSelf: 'center',
        width: 300,
        height: 180,
        borderRadius: 4,
        marginBottom: 8
    }
})

export default ResultsShowScreen