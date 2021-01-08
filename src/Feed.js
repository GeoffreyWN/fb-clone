import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post profilePic="https://www.flaticon.com/svg/static/icons/svg/3126/3126507.svg" message="at the park" timestamp="here is time" username="sammy cool" image="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769__340.jpg"/>

      <Post profilePic="https://cdn.pixabay.com/photo/2017/08/07/20/07/man-2607312__340.jpg" message="music time" timestamp="here is time" username="ken murits" image="https://cdn.pixabay.com/photo/2015/04/15/09/47/person-723557__340.jpg"/>

      <Post profilePic="https://cdn.pixabay.com/photo/2015/11/07/12/02/business-man-1031755__340.jpg" message="our villa" timestamp="here is time" username="frankie wesh" image=""/>

      <Post profilePic="https://cdn.pixabay.com/photo/2016/04/02/17/58/service-1303313__340.jpg" message="today's delicacy" timestamp="here is time" username="denno chef" image="https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657__340.jpg"/>
      
    </div>
  );
}

export default Feed;
