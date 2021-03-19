import React from 'react';

import Menubar from './components/Input/Menubar';
import Day from './components/Input/Day';
import Memo from './components/Input/Memo';
import Category from './components/Input/Category';
import Number from './components/Input/Number';

function App() {
  return (
    <div>
      <Menubar />
      <Day />
      <Memo />
      <Category />
      <Number />
    </div>
  );
}

export default App;
