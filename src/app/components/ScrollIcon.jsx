import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const DIV = styled.div`
  .chevron {
    position: absolute;
    width: 38px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;

    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }


  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`

function ScrollIcon() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY == 0;
      setShowScrollIcon(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
      <DIV className={` container transition-opacity duration-500 scroll-icon ${showScrollIcon ? 'opacity-30' : 'opacity-0'}`} >
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </DIV>
  )
}

export default ScrollIcon