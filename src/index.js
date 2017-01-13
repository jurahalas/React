/**
 * Created by Yuriy on 1/13/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyA9-JPtDkNDNr2HsCHb47oyZI9Zu-68Ils';

const App = ()=>{
    return (<div>
        <SearchBar/>
    </div>)
};

ReactDOM.render(<App/>, document.querySelector('.container'));