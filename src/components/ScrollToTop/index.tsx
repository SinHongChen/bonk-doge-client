// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export interface ScrollToTopProps{
    children:JSX.Element
}

const ScrollToTop = ({children}:ScrollToTopProps) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>
};

export default ScrollToTop;