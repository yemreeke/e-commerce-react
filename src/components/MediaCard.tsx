import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProduct } from '../interface/product.interface';
import { useState } from 'react';
import DetailDrawer from './DetailDrawer';


type Props = {
    data: IProduct
}

export default function MediaCard(props: Props) {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(undefined);

    const handleOpenDrawer = (product: IProduct) => {
        setSelectedProduct(product);
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <Card raised sx={{ maxWidth: 345 }}>
                <CardMedia
                    image={props?.data?.image}
                    component="img"
                    sx={{ height: 300, padding: "1em 1em 0 1em", objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props?.data?.name}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {props?.data?.price} ₺
                    </Typography>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, width: '100%', height: 45, marginTop: 5 }}>
                        <Typography variant="body2" color="text.secondary">
                            {props?.data?.description}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleOpenDrawer(props.data)}>Detay</Button> {/* Detay butonuna tıklandığında detay çekmecesini açacak fonksiyonu çağırın */}
                    <Button size="small">Sepete Ekle</Button>
                </CardActions>
            </Card>
            {
                selectedProduct && (
                    <DetailDrawer open={drawerOpen} onClose={handleCloseDrawer} product={selectedProduct} />
                )
            }

        </>
    );
}
