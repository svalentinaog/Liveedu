import { Box, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface ItemCardProps {
  item: {
    icon: SvgIconComponent;
    text: string;
    onClick: () => void;
  };
}

export default function ItemCard({ item }: ItemCardProps) {
  const Icon = item.icon;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "16px",
        gap: 2,
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "var(--translucent-lilac)",
        },
      }}
      onClick={item.onClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "14px",
          backgroundColor: "var(--translucent-lilac)",
          width: "55px",
          height: "55px",
        }}
      >
        <Icon />
      </Box>
      <Typography>{item.text}</Typography>
    </Box>
  );
}
