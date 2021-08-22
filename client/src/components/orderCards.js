import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import axios from 'axios'
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';



const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function SimpleCard({ order }) {
    const classes = useStyles();

    const { cartItems, createdAt, subTotal, _id } = order
    const [rating, setrating] = useState(order.rating)
    useEffect(() => { axios.post('/api/orders/rating', { rating, _id }) }
        , [rating])
    return (
        <Card className={classes.root} style={{ border: 'black solid 2px', width: 'max-content', margin: '10px', }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Order Receipt
                </Typography>
                <Typography variant="h5" component="h6">
                    <ol className="list-group">
                        {cartItems.map((item) => {
                            return (
                                <li className="list-group-item">{item.name}</li>
                            )
                        })}
                    </ol>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Transaction time :   {createdAt}
                </Typography>
                <Typography variant="h5" component="h4"> Price : {subTotal}
                </Typography>
                <Typography variant="h5" component="h4"> Transaction id : {_id}
                </Typography>
                <div className="row">
                    <div className="ml-4">Rate Your Order</div>
                    <select className='form-control' value={rating} onChange={(e) => setrating(e.currentTarget.value)}>{[...Array(5).keys()].map((x, i) => {
                        return <option value={i + 1}>{i + 1} stars</option>
                    })}</select>
                </div>
            </CardContent>

        </Card>
    );
}