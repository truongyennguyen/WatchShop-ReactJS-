import React, { Component } from "react";
import * as actions from './../actions/index';

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

import { connect } from "react-redux";

const styles = theme => ({
	listMenu : {
		width : 250
	},

	space : {
		minHeight: 55
	}

});

class MenuToggle extends Component {
	onToggleNav = () => {
        this.props.onToggleNav()
    }
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Drawer anchor="left" open={this.props.isShowNav} onClose={this.onToggleNav} elevation={1}>
					<div className={classes.space} />
					<div className={classes.listMenu}>
						<List>
							<Divider />
							<ListItem button onClick={this.onToggleNav}>
								<ListItemIcon>
									<WatchIcon />
								</ListItemIcon>
								<ListItemText primary="Thương hiệu" />
							</ListItem>
							<ListItem button onClick={this.onToggleNav}>
								<ListItemIcon>
									<ManIcon />
								</ListItemIcon>
								<ListItemText primary="Nam" />
							</ListItem>
							<ListItem button onClick={this.onToggleNav}>
								<ListItemIcon>
									<WomanIcon />
								</ListItemIcon>
								<ListItemText primary="Nữ" />
							</ListItem>
							<ListItem button onClick={this.onToggleNav}>
								<ListItemIcon>
									<CoupleIcon />
								</ListItemIcon>
								<ListItemText primary="Đôi" />
							</ListItem>
							<Divider />
							<ListItem button onClick={this.onToggleNav}>
								<ListItemIcon>
									<StarIcon />
								</ListItemIcon>
								<ListItemText primary="Top 100" />
							</ListItem>
							<ListItem button onClick={this.onToggleNav}>
								<ListItemIcon>
									<AccessTimeIcon />
								</ListItemIcon>
								<ListItemText primary="Treo tường" />
							</ListItem>
						</List>
					</div>
				</Drawer>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		isShowNav: state.isShowNav
	});
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleNav: () => {
            dispatch(actions.isShowNav())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MenuToggle));
