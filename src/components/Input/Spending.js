import React from 'react';

import Menubar from './Menubar';
import Day from './Day';
import Memo from './Memo';
import Category from './Category';
import Number from './Number';

/*支出画面*/
function Spending() {
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

export default Spending;
