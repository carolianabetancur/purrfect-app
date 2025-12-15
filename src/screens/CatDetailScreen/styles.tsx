import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: theme.spacing.md,
    marginHorizontal: theme.spacing.xxl,
  },
  header: {
    width: '100%',
    paddingBottom: theme.spacing.sm,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text.primary,
  },
  side: {
    width: theme.spacing.xxl,
  },
  image: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.3,
    borderRadius: theme.spacing.md,
    marginVertical: theme.spacing.xl,
  },
  subtitle: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text.primary,
  },
  descriptionText: {
    marginVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.sm,
    lineHeight: theme.typography.lineHeights.md,
    fontWeight: theme.typography.weights.semibold,
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.secondary,
    textAlign: 'justify',
  },
  characteristicsContainer: {
    paddingHorizontal: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
});
