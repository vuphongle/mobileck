import { View, Text, Button, Image, StyleSheet, SafeAreaView} from 'react-native';

export default function Screen1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Tiêu đề sản phẩm </Text>

      <Image source = {{uri: 'https://via.placeholder.com/300'}} style = {{height: 250, width: '80%'}}/>

      <Text> Mô tả sản phẩm ở đây </Text>

      <Button
        title = "Chuyển đến Screen 2"
        onPress = {() => navigation.navigate("Screen2")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginTop: 20,
    marginBottom: 20,
  }
});