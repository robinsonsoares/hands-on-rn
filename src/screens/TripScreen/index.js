import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

class TripScreen extends Component{
    renderItem = item => {
        return(
            <View>
                <Text>{item.item.name}</Text>
                <Text>{item.item.description}</Text>
                <Text>{item.item.price}</Text>
            </View>
        )
    }
    render(){
        const trip = {
            name: 'Eurotrip 2019',
            price: 'R$ 5000',
            places: [
                {id: '1', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
                {id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0}
            ]
        }
        return ( 
            <View>
                <View>
                    <Text>Header</Text> 
                </View>
                <FlatList 
                    data={trip.places}
                    renderItem={this.renderItem}
                />
            </View> 
        )}
}
export default TripS