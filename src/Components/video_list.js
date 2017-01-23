/**
 * Created by Yuriy on 1/13/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item'

const VideoList= (props)=>{

  const VideoItems= props.videos.map((video)=>{

        return <VideoListItem key={video.etag} video={video}/>
    });

  return(

    <ul className="col-md-4 list-group">

        {VideoItems}
   </ul>
  )
};
export default VideoList;