import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions/index';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import QuestionIcon from '@material-ui/icons/QuestionAnswer';
import CartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: 1300,
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.1),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
      },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
})


class Header extends Component {
    onToggleNav = () => {
        this.props.onToggleNav()
    }
    render() {
        const { classes } = this.props;
        return (
            <header className={classes.root}>
                <AppBar color="inherit" className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" className={"remove_outline"} onClick={this.onToggleNav}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Watch Shop
                        </Typography>
                        {/* search bar */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div>
                            <Tooltip title="Trang chủ">
                                <IconButton className="remove_outline">
                                    <HomeIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Hỗ trợ">
                                <IconButton className="remove_outline">
                                    <QuestionIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Phản hồi">
                                <IconButton className="remove_outline">
                                    <MailIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Tài khoản">
                                <IconButton className="remove_outline">
                                    <PersonIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Giỏ đồ">
                                <IconButton className="remove_outline">
                                    <Badge badgeContent={4} color="secondary">
                                        <CartIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleNav: () => {
            dispatch(actions.isShowNav())
        }
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));