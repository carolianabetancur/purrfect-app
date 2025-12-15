import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation, type RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import { range } from '../../constants/globalConstants';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appText } from '../../constants/text';
import { theme } from '../../theme';
import CharacteristicRow from '../../components/CharacteristicRow/CharacteristicRow';

type Props = {
  route: RouteProp<RootStackParamList, 'CatDetail'>;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function CatDetailScreen({ route }: Props) {
  const { breed } = route.params;
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Icon
            name="chevron-left"
            size={theme.sizes.icon.large}
            color={theme.colors.primary}
          />
        </Pressable>
        <Text style={styles.title}>{breed.name}</Text>
        <View style={styles.side} />
      </View>
      <Image source={{ uri: breed.image?.url }} style={styles.image} />
      <ScrollView>
        <Text style={styles.subtitle}>{appText.catDetail.description}</Text>
        <Text style={styles.descriptionText}>{breed.description}</Text>

        <Text style={styles.subtitle}>{appText.catDetail.characteristics}</Text>
        <View style={styles.characteristicsContainer}>
          <CharacteristicRow
            label={appText.catDetail.labels.origin}
            value={breed.origin}
          />
          <CharacteristicRow
            label={appText.catDetail.labels.lifeSpan}
            value={`${breed.life_span} ${appText.catDetail.units.years}`}
          />
          <CharacteristicRow
            label={appText.catDetail.labels.intelligence}
            value={`${breed.intelligence}/${range}`}
          />
          <CharacteristicRow
            label={appText.catDetail.labels.adaptability}
            value={`${breed.adaptability}${appText.catDetail.units.rangeSeparator}${range}`}
          />
          <CharacteristicRow
            label={appText.catDetail.labels.affectionLevel}
            value={`${breed.affection_level}${appText.catDetail.units.rangeSeparator}${range}`}
          />
          <CharacteristicRow
            label={appText.catDetail.labels.energyLevel}
            value={`${breed.energy_level}${appText.catDetail.units.rangeSeparator}${range}`}
          />
          <CharacteristicRow
            label={appText.catDetail.labels.dogFriendly}
            value={`${breed.dog_friendly}${appText.catDetail.units.rangeSeparator}${range}`}
          />
          <CharacteristicRow
            label={appText.catDetail.labels.temperament}
            value={breed.temperament}
            isLongText
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
