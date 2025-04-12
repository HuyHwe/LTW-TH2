import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";


/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const user = useParams();
    const userId = user.userId;
    const userPhotos = models.photoOfUserModel(userId);
    let photoList = []
    userPhotos.forEach(function (photo) {
      photoList.push(
      <div>
      <img src={`../images/${photo.file_name}`} alt="User Photo" style={{ width: "50%", height: "auto" }} />
      <ul>
        <li>Photo ID: {photo._id}</li>
        <li>Date: {photo.date_time}</li>
        {photo.comments ? <ol>comments: {photo.comments.map(cmt => {
          return  <li><h4>{cmt.comment}</h4> <p>{cmt.date_time}</p></li>
        })}</ol> : <p>No comment</p>}
      </ul>
      </div>
    );
    });
    return (
      <Typography variant="body1">
        
        {photoList}
      </Typography>
    );
}

export default UserPhotos;
