import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ padding: 30 }}>
        <View>
          <View>
            <Text style={{ fontSize: 36 }}>
              Micheal
            </Text>
            <Text style={{ fontSize: 16 }}>Hello, wash your hands</Text>
          </View>
          <View>
            <Image source={{url:'https://storage.googleapis.com/piggybankservice.appspot.com/agent_pics/logo2896d715f4.jpeg'}} />
          </View>
        </View>
        <Button
          title="Go to your profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Micheal' })
          }
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;