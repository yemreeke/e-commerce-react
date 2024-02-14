import { Drawer, Stack, Typography, } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from '../store/store';

type Props = {
    open: boolean;
    onClose: () => void;
};

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}


const ShoppingCard: React.FC<Props> = ({ open, onClose }) => {
    const { items, totalPrice, totalQuantity } = useAppSelector((state) => state.cart);
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: "50%",
                },
            }}
        >
            <div style={{ width: "100%" }}>
                <Stack mt={5}>
                    <Typography variant="h5" color="text.primary" textAlign={"center"} gutterBottom>
                        {`Sepetiniz (${items.length} Ürün)`}
                    </Typography>
                    <TableContainer >
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={3}>
                                        Detay
                                    </TableCell>
                                    <TableCell align="right">Toplam Fiyat</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Ürün</TableCell>
                                    <TableCell align="right">Fiyat</TableCell>
                                    <TableCell align="right">Adet</TableCell>
                                    <TableCell align="right">Toplam</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.product.name}</TableCell>
                                        <TableCell align="right">{item.product.price}</TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                        <TableCell align="right">{ccyFormat(item.product.price * item.quantity)}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2} />
                                    <TableCell rowSpan={3} align="right"> Toplam: {ccyFormat(totalPrice)}</TableCell>
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
