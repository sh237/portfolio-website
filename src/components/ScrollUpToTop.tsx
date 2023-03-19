import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

const ScrollUpToTop: React.FC = () => {

  return(
    <>
      <ScrollToTop
        smooth
        style={{
          borderRadius: '50%'
        }}
      />
    </>
  );
}

export default ScrollUpToTop;