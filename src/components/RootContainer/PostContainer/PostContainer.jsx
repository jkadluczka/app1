import React from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


class PostContainer extends React.Component {

    render(){
        return (
            <div style={{marginTop: '64px'}}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={(<ExpandMoreIcon/>)}
                    >
                        Post1
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Stuff
                        </Typography>
                         </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default PostContainer
