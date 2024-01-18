import { Text, View } from 'react-native';
import Button from '../components/Button';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Home
      </Text>
    </View>
  )
}
