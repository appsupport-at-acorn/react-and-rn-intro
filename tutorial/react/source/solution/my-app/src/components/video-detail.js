import React from 'react';
import {connect} from "react-redux";

const VideoDetail = (props) => {

    const video = props.video;

    if (props.loading) {
        return <div>Loading...</div>
    }

    if (!video) {
        return "";
    }

    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title="video-detail" src={videoUrl} allowFullScreen="allowFullScreen" />
            </div>
            <div className="details">
                <div className="video-title">{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
  return {
      video: state.selectedVideo,
      loading: state.loading
  };
};

export default connect(mapStateToProps, null)(VideoDetail);