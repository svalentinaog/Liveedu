import { ItemContainer, ProfileContainer } from "../styles/mui";
import ItemCard from "../components/ItemCard";
import Header from "../components/Header";
import { useItemViewModel } from "../viewmodels/useItem";

export default function Profile() {
  const { profileItems } = useItemViewModel();

  return (
    <ProfileContainer>
      <Header />
      <ItemContainer>
        {profileItems.map((item) => (
          <ItemCard key={item.path} item={item} />
        ))}
      </ItemContainer>
    </ProfileContainer>
  );
}
