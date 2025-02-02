import { Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { IProduct } from '../interface/product.interface';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch } from '../store/store';
import { addItem } from '../store/reducers/cartReducer';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ToastSuccess } from '../utils/toast';

type Props = {
    open: boolean;
    onClose: () => void;
    product: IProduct;
};

const DetailDrawer: React.FC<Props> = ({ open, onClose, product }) => {

    const appDispatch = useAppDispatch();

    const onAddCart = () => {
        appDispatch(addItem(product))
        ToastSuccess('Sepete Eklendi');
    };
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: "35%",
                    padding: 5
                },
            }}
        >
            <div style={{ width: "100%", padding: 20 }}>
                <IconButton aria-label="delete" size="large" color="primary" onClick={onClose} sx={{
                    position: "absolute",
                    top: 10,
                    right: 10

                }}>
                    <CloseOutlinedIcon fontSize="inherit" />
                </IconButton>
                <img src={product.image} alt={product.name} width={"100%"} height={300} style={{
                    objectFit: "contain"
                }} />
                <Stack mt={5}>
                    <Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
                        <Typography gutterBottom variant="h4" component="div">
                            {product?.brand}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {product?.category}
                        </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div" color="text.secondary" mt={1}>
                        {product?.name}
                    </Typography>
                    <Typography variant="h6" color="text.primary" gutterBottom sx={{
                        color: "#1A76D2"
                    }}>
                        {product?.price} ₺
                    </Typography>
                    <Button onClick={onAddCart} variant="outlined" startIcon={<ShoppingCartIcon />} sx={{ my: 3 }}>
                        Sepete Ekle
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                        {product?.description}
                    </Typography>

                </Stack>
            </div>
        </Drawer>
    );
};

export default DetailDrawer;
