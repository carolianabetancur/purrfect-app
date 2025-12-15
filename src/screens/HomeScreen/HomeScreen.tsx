import { FlatList, TextInput, View } from 'react-native';
import { useCatBreeds } from '../../api/catApi/hooks';
import CatBreedCard from '../../components/CatBreedCard/CatBreedCard';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { appText } from '../../constants/text';
import { theme } from '../../theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
  const { data: catBreeds } = useCatBreeds();
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    if (!catBreeds) return [];

    return catBreeds.filter(breed =>
      breed.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [catBreeds, search]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.searchContainer}>
        <Icon
          name="search-outline"
          size={theme.sizes.icon.small}
          color={theme.colors.text.secondary}
        />
        <TextInput
          placeholder={appText.home.searchPlaceholder}
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
          placeholderTextColor={theme.colors.text.secondary}
        />
      </View>
      <FlatList
        testID="cat-list"
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CatBreedCard
            breed={item}
            onPressMore={() =>
              navigation.navigate('CatDetail', {
                breed: item,
              })
            }
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </SafeAreaView>
  );
}
export default HomeScreen;
