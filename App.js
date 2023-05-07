import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Store from './redux/store/Store.';
import 'react-native-url-polyfill/auto'
import 'react-native-gesture-handler';
import { CookpediaApp } from './navigation/Navigation';


export default function App() {
  
  return (
    <Provider store={Store}>
        <NativeBaseProvider>
          <CookpediaApp/>
        </NativeBaseProvider>
    </Provider>
  );
}
