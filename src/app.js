import * as math from './math.js';

import './app.css';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    const result = document.querySelector('#result');

    btn.addEventListener('click', () => {
        result.textContent = math.sum(1, 2); // 3
        console.log(result.textContent);
    });
});

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
