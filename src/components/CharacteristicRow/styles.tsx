import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.sm,
    gap: theme.spacing.xs,
  },
  label: {
    fontWeight: theme.typography.weights.semibold,
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.secondary,
  },
  value: {
    fontSize: theme.typography.sizes.xs,
    color: theme.colors.text.primary,
  },
  longValue: {
    textAlign: 'right',
    width: Platform.OS === 'ios' ? '66%' : '68%',
    fontSize: theme.typography.sizes.xs,
    color: theme.colors.text.primary,
  },
});
