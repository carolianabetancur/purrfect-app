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
    color: theme.colors.primary,
    fontWeight: theme.typography.weights.bold,
    fontSize: theme.typography.sizes.xxl,
  },
  image: {
    width: theme.sizes.image.large,
    height: theme.sizes.image.large,
  },
  text: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginHorizontal: '5%',
  },
  loader: {
    marginTop: '8%',
  },
});
