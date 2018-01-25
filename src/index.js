import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyBqwcbKWuAB2KVEClVc9NtlcI5yJ6qWW88';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

export default App;

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));