import React, { useState } from "react"
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar"

const SearchScreen = () => {
    const [term, setTerm] = useState('')

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log('submitted')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        ...StyleSheet.absoluteFillObject
    }
})

export default SearchScreen