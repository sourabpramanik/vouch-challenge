import AppContainer from './src/components/app-container';
import 'react-native-gesture-handler';
import Navigator from './src/';
import {UserProvider} from './src/context/user';
import { WebView } from 'react-native-webview';
import { LogBox } from 'react-native';
import _ from 'lodash';

export default function App() {
  LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
  LogBox.ignoreAllLogs(); // ignore all logs
  const _console = _.clone(console);
  console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
    }
  };
 
  return (
    <UserProvider>
      <AppContainer>      
        <Navigator/>    
      </AppContainer>     
    </UserProvider>
  );
}

