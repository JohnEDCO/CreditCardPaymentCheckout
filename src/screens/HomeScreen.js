import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/theme'

const HomeScreen = () => {  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.light,
  },
})

export default HomeScreen
