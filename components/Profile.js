import { StyleSheet, Text, View } from 'react-native';

const Profile = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>{name}</Text>
    </View>
  );
}

export default Profile;