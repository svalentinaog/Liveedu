import { Box, Typography } from "@mui/material";
import { commonStyles, gridElements, formField } from "../styles/mui";
import {
  CodeInputContainer,
  CodeInput,
} from "../styles/pages/verificationCode";
import { Grid } from "@mui/system";
import { Link } from "react-router-dom";
import { useVerificationCode } from "../viewmodels/useVerification";

export default function VerificationCode() {
  const { code, inputRefs, handleInputChange, handleKeyPress } =
    useVerificationCode();

  return (
    <Grid container spacing={2}>
      {/* Section 1 */}
      <Grid
        size={{ sm: 6 }}
        sx={{
          ...commonStyles,
          height: "100vh",
          display: { sm: "block", xs: "none" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            background: "linear-gradient(#bfc3fc, #a2c3fc)",
            borderRadius: "0 150px 150px 0",
          }}
        ></Box>
      </Grid>

      {/* section 2 */}
      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          ...commonStyles,
          alignItems: "center",
          minHeight: "100vh",
          padding: 2,
          gap: 6,
        }}
      >
        <Box
          sx={{
            ...commonStyles,
            ...gridElements,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            Phone verification
          </Typography>
          <Typography variant="body1">
            Enter the four-digit code from SMS.
          </Typography>

          <CodeInputContainer>
            {code.map((digit, index) => (
              <CodeInput
                sx={formField}
                key={index}
                inputRef={inputRefs[index]}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyPress(index, e.key)}
                variant="outlined"
              />
            ))}
          </CodeInputContainer>

          <Typography variant="subtitle1">
            SMS not received <Link to="#">Send again?</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
