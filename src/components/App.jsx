import React, {useState} from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from './Counter';

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
    const nums = [0, 0];
    const sum = nums.reduce((a, b) => a + b);
const [total, setTotal] = useState(sum);
   const totalCount = (value) => {
       setTotal(value + total);
   };

    return (
        <div className="App">
            <Header menuItems={items}/>
            <Content />

            Total: {total}

            {nums.map(el =>
            <Counter num={el} totalCount={totalCount}/>
            )}

            <Footer menuItems={items} items2={items2} textStory={textStory}/>
        </div>
    );
}

export default App;