import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Comment from './components/Comment';

ReactDOM.render(
    <Comment 
        author={ { name: 'Aaron', avatarUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/81668060_10215388390251499_8023483260979904512_o.jpg?_nc_cat=103&_nc_ohc=WVWv_TCLP5YAX-FV78C&_nc_ht=scontent-atl3-1.xx&_nc_tp=6&oh=affb7a8863e2e9ec64d0066886651bf7&oe=5EB81AF3' } }
        text="Get this bread"
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
