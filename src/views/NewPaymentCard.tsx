import { Box } from "@mui/system";
import { CustomForm, FormActions, GoBack, MainButton } from "../styles/mui";

import useUserAuthentication from "../viewmodels/useUserAuthentication"; // custom hook
import CustomPassField from "../components/CustomPassField";
import CustomTextField from "../components/CustomTextField";
import HistoryBack from "../components/HistoryBack";
import { Typography } from "@mui/material";

export default function NewPaymentCard() {
  const { methods } = useUserAuthentication();

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", md: "100%" },
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          gap: 2,
        }}
      >
        <GoBack>
          <HistoryBack />
        </GoBack>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Typography
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Payment
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "space-between", md: "center" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <CustomForm>
          <CustomTextField
            label="Card Name"
            value=""
            onChange={methods.updateField("signIn_password")}
          />
          <CustomPassField
            label="Card Number"
            value=""
            onChange={methods.updateField("signIn_password")}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
              flexDirection: "row",
            }}
          >
            <CustomTextField
              label="Expires"
              value=""
              onChange={methods.updateField("signIn_password")}
            />
            <CustomTextField
              label="Cvv"
              value=""
              onChange={methods.updateField("signIn_password")}
            />
          </Box>
        </CustomForm>

        <FormActions>
          <MainButton>Save</MainButton>
        </FormActions>
      </Box>
    </Box>
  );
}
