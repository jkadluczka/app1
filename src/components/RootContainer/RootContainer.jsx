import React from 'react';
import NavigationBar from './ToolbarContainer/NavigationBarContainer'
import Posts from './PostsContainer/PostsContainer'


class RootContainer extends React.Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <Posts />
            </div>
        )
    }
}

export default RootContainer
