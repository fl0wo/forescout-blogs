import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { createGenerateClassName } from '@material-ui/styles';
import User from './User';
import Category from './Category';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import { makeStyles } from '@material-ui/core/styles';

import MaxWidthDialog from "../fragments/Dialog";


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export default class Blog extends React.Component {

    message: string;
    title: string;
    user_did_it: User;
    date_posted: Date;
    category: Category;

    constructor(title: string, message: string, date_posted: Date, user_did_it: User, category: Category) {
        super(true);
        //super(title);
        this.message = message;
        this.title = title;
        this.user_did_it = user_did_it;
        this.date_posted = date_posted;
        this.category = category;
    }

    render() {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        function handleExpandClick() {
            setExpanded(!expanded);
        }

        return (

            <div>
                <Box p={1}>

                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {this.user_did_it.name.charAt(0).toUpperCase()}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={this.title}
                            subheader={this.date_posted.toUTCString()}
                        />
                        {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                /> */}
                        <CardContent>

                            {<Typography variant="body2" color="textSecondary" component="p">

                                {this.message}

                            </Typography>}
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            {/* <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={MaxWidthDialog}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton> */}

                            {MaxWidthDialog()}

                            {/* <button onClick={MaxWidthDialog}>show popup</button> */}

                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method: </Typography>

                                <Typography paragraph>
                                    Ciao2
                        </Typography>

                                <Typography paragraph>
                                    Ciao3
                        </Typography>

                                <Typography paragraph>
                                    Ciao4
                        </Typography>

                                <Typography>
                                    Ciao5
                        </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                </Box>
            </div>

        );
    }
}



