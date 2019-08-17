import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from '../../store';

const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <div className="App">
        
      </div>
    </Provider>
  );
}

export default App;
