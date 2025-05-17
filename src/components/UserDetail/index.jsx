import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";
import UserPhotos from "../UserPhotos";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const user = useParams();
    const userId = user.userId;
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:8081/api/user/${userId}`)
        .then((res) => res.json())
        .then((data) => setUserObj(data))
        .catch((err) => console.error(err));
    }, [userId]);
    return (
        
          <Typography variant="body1">
            Thong tin ve user:
            {userObj != undefined ? 
              <ul>
                <li>First Name: {userObj.first_name}</li>
                <li>Last Name: {userObj.last_name}</li>
                <li>Description: {userObj.description}</li>
                <li>Location: {userObj.location}</li>
                <li>Occupation: {userObj.occupation}</li>
              </ul>: console.log("khong thay user co id: " + userId)}
              <Link to={`../../photos/${userId}`}>Xem anh</Link>
          </Typography>

    );
}

export default UserDetail;
