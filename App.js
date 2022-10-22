import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>

      <Image source={require("./cute-puppy.jpeg")} style={styles.local_image} />
      <Image
        source={{
          uri: "http://img.khan.co.kr/news/2019/11/29/l_2019112901003607500286631.jpg",
        }}
        style={styles.url_image}
      />

      <TextInput placeholder="이름을 입력해주세요" />

      <Button
        title="Click Me!"
        onPress={() => {
          console.log("clicked!");
        }}
      />

      <Switch value={true} />
      <Switch value={false} />

      <ScrollView>
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
        <Image
          source={require("./cute-puppy.jpeg")}
          style={styles.local_image}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  local_image: {
    width: 100,
    height: 100,
  },
  url_image: {
    width: 200,
    height: 200,
  },
});
