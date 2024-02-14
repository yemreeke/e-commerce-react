

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';
import { useAppSelector } from '../store/store';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

type Props = {

}
const ScreenName: React.FC<Props> = (props) => {

    const [cartOpen, setCartOpen] = useState(false);

    const handleOpenDrawer = () => {
        setCartOpen(true);
    };

    const handleCloseDrawer = () => {
        setCartOpen(false);
    };

    const { items } = useAppSelector((state) => state.cart);
    return (
        <>
            <CssBaseline />
            <AppBar >
                <Toolbar>
                    <Typography variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        E-TİCARET
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <IconButton
                            onClick={handleOpenDrawer}
                            color="primary" aria-label="add to shopping cart">
                            <StyledBadge badgeContent={items.length} color="secondary">
                                <ShoppingCartIcon sx={{ color: "#FFFFFF" }} />
                            </StyledBadge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar >
            <Toolbar id="back-to-top-anchor" />
            <Outlet />
            <ShoppingCart
                open={cartOpen}
                onClose={handleCloseDrawer}
            />
        </>
    )
}
export default ScreenName;