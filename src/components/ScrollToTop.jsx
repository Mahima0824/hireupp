import React from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const location = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
  return (
    <div>
      
    </div>
  )
}

export default ScrollToTop
