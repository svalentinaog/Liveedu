import { Box } from "@mui/material";
import { useItemViewModel } from "../viewmodels/useItem";
import ItemCard from "../components/ItemCard";
import Header from "../components/Header";

export default function Profile() {
  const { profileItems } = useItemViewModel();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: { xs: "0", md: "0 20px", sm: "0 20px" },
      }}
    >
      <Header />

      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        padding={{ xs: "20px", md: 0 }}
      >
        {profileItems.map((item) => (
          <ItemCard key={item.path} item={item} />
        ))}
      </Box>
    </Box>
  );
}
