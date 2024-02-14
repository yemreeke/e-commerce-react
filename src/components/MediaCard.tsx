import Card, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IProduct } from '../interface/product.interface';


type Props = {
    data: IProduct
}

export default function MediaCard(props: Props) {
    return (
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
                <Button size="small">Detay</Button>
                <Button size="small">Sepete Ekle</Button>
            </CardActions>
        </Card>
    );
}
