import React from 'react'
import {VideoGrid, VideoTitle, VideoTitleWrapper} from './styled'


const VideoCard = ({id,image, title, minutesWatch, views, subscribersGained}) => {
    return (
        <VideoGrid>
            <VideoTitleWrapper>
                <img src={image} />
                <VideoTitle href={`https://www.youtube.com/watch?v=${id}`} target="_blank">{title}</VideoTitle>
            </VideoTitleWrapper>
            <p>{minutesWatch}</p>
            <p>{views}</p>
            <p>{subscribersGained}</p>
        </VideoGrid>
        
    )
}

export default VideoCard;