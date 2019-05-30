import React, { Component } from "react";
import * as actions from '../actions/index';

import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import WatchIcon from "@material-ui/icons/Watch";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CoupleIcon from "@material-ui/icons/Wc";

import ManIcon from "./ManIcon";
import WomanIcon from "./WomanIcon";

import Fade from 'react-reveal/Fade';

import { connect } from "react-redux";

const styles = theme => ({
	listMenu : {
		width : 250
	},

	space : {
		minHeight: 55
	}

});

class Menu extends Component {
	onToggleMenu = () => {
        this.props.onToggleMenu()
    }
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Drawer anchor="left" open={this.props.isShowMenu} onClose={this.onToggleMenu} elevation={1}>
					<div className={classes.space} />
					<div className={classes.listMenu}>
						<List>
							<Divider />
							<Fade left>
								<ListItem button onClick={this.onToggleMenu}>
									<ListItemIcon>
										<WatchIcon />
									</ListItemIcon>
									<ListItemText primary="Thương hiệu" />
								</ListItem>
							</Fade>
							<Fade left delay={50}>
								<ListItem button onClick={this.onToggleMenu}>
									<ListItemIcon>
										<ManIcon />
									</ListItemIcon>
									<ListItemText primary="Nam" />
								</ListItem>
							</Fade>
							<Fade left delay={100}>
								<ListItem button onClick={this.onToggleMenu}>
									<ListItemIcon>
										<WomanIcon />
									</ListItemIcon>
									<ListItemText primary="Nữ" />
								</ListItem>
							</Fade>
							<Fade left delay={150}>
								<ListItem button onClick={this.onToggleMenu}>
									<ListItemIcon>
										<CoupleIcon />
									</ListItemIcon>
									<ListItemText primary="Đôi" />
								</ListItem>
							</Fade>
							<Fade left delay={200}>
								<Divider />
								<ListItem button onClick={this.onToggleMenu}>
									<ListItemIcon>
										<StarIcon />
									</ListItemIcon>
									<ListItemText primary="Top 100" />
								</ListItem>
							</Fade>
							<Fade left delay={250}>
								<ListItem button onClick={this.onToggleMenu}>
									<ListItemIcon>
										<AccessTimeIcon />
									</ListItemIcon>
									<ListItemText primary="Treo tường" />
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
		isShowMenu: state.ShowMenu
	});
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleMenu: () => {
            dispatch(actions.ShowMenu())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Menu));
