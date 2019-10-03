import React from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


class Posts extends React.Component {

    state = {
        panel: false
    }

    handleChange = (panel, id) => (event, newExpanded) => {
        console.log(newExpanded)
        const value = newExpanded ? panel : false
        this.setState({ panel: value });
        this.props.getPost(id)
    };

    render() {
        const content = this.props.post.content ? this.props.post.content : ''

        const posts = this.props.posts.map((post, index) => (
            <ExpansionPanel expanded={this.state.panel === index} onChange={this.handleChange(index, post.id)}>
                <ExpansionPanelSummary
                    expandIcon={(<ExpandMoreIcon />)}
                >
                    {post.title}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {content}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        ))

        return (
            <div style={{ marginTop: '64px' }}>
                {posts}
            </div>
        )
    }
}

export default Posts
