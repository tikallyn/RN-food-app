import React from "react"
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    const [term, setTerm] = useState('')
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder='Search' />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F1ECF5',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15,
    }
})

export default SearchBar