import data from './data';

type User = {
    id: number;
    name: string;
};

const jason = {
    id: 1,
    name: 'Jason Zeng',
} as User;

console.log('Message from ts: ', jason, data);


// DOM add

const dom = document.getElementById('ts-root');

window.addEventListener('load', () => {
    dom.style.color = '#ff3e96';
    dom.style.fontSize = '2rem';
    dom.innerHTML = 'Hello, TypeScirpt!';
});

