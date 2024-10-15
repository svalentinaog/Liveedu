import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FullScreenBox, LogoContainer, LogoImage } from "../styles/mui";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <FullScreenBox>
      <LogoContainer>
        <LogoImage src="svg/logo.svg" alt="Logo" />
      </LogoContainer>
    </FullScreenBox>
  );
}