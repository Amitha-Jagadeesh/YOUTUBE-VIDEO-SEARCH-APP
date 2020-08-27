import React from 'react';
import SearchBar from './components/searchbar/index'
import axios from 'axios';
import VideoList from '../src/components/videoList/index'
import VideoDetail from '../src/components/videoDetail/index'
import './App.css';

const KEY = 'AIzaSyChsZ_WlELIhZHRIBhamCZ7G8EIoFr3gy8';
const baseURL='https://www.googleapis.com/youtube/v3';


class App extends React.Component {
  state = { 
    videos:[] , selectedVideo: null 
  }

  componentDidMount(){
    this.onTermSubmit('shiv');
  }

  onTermSubmit = async (value) =>{
      const response = await axios.get(`${baseURL}/search`,{
          params:{
            part:'snippet',
            maxResults:5,
            key:KEY,
            q:value
        }
      });
      this.setState({ 
        videos:response.data.items,
        selectedVideo: response.data.items[0]
      })
  }

  onVideoSelect = (video)=>{
    console.log(video)
    this.setState({selectedVideo:video})
  }

  render(){
    return (
      <div className="ui conatiner">
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        <VideoDetail video = {this.state.selectedVideo}/> 
        <VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect} />
        
          I have {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
