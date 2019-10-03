import { connect } from 'react-redux';
import NavigationBar from './NavigationBar/NavigationBar'

const mapStateToProps = state => {
    const { posts } = state
    return { posts: posts }
}

export default connect(mapStateToProps)(NavigationBar)