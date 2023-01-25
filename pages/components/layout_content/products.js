import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import Slider from "react-slick";
import productData from "../utils/data";

export default function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  let products = productData.products;
  return (
    <>
      <div>
        <h2>Back To Business</h2>
      </div>
      <Slider {...settings}>
        {products?.map((product, key) => (
          <Grid key={key} item xs={2.4}>
            <Card variant="outline">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={product.image}
                    alt={product.alt}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Link href="#" underline="hover">
                      { product.item}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        ))}
      </Slider>
    </>
  );
}
