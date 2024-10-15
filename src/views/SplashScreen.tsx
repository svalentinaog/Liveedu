import { FullScreenBox, LogoContainer, LogoImage } from "../styles/mui";
import { useSplashScreen } from "../viewmodels/useSplashScreen";

export default function SplashScreen() {
    useSplashScreen(3000, '/onboarding');

    return (
        <FullScreenBox>
            <LogoContainer>
                <LogoImage src="svg/logo.svg" alt="Logo" />
            </LogoContainer>
        </FullScreenBox>
    );
}
