import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSplashScreen = (duration: number, redirectPath: string) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(redirectPath); 
        }, duration); 

        return () => clearTimeout(timer);
    }, [navigate, duration, redirectPath]);
};