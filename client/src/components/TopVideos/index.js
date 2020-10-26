import React from 'react'
import VideoCard from './VideoCard'
import {VideoGrid} from './styled'

const TopVideos = ({videos}) => {
    if(!videos) {
        return <div>Loading top videos</div>
    }
    const {rows,videosInfo} = videos
    return (
        <div>
            <VideoGrid>
                <div>
                    Video
                </div>
                <div>
                    Minutes Watched
                </div>
                <div>
                    Views
                </div>
                <div>
                    Subscribers gained
                </div>
            </VideoGrid>
            <div>
                {rows.map((video,index) => 
                    !videosInfo[index] ? null :
                    <VideoCard 
                        key={video[0]}
                        id={video[0]} 
                        image={videosInfo[index].snippet.thumbnails.default.url} 
                        title={videosInfo[index].snippet.localized.title} 
                        minutesWatch={video[1]}
                        views={video[2]}
                        subscribersGained={video[4]}/>)}
            </div>
        </div>
        
        

    )
}

export default TopVideos;