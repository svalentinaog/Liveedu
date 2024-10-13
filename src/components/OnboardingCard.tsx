import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";

interface IOnboardingCardProps {
  screen: {
    title: string;
    description: string;
    image: string;
  };
}

// Styles
const commonStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const gridElements = {
  width: "100%",
  maxWidth: "400px",
  gap: 2,
};
// end Styles

export default function OnboardingCard({ screen }: IOnboardingCardProps) {
  return (
    <Grid container spacing={2} sx={{ height: "80vh" }}>
      {/* Section 1 */}
      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          ...commonStyles,
          alignItems: "center",
          padding: 4,
        }}
      >
        <img src={screen.image} alt={screen.title} />
      </Grid>

      {/* Section 2 */}
      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          ...commonStyles,
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Content */}
        <Box
          sx={{
            ...commonStyles,
            ...gridElements,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {screen.title}
          </Typography>
          <Typography variant="body1">{screen.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
