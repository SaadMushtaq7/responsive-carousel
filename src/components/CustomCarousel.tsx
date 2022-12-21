import React, { FC } from "react";
import Carousel from "react-elastic-carousel";
import { HighlightsProps } from "../cardData";
import { CarouselCard } from "./CarouselCard";

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
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: noOfCards },
  ];
  return (
    <div className="App">
      {
        //@ts-ignore
        <Carousel breakPoints={breakPoints}>
          {data.map((highlight) => (
            <CarouselCard
              key={highlight.id}
              imageNumber={highlight.id}
              coverFile={highlight.image}
              name={highlight.user.name}
              profileImage={highlight.user.avatar}
              username={highlight.user.id}
              date={highlight.creationDate}
              description={highlight.description}
              isVideo={highlight.isVideo}
              twitterIconPosStart={twitterIconPosStart}
              otherIconsPosStart={otherIconsPosStart}
            />
          ))}
        </Carousel>
      }
    </div>
  );
};
