import { Typography } from "@mui/material";
import { GoBack, Head, HeadContent, PageOther, PageTitle } from "../styles/mui";
import HistoryBack from "./HistoryBack";

interface PageHeaderProps {
  title: string;
  other?: string;
}

export default function PageHeader({ title, other }: PageHeaderProps) {
  return (
    <Head>
      <HeadContent>
        <GoBack>
          <HistoryBack />
        </GoBack>
        <PageTitle>
          <Typography>{title}</Typography>
        </PageTitle>
        <PageOther>{other}</PageOther>
      </HeadContent>
    </Head>
  );
}
