import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root : {
        marginTop: 200,
        backgroundColor: theme.palette.background.paper,
    },

    image : {
        maxHeight: 400,
        marginLeft: 100,
    },

    textField :{
        marginTop: 40
    },

    price: {
        marginTop: 40
    },

    button : {
        marginTop: 40
    }, 

    divider : {
        marginTop: 40,
        marginBottom: 40,
    },

    decription : {
        marginTop: 20,
        marginBottom: 30,
    }
});

class ProductDescription extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img className={classes.image} src="https://shopdongho.com/wp-content/uploads/2018/09/dong-ho-casio-efr-303l-1avudf-nam-pin-day-da.jpg" 
                            alt="Đồng hồ Casio EFR-303L-1AVUDF Nam Pin dây Da"  style={{border: '1px solid black'}}/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="row">
                            <Typography variant="h6" color="inherit" noWrap>
                                Đồng hồ Casio EFR-303L-1AVUDF Nam Pin dây Da
                            </Typography>
                        </div>
                        <div className="row">
                            <Typography className={classes.price} variant="subtitle1" color="inherit" noWrap>
                                6.218.000
                            </Typography>
                        </div>
                        <div className="row"> 
                            <TextField 
                                className={classes.textField} 
                                label="Số lượng" 
                                InputLabelProps={{ shrink: true }} 
                                type="Number" 
                                InputProps={{ inputProps: { min: 0} }} 
                                defaultValue ={1}
                            />
                        </div>
                        <div className="row">
                            <Button  variant="contained" className={["remove_outline", classes.button].join(" ")}>Thêm vào giỏ đồ</Button>    
                        </div>
                        <div className={["row", classes.divider].join(" ")} style={{borderTop: '1px solid black'}} />
                        <div className="row">
                            <Typography variant="subtitle1" color="inherit" noWrap>
                                Thông tin sản phẩm
                            </Typography>
                        </div>
                        <div className={["row", classes.decription].join(" ")}>
                            <Typography variant="subtitle2" color="inherit">
                            Casio là thương hiệu đồng hồ Nhật bản với những sản phẩm sang trọng, đẳng cấp và được tạo nên từ những chất liệu hoàn hảo, chuẩn theo những đức tính của Người Nhật. Luôn biết làm mới mình từ mẫu mã thiết kế đến bộ máy, vì thế Orient đã khiến các quý ông rất ưa chuộng. Nhắc đến thương hiệu này, chúng ta không thể không kể đến chiếc đồng hồ Casio EFR-303L-1AVUDF.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ProductDescription);
