import React, { FC, useEffect, useState } from "react"
import { Container, Grid, Stack } from "@mui/material";
import MediaCard from "../components/MediaCard";
import { IProduct } from "../interface/product.interface";
import { API_FetchProducts } from "../api";
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
}
const HomePage: FC<Props> = (props) => {
  const [products, setProducts] = useState<IProduct[]>();
  const FetchProducts = () => {
    API_FetchProducts().then((response) => {
      setProducts(response);
      console.log("API_FetchProducts success:", response);
    }).catch((error) => {
      console.log("API_FetchProducts error:", error);
    })
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Grid container sx={{ flexGrow: 1 }} >
        <Grid container item spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            products ?
              products.map((item: IProduct, index) => (
                <Grid key={index} item xs={4} >
                  <Stack width={"100%"} alignItems={"center"}>
                    <MediaCard key={index} item={item} />
                  </Stack>
                </Grid>
              ))
              :
              <CircularProgress size={100} />
          }
        </Grid>
      </Grid>
    </Container>
  )
}
export default HomePage;