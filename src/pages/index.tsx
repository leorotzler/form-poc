import { ArticleCardImage } from "@/components/card";
import { Layout } from "@/components/layout";
import { Grid } from "@mantine/core";

export function Index() {
  return (
    <Layout title="Form POC">
      <Grid>
        <Grid.Col span={6}>
          <ArticleCardImage
            image="/rhf.png"
            title="React Hook Form"
            url="/rhf"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <ArticleCardImage
            image="/houseform.png"
            title="Houseform"
            url="/houseform"
          />
        </Grid.Col>
      </Grid>
    </Layout>
  );
}

export default Index;
