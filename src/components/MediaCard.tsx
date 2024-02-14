import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProduct } from '../interface/product.interface';
import { useState } from 'react';
import DetailDrawer from './DetailDrawer';
import { useAppDispatch } from '../store/store';
import { addItem } from '../store/reducers/cartReducer';
import { ToastSuccess } from '../utils/toast';

type Props = {
    item: IProduct
}
export default function MediaCard({ item }: Props) {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(undefined);

    const handleOpenDrawer = (product: IProduct) => {
        setSelectedProduct(product);
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };
    const appDispatch = useAppDispatch();

    const onProductAdd = () => {
        appDispatch(addItem(item))
        ToastSuccess('Sepete Eklendi');
    };

    return (
        <>
            <Card raised sx={{ maxWidth: 345 }}>
                <CardMedia
                    image={item.image}
                    component="img"
                    sx={{ height: 300, padding: "1em 1em 0 1em", objectFit: "contain" }}
                />
                <CardContent>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '100%', marginBottom: 5 }}>
                        <Typography variant="h5" color="text.secondary" noWrap>
                            {item.name}
                        </Typography>
                    </div>
                    <Typography variant="h6" color="text.primary">
                        {item.price} ₺
                    </Typography>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, width: '100%', height: 45, marginTop: 5 }}>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleOpenDrawer(item)}>Detay</Button> {/* Detay butonuna tıklandığında detay çekmecesini açacak fonksiyonu çağırın */}
                    <Button size="small" onClick={onProductAdd} >Sepete Ekle</Button>
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
