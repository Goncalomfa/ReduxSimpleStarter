import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { //instead of having (props) and
  //const video = props.video; (we can just {video} above)
  const imageUrl = video.snippet.thumbnails.default.url; //response coming from YT
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} /> //video's thumbnail
        </div>
        <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div> //title
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
