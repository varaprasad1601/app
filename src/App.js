import './App.css';
import {Provider} from './Components/Context'
import Post from './Components/Post';

function App() {
  return (
    <>
      <Provider value='varaprasad'>
        <Post />
      </Provider>
    </>
  );
}

export default App;
