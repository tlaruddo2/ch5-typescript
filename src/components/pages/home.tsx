import React from "react";
import { Box, Typography } from "@mui/material";
import { InfoHead } from "../content-display/info-head";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";
import { CardTestDnd } from "../content-display/card-test-dnd";
import type { CradTestProps } from "../../components/content-display/card-test-dnd";

interface HomeProps {}

const cardPropList: CradTestProps[] = [
  { id: 0, text: "first", index: 0 },
  { id: 1, text: "second", index: 1 },
  { id: 2, text: "third", index: 2 },
];

export const Home = ({}: HomeProps) => {
  return (
    <Layout title={PAGES.home}>
      {cardPropList.map(c => (
        <CardTestDnd
          key={c.id}
          {...{ id: c.id, text: c.text, index: c.index }}
        ></CardTestDnd>
      ))}
    </Layout>
  );
};
