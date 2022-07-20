import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  },
];

const Item = ({index}) => (
  <View style={styles.item}>
    {index === 0 ? (
      <Image
        style={styles.itemTopImage}
        source={require('./images/mobile.jpg')}
      />
    ) : (
      <Image
        style={[styles.itemTopImage, {height: 300}]}
        source={require('./images/nature.jpg')}
      />
    )}

    <View>
      <View style={{padding: 20}}>
        <Text style={styles.smallText}>IPHONE SAVING PLAN</Text>
        <Text style={styles.bigText}>
          Save up for the the next iphone and get{' '}
          <Text style={{color: 'green'}}>
            get 10% Cashback
            <Text />
          </Text>
        </Text>
      </View>
      {index === 0 && (
        <View style={styles.listContainerBottomStyle}>
          <View>
            <Image
              style={styles.iconStyle}
              source={require('./images/truck.jpg')}
            />
            <Text style={styles.smallText2}>Priority Delivery</Text>
          </View>
          <View>
            <Image
              style={styles.iconStyle}
              source={require('./images/truck.jpg')}
            />
            <Text style={styles.smallText2}>Free charger</Text>
          </View>
          <View>
            <Image
              style={styles.iconStyle}
              source={require('./images/truck.jpg')}
            />
            <Text style={styles.smallText2}>Tortoise merch</Text>
          </View>
        </View>
      )}
    </View>
  </View>
);

const App = () => {
  const renderItem = ({item, index}) => {
    return <Item index={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDescStyle}>
        <View>
          <Text style={styles.smallText}>welcome back </Text>
          <Text style={styles.bigText}>Rahul Kumar</Text>
        </View>

        <View style={styles.circleStyle}>
          <Image
            style={styles.tortoiseStyle}
            source={{
              uri: 'https://icon-library.com/images/tortoise-icon/tortoise-icon-7.jpg',
            }}
          />
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f5',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  iconStyle: {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
  },
  bigText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainerBottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  itemTopImage: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  smallText: {
    fontSize: 13,
    fontWeight: '400',
  },
  smallText2: {
    fontSize: 8,
    fontWeight: '400',
  },
  circleStyle: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  userDescStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  tortoiseStyle: {height: 20, width: 20, margin: 5},
});

export default App;
