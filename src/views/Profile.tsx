import { ItemContainer, ProfileContainer } from "../styles/mui";
import ItemCard from "../components/ItemCard";
import Header from "../components/Header";
import { useItemViewModel } from "../viewmodels/useItem";
import { Box } from "@mui/system";

export default function Profile() {
  const { profileItems } = useItemViewModel();

  return (
    <ProfileContainer>
      <Header />
      <Box sx={{ padding: { xs: "0 20px 0 20px", md: 0 } }}>
        <ItemContainer>
          {profileItems.map((item) => (
            <ItemCard key={item.path} item={item} />
          ))}
        </ItemContainer>
      </Box>
    </ProfileContainer>
  );
}
