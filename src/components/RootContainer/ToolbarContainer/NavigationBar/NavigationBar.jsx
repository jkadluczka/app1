import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Add from '@material-ui/icons/Add'


class NavigationBar extends React.Component {
    render(){
        return (
            <AppBar postition="static">
                <IconButton onClick={() => this.props.getAllPosts()} >
                    <Add />
                </IconButton>
                <Typography variant="h6">
                    Blog n stuf
            </Typography>
            </AppBar>
        )
    }
}


export default NavigationBar