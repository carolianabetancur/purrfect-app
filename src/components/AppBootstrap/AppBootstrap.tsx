import { useCatBreeds } from '../../api/catApi/hooks';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import { AppNavigator } from '../../navigation/AppNavigator';
import { ErrorState } from '../ErrorState/ErrorState';

function AppBootstrap() {
  const { isLoading, isError } = useCatBreeds();

  if (isLoading) {
    return <SplashScreen />;
  }
  if (isError) {
    return <ErrorState />;
  }
  return <AppNavigator />;
}
export default AppBootstrap;
