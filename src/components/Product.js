import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        maxWidth: 300,
        marginTop: 100,
        marginLeft: 20
    },
    media: {
        height: 300,
    },
    price: {
        textSize: 20,
    },
    grow: {
        flexGrow: 1,
    },

});

class Product extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card} to="/about">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={this.props.image}
                        title={this.props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                        {this.props.name}
                        </Typography>
                        <Typography variant="subtitle1">
                        {this.props.price}
                         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className={classes.grow}></div>
                    <Button size="small" color="primary">
                        Thêm vào giỏ
                    </Button>
                    <Button size="small" color="primary" to="/about">
                        Chi tiết
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(Product);
