import { Drawer, Stack, Typography, } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
    open: boolean;
    onClose: () => void;
};

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
    return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

interface Row {
    desc: string;
    qty: number;
    unit: number;
    price: number;
}

function subtotal(items: readonly Row[]) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTotal = invoiceSubtotal;

const ShoppingCard: React.FC<Props> = ({ open, onClose }) => {

    return (
        <Drawer
            anchor="right"
            open={true}
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
                        Sepetiniz (4 Ürün)
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
                                {rows.map((row) => (
                                    <TableRow key={row.desc}>
                                        <TableCell>{row.desc}</TableCell>
                                        <TableCell align="right">{row.qty}</TableCell>
                                        <TableCell align="right">{row.unit}</TableCell>
                                        <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                    </TableRow>
                                ))}
                                {/* <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tax</TableCell>
                                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                </TableRow> */}
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2} />
                                    <TableCell rowSpan={3} align="right"> Toplam: {ccyFormat(invoiceTotal)}</TableCell>
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
