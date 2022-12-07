import React from 'react';
import SearchBar from './searchbar';
import ImageList from './imageList';
import axios from 'axios';
class App extends React.Component {
    state = { images: [] }
    onSubmitp = async (event) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: event },
            headers: {
                Authorization: 'Client-ID NFEcH3KUhf_2q96YXdENG_Get3njIaWMHnjYWPvH6Hs'
            }
        });
        this.setState({ images: response.data.results })
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onsubmit={this.onSubmitp} />
                <ImageList image={this.state.images} />
            </div>
        )
    }

}
export default App;