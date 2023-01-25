import { Grid } from "@mui/material";
import Products from "../layout_content/products";

export default function MainBody() {
  return (
    <main>
      <div>Ads and Carousel</div>
      <div>product promo</div>

      <Grid spacing={5}>
        <Products />
      </Grid>
    </main>
  );
}
