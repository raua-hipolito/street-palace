import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="not-found-page">
            <div className="not-found-page__content">
                <h1 className="not-found-page__title">404</h1>
                <p className="not-found-page__text">Oops! Page not found</p>
                <a href="/" className="not-found-page__link">
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
