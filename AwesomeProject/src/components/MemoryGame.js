import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import styles from './Styles';

const MemoryGame = () => {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [items, setItems] = useState([
    {name: 'A', code: '#1abc9c'},
    {name: 'B', code: '#2ecc71'},
    {name: 'C', code: '#3498db'},
    {name: 'D', code: '#9b59b6'},
    {name: 'E', code: '#34495e'},
    {name: 'F', code: '#16a085'},
    {name: 'G', code: '#27ae60'},
    {name: 'H', code: '#2980b9'},
    {name: 'A', code: '#1abc9c'},
    {name: 'B', code: '#2ecc71'},
    {name: 'C', code: '#3498db'},
    {name: 'D', code: '#9b59b6'},
    {name: 'E', code: '#34495e'},
    {name: 'F', code: '#16a085'},
    {name: 'G', code: '#27ae60'},
    {name: 'H', code: '#2980b9'},
  ]);
  const flipCard = (i) => {
     setOpenedCard((opened) => [...opened, i]);
  };
   const refresh = () => {
    setOpenedCard([]);
    setMatched([]);
  }
  useEffect(() => {
    if (openedCard.length < 2) return;

    const firstMatched = items[openedCard[0]];
    const secondMatched = items[openedCard[1]];

    if (secondMatched && firstMatched.name === secondMatched.name) {
      setMatched([...matched, openedCard[0], openedCard[1]]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);
  return (
    <View style={styles.mainView}>
      <FlatGrid
        itemDimension={75}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({item, index}) => {
          return(
            <TouchableOpacity onPress={() => flipCard(index)}>
          <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
          {(openedCard.includes(index) || matched.includes(index))&& 
          <Text style={styles.itemName}>{item.name}</Text>
          }
          </View>
            </TouchableOpacity>
        )}}
      />
         <TouchableOpacity onPress={() => refresh()}>
      <View style={styles.start}>
          <Text style={styles.itemName}>
              start
          </Text>
      </View>
      </TouchableOpacity>
      <Text>matched {(matched.length)/2}</Text>
    </View>
  );
};

export default MemoryGame;
