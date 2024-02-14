import { Drawer, Stack, Typography, } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../store/store';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { IProduct } from '../interface/product.interface';
import { decreaseQuantity, increaseQuantity, removeItem } from '../store/reducers/cartReducer';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type Props = {
    open: boolean;
    onClose: () => void;
};

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}


const ShoppingCard: React.FC<Props> = ({ open, onClose }) => {
    const { items, totalPrice, totalQuantity } = useAppSelector((state) => state.cart);
    const appDispatch = useAppDispatch();

    const onDeleteItem = (item: IProduct) => {
        appDispatch(removeItem({ productId: item.id }))
    };

    const onIncItem = (item: IProduct) => {
        appDispatch(increaseQuantity({ productId: item.id }))
    };
    const onDecItem = (item: IProduct) => {
        appDispatch(decreaseQuantity({ productId: item.id }))
    }
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: "50%",
                    padding: 2.5,
                },
            }}
        >
            <div style={{ width: "100%" }}>
                <Stack mt={5}>
                    <IconButton aria-label="delete" size="large" color="primary" onClick={onClose} sx={{
                        position: "absolute",
                        top: 10,
                        left: 10

                    }}>
                        <CloseOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <Typography variant="h5" color="text.primary" textAlign={"center"} mb={5}>
                        {`Sepetiniz (${items.length} Ürün)`}
                    </Typography>
                    <TableContainer>
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Ürün</TableCell>
                                    <TableCell align="right">Fiyat</TableCell>
                                    <TableCell align="right">Adet</TableCell>
                                    <TableCell align="right">Toplam</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Stack direction="row" spacing={2} alignItems={"center"} gap={2}>
                                                <img src={item.product.image} alt={item.product.name} width={50} height={50} style={{ objectFit: "contain" }} />
                                                {item.product.name}
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="right">{item.product.price}</TableCell>
                                        <TableCell align="right">
                                            <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"} >
                                                <IconButton size="medium" color="primary" onClick={() => onDecItem(item.product)}>
                                                    <RemoveCircleOutlineOutlinedIcon fontSize="inherit" />
                                                </IconButton>
                                                {item.quantity}
                                                <IconButton size="medium" color="primary" onClick={() => onIncItem(item.product)}>
                                                    <AddCircleOutlineOutlinedIcon fontSize="inherit" />

                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="right">{ccyFormat(item.product.price * item.quantity)}</TableCell>
                                        <TableCell >
                                            <IconButton aria-label="delete" size="medium" color="error" onClick={() => onDeleteItem(item.product)}>
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2} />
                                    <TableCell rowSpan={3} align="right"> Toplam: {ccyFormat(totalPrice)}</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </div>
        </Drawer>
    );
};

export default ShoppingCard;
