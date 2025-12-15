import { ActivityIndicator, Image, Text, View } from 'react-native';
import { styles } from './styles';
import { appText } from '../../constants/text';
import { theme } from '../../theme';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{appText.splash.title}</Text>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>{appText.splash.description}</Text>
      <ActivityIndicator
        color={theme.colors.primary}
        size="large"
        style={styles.loader}
      />
    </View>
  );
}
export default SplashScreen;
