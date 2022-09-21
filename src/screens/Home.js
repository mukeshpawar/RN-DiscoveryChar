
import  React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Modal,
  ActivityIndicator,
  TouchableHighlight,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

// import NetInfo from "@react-native-community/netinfo";

import styles from './styles/appStyles';

import CustomLabel from '../components/CustomLabel';

import {PRODUCT_URL} from '../constants/constants';

import {
    productError,
    loadingProductStart,
    productSuccess,
} from '../redux/actions/movieActions';

import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = props => {
  const productData = useSelector(store => store.rMovie.data);
  const productError = useSelector(store => store.rMovie.error);
  const productModalVisible = useSelector(
    store => store.rMovie.isLoaderVisible,
  );
  
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [localData, setLocalData] = useState({});

  useEffect(() => {
    callProduct();
  }, []);

  checkConnectivity = ()=> {
     NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected)
            if (state.isConnected)
            {
                callProduct(); 
                console.log("Internet is ON")
            }
            else{
                console.log("Internet is Offf")
                Alert.alert('No Internet found ', [
                    {
                    text: 'OK',
                    onPress: () => {
                    },
                    },
                ]);
            }
        }).catch(error => {
            console.log(error);
        })
    }
  
  const callProduct = async () => {
    try {
      dispatch(loadingProductStart());
      const response = await fetch(PRODUCT_URL);
      const jsonResponse = await response.json();
      dispatch(productSuccess(jsonResponse));
    } catch (error) {
      console.log('Error =====> ', error.message);
      dispatch(productError(error.message));
    }
  };

 //  const prdUrl = PRODUCT_URL + '?page=' + pageCount;

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  const constructItem = ({item, index, separators}) => (

    // itemIcon = item.imageUrl
    // ?item.imageUrl
    // :require('../images/empty-image.png')

  
    <TouchableHighlight
      key={item.key}
      onPress={() => {
        console.log('====> ITEM DETAIL -----> ', item);
         props.navigation.navigate('Detail Screen', item);
      }}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.itemContainer}>
        {console.log('====> ', index)}
        <CustomLabel text={item.name} />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.imageUrl ? item.imageUrl : 'empty-image.png',
          }}
        />
      </View>
    </TouchableHighlight>
  );

updateSearch = value => {
    var result = [];
    result = productData.data.filter(data => {
        return data.name.match(value);
    })
   if (result.length >= 1 && result != null) {
      setLocalData(result);
    } else {
      noDataFound(value);
    }

  };

  const noDataFound = value => {
    Alert.alert('No data found ', value, [
      {
        text: 'OK',
        onPress: () => {
          setSearchValue('');
        },
      },
    ]);
  };

  var flatListData = [];
    if (localData != null && localData.length> 1) {
       flatListData = localData;
    }else {
        flatListData = productData;
    }

  listData = flatListData;
  console.log("listDatalistDatalistDatalistData",listData);

  const flatListRef = useRef();
  const top = () =>
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  //   const moveToTop = flatListRef.current.scrollToIndex({
  //     index: 0,
  //     animated: true,
  //   });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginHorizontal: 10,
        }}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
          }}>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="white"
            placeholder="Search name"
            onChangeText={newText => setSearchValue(newText)}
            defaultValue={searchValue}
            autoFocus={false}
          />
          <View>
            <Button title="Search" onPress={() => updateSearch(searchValue)} />
          </View>
        </View>

        <FlatList
          ref={flatListRef}
          ItemSepratorComponet={itemSeparator}
          data={listData}
          renderItem={constructItem}
          keyExtractor={item => item._id}
          extraData={listData}
        />
        <Button
            // onPress={callProduct()}
          title=""
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={productModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size="small" color="#0000ff" />
              <Text style={styles.titleStyle}>Please wait...</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
