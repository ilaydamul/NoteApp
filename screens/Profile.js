import { Text, View } from 'react-native';
import { globalStyles } from '../styles';
import Title from '../components/Title';

export default function Profile() {
  return (
    <View style={{ ...globalStyles.container }}>
      <Title>
        Profil
      </Title>
    </View>
  )
}
