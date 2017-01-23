/**
 * Created by Yuriy on 1/13/2017.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoComponent from './components/video_detail';

const API_KEY='AIzaSyA9-JPtDkNDNr2HsCHb47oyZI9Zu-68Ils';



class App extends Component{
    constructor(props){
        super(props);

        this.state={videos:[]};

        YTSearch({key:API_KEY,term:'surfboards'}, (videos)=> {
            this.setState({videos});

        });
    }

    render(){
    return (<div>
        <SearchBar/>
        <VideoComponent video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
    </div>)
};
}

ReactDOM.render(<App/>, document.querySelector('.container'));