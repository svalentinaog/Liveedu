import { Typography } from "@mui/material";
import { GoBack, Head, HeadContent, PageTitle } from "../styles/mui";
import HistoryBack from "./HistoryBack";

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
          <Typography variant="h6">{title}</Typography>
        </PageTitle>
      </HeadContent>
    </Head>
  );
}
