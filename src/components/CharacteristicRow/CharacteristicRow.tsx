import { Text, View } from 'react-native';
import { memo } from 'react';
import { styles } from './styles';
import type { CatCharacteristics } from './types';

function CharacteristicRow({ label, value, isLongText }: CatCharacteristics) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={isLongText ? styles.longValue : styles.value}>{value}</Text>
    </View>
  );
}

export default memo(CharacteristicRow);
