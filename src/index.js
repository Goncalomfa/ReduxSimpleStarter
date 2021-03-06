import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDrNunBZajtnCUHGfDru-U1wDK6x3cRyTo';

//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';

//import App from './components/app';
//import reducers from './reducers';

//create a new component
class App extends Component {
  constructor(props)  {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
       }); //this.setState({ videos });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }

}
//const createStoreWithMiddleware = applyMiddleware()(createStore);

//take this component's generated HTML and put it on the page
ReactDOM.render(
  //<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  //</Provider>
  , document.querySelector('.container')); //second argument says where to put (container reference is in index.html)
