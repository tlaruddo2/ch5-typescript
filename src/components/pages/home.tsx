import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";
import { Board } from "../dnd-chess/board";

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  return <Layout title={PAGES.home}>{/* <Board /> */}</Layout>;
};
