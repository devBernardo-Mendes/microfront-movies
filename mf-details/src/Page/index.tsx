import CardDetails from "../components/CardDetails/intex";
import Layout from "../components/Layout";
import useDetailsMovie from "../services/useDetailsMovie";

export default function PageDetails() {
  const { data } = useDetailsMovie();

  return (
    <Layout>
      <CardDetails movie={data} />
    </Layout>
  );
}
