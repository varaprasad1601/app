import './App.css';
import {Provider} from './Components/Context'
import Component2 from './Components/Component2';

function App() {
  return (
    <>
      <Provider value='varaprasad'>
        <Component2 />
      </Provider>
    </>
  );
}

export default App;
