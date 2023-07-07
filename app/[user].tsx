import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link, useLocalSearchParams } from 'expo-router';

export default function UserScreen() {
  const { user } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user}</Text>
      <Link href="/two">
        <Text style={{fontSize: 32}}>Go to Page Two</Text>
      </Link>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/[user].tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
