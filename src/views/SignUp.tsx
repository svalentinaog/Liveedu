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

export default function SignUp() {
  const { user, methods } = useUserAuthentication();

  return (
    <Grid container spacing={2}>
      {/* Section 1 */}
      <GradientBlock size={{ sm: 6 }} />

      {/* Section 2 */}
      <FormContainer size={{ sm: 6, xs: 12 }}>
        {/* Content */}
        <FormContent>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Create new Account
          </Typography>
          <Typography variant="body1">
            Create a new account by filling in all the fields or log in to an
            existing account
          </Typography>

          <CustomForm>
            <CustomTextField
              label="Name"
              value={user.signUp_name}
              onChange={methods.updateField("signUp_name")}
            />

            <CustomTextField
              label="Email"
              value={user.signUp_email}
              onChange={methods.updateField("signUp_email")}
            />

            <CustomTextField
              label="Phone"
              value={user.signUp_phone}
              onChange={methods.updateField("signUp_phone")}
            />

            <CustomPassField
              label="Password"
              value={user.signUp_password}
              onChange={methods.updateField("signUp_password")}
            />
          </CustomForm>
        </FormContent>

        <FormActions>
          <MainButton onClick={methods.handleSignUpForm}>Create</MainButton>
          <Typography variant="subtitle1" sx={{ lineHeight: "normal" }}>
            Do you have an account? <Link to="/sign-in">Sign In</Link>
          </Typography>
        </FormActions>
      </FormContainer>
    </Grid>
  );
}
