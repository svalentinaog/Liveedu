import { Link } from "react-router-dom";
import { Grid } from "@mui/system";
import { Typography } from "@mui/material";
import {
  GradientBlock,
  FormContainer,
  CustomForm,
  FormContent,
  FormActions,
  MainButton,
} from "../styles/mui";

import useUserAuthentication from "../viewmodels/useUserAuthentication"; // custom hook
import CustomPassField from "../components/CustomPassField";
import CustomTextField from "../components/CustomTextField";

export default function SignIn() {
  const { user, methods } = useUserAuthentication();

  return (
    <Grid container spacing={2}>
      {/* Section 1 */}
      <GradientBlock size={{ sm: 6 }} />
      {/* Section 2 */}
      <FormContainer size={{ sm: 6, xs: 12 }}>
        {/* Content */}
        <FormContent>
          {/* Text Content */}
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Welcome back
          </Typography>
          <Typography variant="body1">
            Sign in to an existing account using your phone number
          </Typography>
          {/* Form Content */}
          <CustomForm>
            <CustomTextField
              label="Email or Phone Number"
              value={user.signUp_email || user.signUp_phone}
              onChange={methods.updateField("signIn_password")}
            />
            <CustomPassField
              label="Password"
              value={user.signIn_password}
              onChange={methods.updateField("signIn_password")}
            />
          </CustomForm>
        </FormContent>
        <FormActions>
          <MainButton>Login</MainButton>
          <Typography variant="subtitle1">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </Typography>
        </FormActions>
      </FormContainer>
    </Grid>
  );
}
