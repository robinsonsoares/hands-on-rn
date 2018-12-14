import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    wrapperLogoTripPlanner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapperLogoDevPleno: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 32
    },
    buttonBackground: {
        backgroundColor: 'white', 
        paddingBottom: 16, 
        paddingTop: 16
    }, 
    buttonText: {
        textAlign: 'center', 
        fontSize: 18, 
        color: 'black'
    }
})