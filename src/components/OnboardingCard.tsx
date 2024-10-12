interface IOnboardingCardProps {
  screen: {
    title: string;
    description: string;
    image: string;
  };
}

export default function OnboardingCard({ screen }: IOnboardingCardProps) {
  return (
    <div>
      <img src={screen.image} alt={screen.title} />
      <h2>{screen.title}</h2>
      <p>{screen.description}</p>
    </div>
  );
}
