import { connect } from 'react-redux';
import { getAllPosts } from '../../../actions/index'
import NavigationBar from './NavigationBar/NavigationBar'

const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: () => dispatch(getAllPosts())
    }
}

export default connect(null, mapDispatchToProps)(NavigationBar)