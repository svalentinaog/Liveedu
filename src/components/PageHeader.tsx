import { Typography } from "@mui/material";
import { GoBack, Head, HeadContent, PageTitle } from "../styles/mui";
import HistoryBack from "./HistoryBack";
import { Box } from "@mui/system";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Head>
      <HeadContent>
        <GoBack>
          <HistoryBack />
        </GoBack>
        <PageTitle>
          <Typography>{title}</Typography>
        </PageTitle>
        <Box sx={{ flex: 1 }}></Box>
      </HeadContent>
    </Head>
  );
}
