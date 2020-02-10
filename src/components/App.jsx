import React from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const items = [
    {
        text: 'Home',
        link: 'home-page',
    },
    {
        text: 'Products',
        link: 'goods',
    },
    {
        text: 'Service',
        link: 'service',
    },
    {
        text: 'Contacts',
        link: 'contacts',
    },
    {
        text: 'Prices',
        link: 'prices',
    },

];

const items2 = [
    {
        text: 'One',
        link: 'page-one',
    },
    {
        text: 'Two',
        link: 'page-two',
    },
    {
        text: 'Three',
        link: 'page-three',
    },
];
const textStory = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

function App() {
    return (
        <div className="App">
            <Header menuItems={items}/>
            <Content/>
            <Footer menuItems={items} items2={items2} textStory={textStory}/>
        </div>
    );
}

export default App;