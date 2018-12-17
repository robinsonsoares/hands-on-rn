import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'

class TripsScreen extends Component {
    static navigationOptions = { 
        header: null
    }
    render(){
        const dim = Dimensions.get('window')
        return (
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }}>
                <View style={{
                    backgroundColor: 'red',
                    flex: 1
                }}>>
                    <Text>Mapa</Text>
                </View>
                <View style={{
                    backgroundColor: 'pink'
                }}>>
                    <View style={{
                        backgroundColor: 'white',
                        paddingTop: 16,
                        paddingLeft: 16
                    }}>
                        <View style={{
                            backgroundColor: 'green',
                            width: dim.width-32,
                            height: 144
                        }}>
                        <Text>Image</Text></View>
                        <Text>Eurotrip 2019</Text>
                        <Text style={{
                            position: 'absolute',
                            top: 144-16,
                            right:32,
                            textAlign: 'right'
                        }}>R$ 5000</Text>
                    </View>                    
                </View>
            </View>
        )
    }
}
export default TripsScreen