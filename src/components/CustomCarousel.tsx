import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { CarouselCard } from "./CarouselCard";
import { HighlightsProps } from "../cardData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselCardsContainer, CustomCarouselContainer } from "../styles";

interface carouselProps {
  data: HighlightsProps[];
  twitterIconPosStart?: boolean;
  otherIconsPosStart?: boolean;
  noOfCards: number;
}

export const CustomCarousel: FC<carouselProps> = ({
  data,
  twitterIconPosStart = true,
  otherIconsPosStart = false,
  noOfCards,
}) => {
  const handleArr = () => {
    let tempData: HighlightsProps[][] = [];
    for (let i = 0; i < data.length; i += noOfCards) {
      const temp = data.slice(i, i + noOfCards);
      tempData.push(temp);
    }
    return tempData;
  };

  return (
    <CustomCarouselContainer>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <MdArrowBackIos
              className="backArrow"
              aria-label={labelPrev}
              onClick={clickHandler}
            />
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <MdArrowForwardIos
              className="forwardArrow"
              aria-label={labelNext}
              onClick={clickHandler}
            />
          )
        }
      >
        {handleArr().map((cardData, index) => (
          <CarouselCardsContainer key={index}>
            {cardData.map((mainData: any, innerIndex: number) => {
              return (
                <CarouselCard
                  key={mainData.id}
                  imageNumber={mainData.id}
                  coverFile={mainData.image}
                  name={mainData.user.name}
                  profileImage={mainData.user.avatar}
                  username={mainData.user.id}
                  date={mainData.creationDate}
                  description={mainData.description}
                  isVideo={mainData.isVideo}
                  twitterIconPosStart={twitterIconPosStart}
                  otherIconsPosStart={otherIconsPosStart}
                  cardSize={cardData.length}
                />
              );
            })}
          </CarouselCardsContainer>
        ))}
      </Carousel>
    </CustomCarouselContainer>
  );
};
