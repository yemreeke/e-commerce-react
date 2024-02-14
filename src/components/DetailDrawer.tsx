import { Drawer, Stack, Typography } from '@mui/material';
import React from 'react';
import { IProduct } from '../interface/product.interface';


type Props = {
    open: boolean;
    onClose: () => void;
    product: IProduct;
};

const DetailDrawer: React.FC<Props> = ({ open, onClose, product }) => {

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: "25%",
                    padding: 5
                },
            }}
        >
            <div style={{ width: "100%", padding: 20 }}>
                <img src={product.image} alt={product.name} width={"100%"} height={300} style={{
                    objectFit: "contain"
                }} />
                <Stack mt={5}>
                    <Typography gutterBottom variant="h4" component="div">
                        {product?.brand}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {product?.name}
                    </Typography>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        {product?.price} ₺
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product?.description}
                    </Typography>
                </Stack>
            </div>
        </Drawer>
    );
};

export default DetailDrawer;
