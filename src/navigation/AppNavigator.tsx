import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CatDetailScreen from '../screens/CatDetailScreen/CatDetailScreen';
import type { CatBreed } from '../api/catApi/types';

export type RootStackParamList = {
  Home: undefined;
  CatDetail: { breed: CatBreed };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CatDetail" component={CatDetailScreen} />
    </Stack.Navigator>
  );
}
