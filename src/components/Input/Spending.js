import React from 'react';

import Day from './Day';
import Memo from './Memo';
import Category from './Category';
import Number from './Number';

/*支出画面*/



function Spending() {
  return (
    <div>
      <Day />
      <Memo />
      <Number />
      <Category />
    </div>
  );
}

export default Spending;
