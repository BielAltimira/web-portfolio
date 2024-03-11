import React from 'react';
import bg from "../assets/bg.png"
import Image from 'next/image'

const Background = () => {
    return(
        <div style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}>
          <Image
            src={bg}
            layout="fill"
            objectFit="cover"
            quality={100}
            />
        </div>
    );
}

export default Background;
