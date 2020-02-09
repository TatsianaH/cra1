import React from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
    const items = [
        {
            text:'Home',
            link: 'home-page',
        },
        {
            text:'Products',
            link: 'goods',
        },
        {
            text:'Service',
            link: 'service',
        },
        {
            text:'Contacts',
            link: 'contacts',
        },
        {
            text:'Prices',
            link: 'prices',
        },

    ];

  return (
    <div className="App">
      <Header
      menuItems={items}
      />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
// сделать меню в footer тоже, 3 меню в каждом по три пункта; все должно идти из App