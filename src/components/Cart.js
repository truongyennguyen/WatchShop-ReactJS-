import React, { Component } from "react";
import * as actions from '../actions/index';

import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Fade from 'react-reveal/Fade';

import { connect } from "react-redux";
import { Typography, Button } from "@material-ui/core";

const styles = theme => ({
	listMenu : {
		width : 500
	},

	space : {
		minHeight: 10
	},

});

class Cart extends Component {
	onToggleCart = () => {
        this.props.onToggleCart()
    }
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Drawer anchor="right" open={this.props.isShowCart} onClose={this.onToggleCart} elevation={1}>
					<div className={classes.space} />
					<div className={classes.listMenu}>
						<List>
							<ListItem>
								<Typography variant="h4" align="center">
									Giỏ đồ
								</Typography>
							</ListItem>
							<Divider />
							<Fade right>
								<ListItem>	
									<ListItemAvatar>
										<Avatar src="https://shopdongho.com/wp-content/uploads/2018/09/dong-ho-casio-efr-303l-1avudf-nam-pin-day-da.jpg" alt="" />
									</ListItemAvatar>
									<ListItemText primary="Đồng hồ Casio EFR-303L-1AVUDF Nam Pin dây Da" />
									<ListItemText secondary="6.218.000" />
								</ListItem>
							</Fade>
							<Fade right delay={50}>
								<ListItem>	
									<ListItemAvatar>
										<Avatar src="https://shopdongho.com/wp-content/uploads/2018/09/dong-ho-casio-efr-303l-1avudf-nam-pin-day-da.jpg" alt="" />
									</ListItemAvatar>
									<ListItemText primary="Đồng hồ Casio EFR-303L-1AVUDF Nam Pin dây Da" />
									<ListItemText secondary="6.218.000" />
								</ListItem>
							</Fade>
							<Fade right delay={100}>
								<ListItem>	
									<ListItemAvatar>
										<Avatar src="https://shopdongho.com/wp-content/uploads/2018/09/dong-ho-casio-efr-303l-1avudf-nam-pin-day-da.jpg" alt="" />
									</ListItemAvatar>
									<ListItemText primary="Đồng hồ Casio EFR-303L-1AVUDF Nam Pin dây Da" />
									<ListItemText secondary="6.218.000" />
								</ListItem>
							</Fade>
							<Fade right delay={150}>
								<ListItem>	
									<ListItemAvatar>
										<Avatar src="https://shopdongho.com/wp-content/uploads/2018/09/dong-ho-casio-efr-303l-1avudf-nam-pin-day-da.jpg" alt="" />
									</ListItemAvatar>
									<ListItemText primary="Đồng hồ Casio EFR-303L-1AVUDF Nam Pin dây Da" />
									<ListItemText secondary="6.218.000" />
								</ListItem>
							</Fade>
							<Fade right delay={200}>
								<ListItem>	
									<Button variant="contained" className="remove_outline center">
										Thanh toán
									</Button>
								</ListItem>
							</Fade>
						</List>
					</div>
				</Drawer>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		isShowCart: state.ShowCart
	});
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleCart: () => {
            dispatch(actions.ShowCart())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Cart));
