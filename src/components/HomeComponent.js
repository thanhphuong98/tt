import React, {Component} from 'react';
import {Picker, View, Text, FlatList, TouchableHighlight, StyleSheet, Image, Clipboard, Alert, ActivityIndicator} from 'react-native';

export default class HomeComponent extends Component{
    constructor(){
        super();
        this.state = {
            dataList : [],
            isLoading: true,
            dataLoc : []
        }
    }
    async componentDidMount(){
        try {
            const response = await fetch('http://lathanhhanh.tk/api/xekhach.php');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataList: responseJson.data,
                dataLoc:responseJson.data,
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
                onPress: () => this.props.navigation.navigate('Home'),
              },
            ],
            { cancelable: false }
          );
        Clipboard.setString(sodienthoai);
    }
    _locData = (text) => { 
        const newData = this.state.dataLoc.filter(item => {      
          const itemData = `${item.tuyenxe.toUpperCase()}`   
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });    
        this.setState({ dataList: newData });
        if(text=='all'){
            this.setState({ dataList: this.state.dataLoc });
        }  
      };
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
            <View>
                <View style={styles.container_loc}>
                    <Text style={{height:50, lineHeight:50, fontSize:16, marginLeft:20, fontWeight:'bold'}}>Bình Liêu</Text>
                    <Text style={{height:50, lineHeight:50, fontSize:16, marginLeft:10}}> đi đến </Text>
                    <Picker
                        style={{height: 50, width:200, marginLeft:0}}
                        onValueChange={text => this._locData(text)}>
                        <Picker.Item label="Chọn nơi đến" value="all"/>
                        <Picker.Item label="Tất cả" value="all"/>
                        <Picker.Item label="Hà Nội" value="Hà Nội" />
                        <Picker.Item label="Thái Bình" value="Thái Bình" />
                        <Picker.Item label="Móng Cái" value="Móng Cái" />
                        <Picker.Item label="Bãi Cháy" value="Bãi Cháy" />
                        <Picker.Item label="Uông Bí" value="Uông Bí" />
                    </Picker>
                </View>
                <View>
                    <FlatList
                        data={this.state.dataList}
                        renderItem={({item}) => 
                        <View>
                            <TouchableHighlight onPress={
                                () => navigation.navigate('ChiTietXe', {
                                    tuyenxe: item.tuyenxe, 
                                    biensoxe:item.biensoxe,
                                    soghexe:item.soghexe,
                                    giave:item.giave,
                                    thoigian1:item.thoigian1,
                                    thoigian2:item.thoigian2,
                                    sodienthoai:item.sodienthoai,
                                    ghichu:item.ghichu
                                })}
                                onLongPress={()=> this._thongBao(item.sodienthoai)}
                            >
                                <View style={styles.container}>
                                    <Image 
                                    source={require('./../icons/bus.png')} 
                                    style={styles.flat_img} />
                                    <View style={styles.flat_view}>
                                        <Text style={{fontSize:18, color: 'black', fontWeight: 'bold'}}>Bình Liêu - {item.tuyenxe}</Text>
                                        <Text style={{color:'black'}} >{item.biensoxe} - {item.soghexe} chỗ - {item.giave} VND</Text>
                                        <View style={{flexDirection: 'row'}}>
                                        <   Text style={{color:'black'}} >Thời gian: </Text>
                                            <Text style={{color:'green'}}>{item.thoigian1}</Text>
                                            <Text> - </Text>
                                            <Text style={{color:'red'}}>{item.thoigian2}</Text>
                                        </View>
                                        {/* <Text style={{color:'#828282', fontWeight: 'bold'}} >{item.thoigian1} - {item.thoigian2}</Text> */}
                                        <Text style={{color:'black'}} >Điện thoại: {item.sodienthoai}</Text>
                                        <Text style={{color:'black'}} >{item.ghichu}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                
                        </View>    
                        }
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container_loc:{
        flexDirection:'row',
        backgroundColor: '#d1cfd1',
        borderRadius: 10,
        margin:2
    },
    container:{
        margin:2,
        flexDirection: 'row',
        height:105,
        backgroundColor: '#f2f3f5',
        borderRadius: 10
    },
    flat_img:{
        width: 56, 
        height: 56,
        marginLeft:10,
        marginTop:25,
        tintColor: 'green'
    },
    flat_view:{
        marginLeft:10,
        
    }
})