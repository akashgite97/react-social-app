import React from "react";
import Divider from "@mui/material/Divider";
import CollectionsSharpIcon from "@mui/icons-material/CollectionsSharp";
import LabelSharpIcon from "@mui/icons-material/LabelSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import EmojiEmotionsSharpIcon from "@mui/icons-material/EmojiEmotionsSharp";
import Button from "@mui/material/Button";
import "./share.scss";

const Share = () => {
  
  return (
    <div className="share">
      <div className="shareCard">
        <div className="shareTop">
          <img
            src="/assets/person/1.jpeg"
            className="shareImg"
            alt="shareimg"
          />
          <input
            type="text"
            name="shareInput"
            className="shareInput"
            placeholder="Whats in your mind?"
          />
        </div>
        <Divider />
        <div className="shareBottom">
          <div className="shareOption">
            <CollectionsSharpIcon color="error" />
            <h3>Photo Or Video</h3>
          </div>

          <div className="shareOption">
            <LabelSharpIcon color="info" />
            <h3>Tag</h3>
          </div>

          <div className="shareOption">
            <LocationOnSharpIcon color="success" />
            <h3>Location</h3>
          </div>

          <div className="shareOption">
            <EmojiEmotionsSharpIcon color="warning" />
            <h3>Feeling</h3>
          </div>
          <Button
            variant="contained"
            color="success"
            size="small"
            style={{ marginLeft: "83px" }}
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Share;
