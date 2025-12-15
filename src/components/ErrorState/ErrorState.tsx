import { Image, Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import { appText } from '../../constants/text';

export function ErrorState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{appText.error.message}</Text>
      <Image style={styles.image} source={require('../../assets/error.png')} />
    </View>
  );
}
