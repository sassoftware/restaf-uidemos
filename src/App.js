
import './App.css';
import {ViyaDataEditor} from './components';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <ViyaDataEditor {...props} />
    </div>
  );
}

export default App;
