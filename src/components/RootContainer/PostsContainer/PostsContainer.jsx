import { connect } from 'react-redux';
import Posts from './Posts/Posts'
import { getPost } from './../../../actions/index'

const mapStateToProps = state => {
    const { posts, post } = state
    return {
        posts: posts,
        post: post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => {
            dispatch(getPost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)