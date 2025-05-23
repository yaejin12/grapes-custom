import React from "react";
import styles from "../educationTemplates.module.scss";
import VideoPlayer from "../../../components/videoPlayer/VideoPlayer";

function DetailEduTpl() {
  return (
    <section className={styles.detail_section_box}>
      <div className={styles.video_player_section}>
        <VideoPlayer url={"/video/a.mp4"} />
      </div>
    </section>
  );
}

export default DetailEduTpl;
