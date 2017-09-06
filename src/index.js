import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY= 'AIzaSyDZOckA7NBJ5M0SvxAZZSBz9JsUdDb5Jn4';

// Create a new component. This component should produce html

const App = ()=> {
	return ( 
		<div>
			<SearchBar/>
		</div> 
		);
}


//Take this component's generated html and put it on the page(in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container')); 