import { Typography } from "@mui/material";
import {
  FormContent,
  GradientBlock,
  FormContainer,
  InputCodeField,
  CustomFormCode,
} from "../styles/mui";
import { Grid } from "@mui/system";
import { Link } from "react-router-dom";
import { useVerificationCode } from "../viewmodels/useVerification";

export default function VerificationCode() {
  const { code, inputRefs, handleInputChange, handleKeyPress } =
    useVerificationCode();

  return (
    <Grid container spacing={2}>
      {/* Section 1 */}
      <GradientBlock size={{ sm: 6 }} />

      {/* section 2 */}
      <FormContainer size={{ sm: 6, xs: 12 }}>
        <FormContent>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, margin: 0 }}
            gutterBottom
          >
            Phone verification
          </Typography>
          <Typography variant="body1">
            Enter the four-digit code from SMS.
          </Typography>

          <CustomFormCode>
            {code.map((digit, index) => (
              <InputCodeField
                key={index}
                inputRef={inputRefs[index]}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyPress(index, e.key)}
                variant="outlined"
              />
            ))}
          </CustomFormCode>

          <Typography variant="subtitle1">
            SMS not received <Link to="#">Send again?</Link>
          </Typography>
        </FormContent>
      </FormContainer>
    </Grid>
  );
}
