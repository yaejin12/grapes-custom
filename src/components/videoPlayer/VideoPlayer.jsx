import React from "react";
import styles from "./videoPlayer.module.scss";
import ReactPlayer from "react-player";

function VideoPlayer({ url }) {
  return (
    <div className={styles.video_wrapper}>
      <ReactPlayer url={url} width="100%" height="100%" controls />
    </div>
  );
}

export default VideoPlayer;
