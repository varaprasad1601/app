import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Component2 from './Components/Component2';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Component2 />
      </ErrorBoundary>
      <h1>Vara Prasad</h1>
    </>
  );
}

export default App;
