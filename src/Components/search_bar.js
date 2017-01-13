/**
 * Created by Yuriy on 1/13/2017.
 */
import React,{Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state={term:''};
    }

    render(){
        return <input onChange={event=> console.log(event.target.value)}/>

    }

}

export default SearchBar;