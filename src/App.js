
import './App.css';
import {ViyaDataEditor} from './components';

function App(props) {
  console.log('------------------------in App');
  console.log(props);
  debugger;
  return (
    <div className="App">
      <ViyaDataEditor {...props} />
    </div>
  );
}

export default App;
