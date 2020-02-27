import React from 'react';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import Listings from './Components/Listings/Listings';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Filter />
        <Listings />
      </div>
    );
  }
}

export default App;
