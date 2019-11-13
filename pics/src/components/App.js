import React from 'react'
import unsplash from '../api/Unsplash'
import SearchBar from './SearchBar'


class App extends React.Component {
    state = {images: []};


    onSearchSubmit = async (term) => {
      const resonse = await unsplash.get('/search/photos', {
            params: { query: term },
            headers: { Authorization: 'Client-ID 87b0b67242210ee4f7e83added6bee049f49c915221a05f1640eeffb04a61fa4' }
        });
        this.setState({images: resonse.data.results})
    }



    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                Found: {this.state.images.length}
            </div>
        );
    }


}
export default App
