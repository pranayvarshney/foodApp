import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Registerscreen() {
    const classes = useStyles();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const dispatch = useDispatch()
    function register (){
        if (password !== cpassword){
            alert('passwords dont match')
        }
        else {
            const user ={
                name,
                email,
                password
            }
            try {
                dispatch(registerUser(user))
            } catch (error) {
                alert('Error creating user')
            }
           
        }
    }


   
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={name}
                                onChange={(e)=>{
                                    setname(e.target.value)
                                }}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => {
                                    setpassword(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmpassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmpassword"
                                autoComplete="current-password"
                                value={cpassword}
                                onChange={(e) => {
                                    setcpassword(e.target.value)
                                }}
                            />
                        </Grid>
                        
                    </Grid>
                    <Button
                        
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick ={()=>{
                            register()
                        }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            
        </Container>
    );
}