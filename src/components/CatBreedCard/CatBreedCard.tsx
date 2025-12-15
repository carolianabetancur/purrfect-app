import type { CatBreed } from '../../api/catApi/types';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appText } from '../../constants/text';
import { theme } from '../../theme';
import { memo } from 'react';

interface Props {
  breed: CatBreed;
  onPressMore: () => void;
}
function CatBreedCard({ breed, onPressMore }: Props) {
  return (
    <View style={styles.card} testID={`cat-item-${breed.id}`}>
      <View style={styles.header}>
        <Text style={styles.title}>{breed.name}</Text>
        <TouchableOpacity testID={`cat-more-${breed.id}`} onPress={onPressMore}>
          <Icon
            name="more-horiz"
            size={theme.sizes.icon.medium}
            style={styles.more}
          />
        </TouchableOpacity>
      </View>

      {breed.image?.url && (
        <Image source={{ uri: breed.image.url }} style={styles.image} />
      )}

      <View style={styles.infoRow}>
        <Text style={styles.label}>{appText.catCard.labels.country}</Text>
        <Text style={styles.value}>{breed.origin}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>{appText.catCard.labels.intelligence}</Text>
        <Text style={styles.value}>
          ({breed.intelligence}
          {appText.catCard.intelligenceRange})
        </Text>
      </View>
    </View>
  );
}

export default memo(CatBreedCard);
