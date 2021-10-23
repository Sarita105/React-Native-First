import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
    backgroundColor: '#91eaee',
       width: '100%',
       height: '100%',
       padding: 10,
      },
      gridView: {
        marginTop: 10,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 75,
        width: 75,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      start: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 45,
        width: 75,
        backgroundColor: '#f07228',
      }
});

export default styles;
