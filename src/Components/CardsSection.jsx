import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const CardsSection = () => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    if (cardContainerRef.current) {
      const container = cardContainerRef.current;
      setIsLeftButtonDisabled(container.scrollLeft === 0);
      setIsRightButtonDisabled(container.scrollLeft + container.clientWidth === container.scrollWidth);
    }
  }, [scrollPosition]);

  const handleScrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 160;
      setScrollPosition(cardContainerRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 160;
      setScrollPosition(cardContainerRef.current.scrollLeft);
    }
  };

  return (
    <CardContainer>
      <div onClick={handleScrollLeft} className={`btn ${isLeftButtonDisabled ? 'disabled' : ''}`}>
        <img src="/arrow/left.png" alt="left" />
      </div>
      <div className="cards" ref={cardContainerRef}>
        <div className="grid">
          {days.map((day, index) => (
            index < 4 ? <Cards day={day} index={index} key={index} /> : null
          ))}
        </div>
        <div className="grid">
          {days.map((day, index) => (
            index > 3 ? <Cards day={day} index={index} key={index} /> : null
          ))}
        </div>
      </div>
      <div onClick={handleScrollRight} className={`btn ${isRightButtonDisabled ? 'disabled' : ''}`}>
        <img src="/arrow/right.png" alt="right" />
      </div>
    </CardContainer>
  );
};

export default CardsSection;

const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 62%;
  height: 300px;
  overflow-x: hidden;
  
  .btn {
    img {
      height: 100px;
      width: 100px;
      margin: 0 auto;
    }

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .cards {
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    filter: grayscale(100%);
    .grid {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 20px;
    }
  }

  .cards::-webkit-scrollbar {
    display: none;
  }

  .grid :hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
    border: none;
    transition: transform 0.5s;
  }
`;
