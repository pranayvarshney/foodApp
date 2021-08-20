import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import axios from 'axios'
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

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


export default function SimpleCard({order,orderid}) {
    const classes = useStyles();
    
    const {cartItems, createdAt,subTotal,_id} = order
    
    const [value, setValue] = useState(order.rating);
    const [hover, setHover] = useState(-1);
    useEffect(async() => {
        await axios.post('/api/orders/rating', {value,_id})
        
    }, [value])
    return (
        <Card key={orderid} className={classes.root} style ={{border: 'black solid 2px', width : 'max-content', margin : '10px',}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                   Order Receipt
                </Typography>
                <Typography variant="h5" component="h6">
                    <ul>
                    { cartItems.map((item)=>{
                        return (
                            <li>{item.name}</li>
                        )
                    }) }
                    </ul>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Transaction time :   {createdAt}
                </Typography>
                <Typography variant="h5" component="h4"> Price : {subTotal}
                </Typography>
                <Typography variant="h5" component="h4"> Transaction id : {_id}
                </Typography>
                   <div className="row">
                    <div className={classes.root}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {

                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                        />
                        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                    </div> 
                   </div>
            </CardContent>
            
        </Card>
    );
}