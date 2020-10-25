import React, {Component} from 'react';
import {View, Text, Linking, StyleSheet, Clipboard, Alert, TouchableHighlight} from 'react-native';

export default class ChiTietXe extends Component{
    thongBao = (sodienthoai) => {
        Alert.alert(
            'Thông báo',
            'Sao chép '+sodienthoai+' thành công',
            [
              {
                text: 'Ok',
                onPress: () => this.props.navigation.navigate('ChiTietXe'),
              },
            ],
            { cancelable: false }
          );
        Clipboard.setString(sodienthoai);
    }
    render(){
        return(
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize:35,textAlign: 'center',color:'green', marginTop:20, fontWeight:'bold',}}>Bình Liêu - {this.props.navigation.state.params.tuyenxe}</Text>
                    <Text style={{marginBottom:15, color:'#828282'}}>{this.props.navigation.state.params.ghichu}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>+ Biển số : </Text>
                    <Text style={styles.value}>{this.props.navigation.state.params.biensoxe}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>+ Giá vé : </Text>
                    <Text style={styles.value}>
                    {this.props.navigation.state.params.giave} VND - {this.props.navigation.state.params.soghexe} chỗ
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>+ Tại Bình Liêu : </Text>
                    <Text style={styles.value}>{this.props.navigation.state.params.thoigian1}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>+ Bến đối lưu : </Text>
                    <Text style={styles.value}>{this.props.navigation.state.params.thoigian2}</Text>
                </View>
                <TouchableHighlight onPress={() => this.thongBao(this.props.navigation.state.params.sodienthoai)}>
                    <View 
                        style={styles.row} 
                        >
                        <Text style={styles.title}>+ Số điện thoại : </Text>
                        <Text style={styles.value}>{this.props.navigation.state.params.sodienthoai}</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.call}>
                    <Text style={{
                        height:50,
                        fontSize:20,
                        lineHeight:50, 
                        color:'white', 
                        fontWeight:'bold',
                        backgroundColor: 'green',
                        borderRadius:50,
                    }} 
                        onPress={()=>{
                            Linking.openURL('tel:'+this.props.navigation.state.params.sodienthoai)
                            }}>   Gọi ngay   </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        backgroundColor: '#f2f3f5',
        borderRadius:10,
        margin:5
    },
    title:{
        // borderBottomWidth:1,
        // borderTopWidth:1,
        height:50,
        fontSize:18,
        lineHeight:50,
        
        fontWeight:'bold',
    },
    value:{
        height:50,
        fontSize:18,
        lineHeight:50,
    },
    call:{
        fontSize:18,
        lineHeight:50,
        margin:10,
        alignItems: 'center'
    }
})