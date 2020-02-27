import React from 'react';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import Listings from './Components/Listings/Listings';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <div className='main'>
          <Filter />
          <Listings />
        </div>
      </div>
    );
  }
}

export default App;
