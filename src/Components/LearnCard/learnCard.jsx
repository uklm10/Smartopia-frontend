import React from 'react'
import "./learnCard.css"
import Smalltag from '../SmallTag/smalltag'
import { Link, useNavigate } from 'react-router-dom'
function learnCard({ item }) {
    const navigate = useNavigate()
    let iconName, bgColor;
    if (item.videoType === "Free") {
        iconName = "fa-solid fa-circle-play"
        bgColor = "#FF0000"
    }
    else if (item.videoType === "Paid") {
        iconName = "fa-solid fa-crown"
        bgColor = "#008CFD"
    }
    return (
        <div className='content-body' onClick={() => navigate(`/learn/play/${item.videoId}`, { state: item })}>
            <div className='video' >
                <img src={item.thumbnail}
                    className='thumbnail'
                    alt={item.videoId + "_thumbnail"} />
            </div>
            <div className='video-desc-container'>
                <h2 className='video-title'>{item.videoTitle}</h2>
                <div className='video-tag-container'>
                    <Smalltag
                        lable={item.videoType}
                        bgColor={bgColor}
                        fontAwsmIcon={iconName}
                        fontColor={"white"}
                        iconColor={"white"}
                    />
                </div>
            </div>
        </div>
    )
}

export default learnCard

// import React, { useState } from 'react';
// import "./learnCard.css";
// import Smalltag from '../SmallTag/smalltag';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSave, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

// function LearnCard({ item }) {
//     const navigate = useNavigate();
//     const [isSaved, setIsSaved] = useState(false);
//     const [isLiked, setIsLiked] = useState(false);

//     let iconName, bgColor;
//     if (item.videoType === "Free") {
//         iconName = "fa-solid fa-circle-play";
//         bgColor = "#FF0000";
//     } else if (item.videoType === "Paid") {
//         iconName = "fa-solid fa-crown";
//         bgColor = "#008CFD";
//     }

//     const handleSave = () => {
//         setIsSaved(!isSaved);
//     };

//     const handleLike = () => {
//         setIsLiked(!isLiked);
//     };

//     return (
//         <div className='content-body' onClick={() => navigate(`/learn/play/${item.videoId}`, { state: item })}>
//             <div className='video'>
//                 <img
//                     src={item.thumbnail}
//                     className='thumbnail'
//                     alt={item.videoId + "_thumbnail"}
//                 />
//             </div>
//             <div className='video-desc-container'>
//                 <h2 className='video-title'>{item.videoTitle}</h2>
//                 <div className='video-tag-container'>
//                     <Smalltag
//                         lable={item.videoType}
//                         bgColor={bgColor}
//                         fontAwsmIcon={iconName}
//                         fontColor={"white"}
//                         iconColor={"white"}
//                     />
//                 </div>
//                 <div className='button-container'>
//                     <button className={`save-button ${isSaved ? 'active' : ''}`} onClick={handleSave}>
//                         <FontAwesomeIcon icon={faSave} />
//                     </button>
//                     <button className={`like-button ${isLiked ? 'active' : ''}`} onClick={handleLike}>
//                         <FontAwesomeIcon icon={faThumbsUp} />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LearnCard;
