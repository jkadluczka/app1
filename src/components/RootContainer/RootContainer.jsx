import React from 'react';
import Toolbar from './ToolbarContainer/ToolbarContainer'
import PostContainer from './PostContainer/PostContainer'


class RootContainer extends React.Component {

    render() {
        return (
            <div>
                <Toolbar/>
                <PostContainer />
            </div>
        )
    }
}

export default RootContainer
