import { useState } from "react";
import { Text, View, StyleSheet, StatusBar, Button, ActivityIndicator, Switch } from "react-native";

export default function Index() {
  const [ ranNum,setranNum ] = useState<number>();
  const [ swt,setSwt ] = useState<boolean>(false);
  return (
    <View style={[styles.container, (swt) ? (styles.theme1) : ( styles.theme2)]}>
      <Text>{ranNum}</Text>
      <StatusBar hidden={true} />
      <Button disabled={false} color={'#b1b'} title="Click Me" onPress={()=>{setranNum(Math.floor(Math.random()*10))}} />
       <ActivityIndicator animating={false} /> 
       <ActivityIndicator size={'large'} color={'#b1b'} /> 

       <Switch style={{alignSelf: 'center'}}
       trackColor={{true : '#b1b', false: '#22bf14'}}
       thumbColor={swt ? '#000' : '#fff'}
        value={swt} onValueChange={()=>{setSwt(previousState => !previousState)}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  theme1 :{
    borderWidth : 5,
    borderColor : '#b1b' 
  },
    theme2 :{
    borderWidth : 5,
    borderColor : '#000' 
  },
});
