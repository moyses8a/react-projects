import React, { useState } from 'react';
import data from './data';
import List from './List';
function App({title}) {
  const [people, setPeople] = useState(data);
  console.log('msg: ', title);
  return <main>
    <section className='container'>
      <h3>{people.length} Birthdays today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>;
}

export default App;
