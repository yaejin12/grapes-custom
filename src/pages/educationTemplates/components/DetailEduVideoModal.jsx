import React from "react";
import styles from "../educationTemplates.module.scss";
import VideoPlayer from "../../../components/videoPlayer/VideoPlayer";
import VideoViewModal from "../../../components/modal/VideoViewModal";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { EDUCATION_TEMPLATES } from "../../../config/path.config";

function DetailEduVideoModal() {
  const { pathname } = useLocation();
  const isShowVideoModal = useSelector(
    (state) => state.showModal.showVideoModal
  );
  const isEducationPg = pathname === EDUCATION_TEMPLATES;
  return (
    <>
      {isEducationPg && isShowVideoModal && (
        <VideoViewModal>
          <div className={styles.video_player_section}>
            <VideoPlayer url={"/video/a.mp4"} />
          </div>
          {/* [s] 영상 설명 있으면 보이게 */}
          {/* <div className={styles.video_info_wrapper}>
            <p className={styles.video_info_label}>영상 설명</p>
            <p className={styles.video_info_text}></p>
          </div> */}
          {/* [e] 영상 설명 있으면 보이게 */}
        </VideoViewModal>
      )}
    </>
  );
}

export default DetailEduVideoModal;
