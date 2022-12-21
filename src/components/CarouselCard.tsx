import React, { FC, useRef } from "react";
import { ReactVideoPlayer } from "video-player-for-react";
import { IoIosShareAlt } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { BsFillHeartFill, BsTwitter } from "react-icons/bs";
import "video-player-for-react/dist/index.css";
import {
  CarouselCardContainer,
  CoverImage,
  CoverImageAndTwitterIcon,
  CreationDate,
  DescriptionContainer,
  ProfileImageContainer,
  SocialIcons,
  TwitterIcon,
  UserName,
  UserProfile,
} from "../styles";

interface carouselCardProps {
  imageNumber: number;
  coverFile: string;
  name: string;
  username: string;
  profileImage: string;
  date: string;
  description: string;
  isVideo: boolean;
  twitterIconPosStart: boolean;
  otherIconsPosStart: boolean;
}

export const CarouselCard: FC<carouselCardProps> = ({
  imageNumber,
  coverFile,
  name,
  username,
  profileImage,
  date,
  description,
  isVideo,
  twitterIconPosStart,
  otherIconsPosStart,
}) => {
  const carouselRef = useRef<any>(null);

  return (
    <CarouselCardContainer ref={carouselRef}>
      <CoverImageAndTwitterIcon>
        {isVideo ? (
          <ReactVideoPlayer
            width={
              carouselRef.current ? carouselRef.current.offsetWidth : "320px"
            }
            height="230px"
            url={coverFile}
          />
        ) : (
          <CoverImage src={coverFile} alt={imageNumber.toString()} />
        )}
        <TwitterIcon
          style={
            twitterIconPosStart
              ? {
                  justifyContent: "flex-start",
                  left: "10px",
                }
              : { justifyContent: "flex-end", right: "10px" }
          }
        >
          <BsTwitter className="twitterIcon" />
        </TwitterIcon>
      </CoverImageAndTwitterIcon>

      <UserProfile>
        <ProfileImageContainer>
          <img src={profileImage} alt={imageNumber.toString()} />
        </ProfileImageContainer>
        <UserName>
          <h4>{name}</h4>
          <p>{username}</p>
        </UserName>
        <CreationDate>{date}</CreationDate>
      </UserProfile>
      <DescriptionContainer>
        <p>{description}</p>
      </DescriptionContainer>
      <SocialIcons
        style={{
          justifyContent: otherIconsPosStart ? "flex-start" : "flex-end",
        }}
      >
        <IoIosShareAlt className="shareIcon" />
        <FiRefreshCw className="refreshIcon" />
        <BsFillHeartFill className="heartIcon" />
      </SocialIcons>
    </CarouselCardContainer>
  );
};
