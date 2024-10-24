import { Box, Typography } from "@mui/material";
import { useItemViewModel } from "../viewmodels/useItem";
import ItemCard from "../components/ItemCard";
import HistoryBack from "../components/HistoryBack";

export default function CurrentBalance() {
  const { currentBalanceItems } = useItemViewModel();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: { xs: "0", md: "0 20px", sm: "0 20px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100vw", md: "100%" },
          height: "150px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          padding: {
            xs: "0px 50px",
            md: "0px 50px",
            sm: "0px 50px",
          },
          borderRadius: "0px 0px 50px 50px",
          background: "var(--gradient)",
          gap: 2,
        }}
      >
        <Box>
          <HistoryBack />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="svg/coins.svg" alt="" />
          <Typography>400</Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: 2, md: 4 }}
        padding={{ xs: "0 20px 0 20px", md: 0 }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: { xs: "20px", md: "50px" },
            borderRadius: "16px",
            background: "var(--gradient)",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "24px" },
                color: "white",
                fontWeight: "medium",
              }}
            >
              Unlock full access
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "16px" },
                color: "white",
                width: { xs: "80%", md: "90%" },
                fontWeight: "400",
                overflowWrap: "break-word",
              }}
            >
              All courses are also free, and a couple of hidden courses are
              free. No need to worry about coins and much more.
            </Typography>
          </Box>
          <img src="svg/premium.svg" alt="" />
        </Box>

        {currentBalanceItems.map((item) => (
          <ItemCard key={item.path} item={item} />
        ))}
      </Box>
    </Box>
  );
}
