import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./post.scss";

const Post = () => {
  return (
    <div className="postContainer">

        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/2.jpeg"
              className="postProfileImg"
              alt="shareimg"
            />
            <h4 className="postUserName">Akash Gite</h4>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="moreIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! it's my first post</span>
          <img src="/assets/post/5.jpeg" className="postImg" alt="shareimg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon className="likeIcon" />
            <FavoriteIcon className="loveIcon" />
            <span>32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span>9 comments</span>
          </div>
        </div>
    
    </div>
  );
};

export default Post;
