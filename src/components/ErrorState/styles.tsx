import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    width: '80%',
    color: theme.colors.primary,
    fontWeight: theme.typography.weights.bold,
    fontSize: theme.typography.sizes.xl,
    textAlign: 'center',
  },
  image: {
    width: theme.sizes.image.large,
    height: theme.sizes.image.large,
  },
});
