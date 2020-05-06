import React from 'react';
import SearchBar from './Searchbar';
import VideoList from './VideoList';
import youtube from '../APIs/youtube';


class App extends React.Component{
    state = {
         videos: [], 
         selectedVideo: null 
        };
        
        
    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
           
        this.setState({ videos: response.data.items })
    };

    onVideoSelect = video => {
        console.log('Forom the App', video);
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <VideoList videos={this.onVideoSelect} />
            </div>
        );
    }
}


export default App;