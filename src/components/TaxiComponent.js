import React, {Component} from 'react';
import {NetInfo, View, Text, FlatList, TouchableHighlight, StyleSheet, Image, Clipboard, Linking, Alert, ActivityIndicator} from 'react-native';

export default class TaxiComponent extends Component{
    constructor(){
        super();
        this.state = {
            dataList : null,
            isLoading: true
        }
    }
    //lấy dữ liệu từ web
    async componentDidMount(){
        try {
            const response = await fetch('http://lathanhhanh.tk/api/taxi.php');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataList: responseJson.data,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    _thongBao = (sodienthoai) => {
        Alert.alert(
            'Thông báo',
            'Sao chép '+sodienthoai+' thành công',
            [
              {
                text: 'Ok',
                onPress: () => this.props.navigation.navigate('Taxi'),
              },
            ],
            { cancelable: false }
          );
        Clipboard.setString(sodienthoai);
    }
    render(){
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 50, marginTop:250}}>
                <ActivityIndicator/>
              </View>
            )
          }
        const { navigation } = this.props;
        return(
            <View style={styles.all}>
                <FlatList
                    data={this.state.dataList}
                    renderItem={({item}) => 
                    <View>
                        <TouchableHighlight 
                            onPress={()=>{Linking.openURL('tel:'+item.sodienthoai)}}
                            onLongPress={()=> this._thongBao(item.sodienthoai)}
                        >
                            <View style={styles.container}>
                                <Image 
                                source={require('./../icons/taxi.png')} 
                                style={styles.flat_img} />
                                <View style={styles.flat_view}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>{item.tentaxi}</Text>
                                    <Text>Điện thoại: {item.sodienthoai}</Text>
                                    
                                </View>
                            </View>
                        </TouchableHighlight>
            
                    </View>    
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    all:{
    },
    container:{
        margin:5,
        flexDirection: 'row',
        height:80,
        backgroundColor: '#f2f3f5',
        borderRadius:10
        
    },
    flat_img:{
        width: 56, 
        height: 56, 
        tintColor: '#2e7d32',
        marginTop:10,
        marginLeft:10
    },
    
    flat_view:{
        marginLeft:10,
        justifyContent: 'center',
    }
})