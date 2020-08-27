import React from 'react'
import VideoItem from '../videoItem/index'

const VideoList = ({videos, onVideoSelect})=>{
    return(
        <div>
            {videos.map(video=>{
                return <VideoItem key={video.id.videoId} video = {video} onVideoSelect = {onVideoSelect}/>
            })}
        </div>
    )
}

export default VideoList