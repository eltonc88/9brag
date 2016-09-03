import { connect } from 'react-redux';
import AppRouter from './router';
import * as ACTIONS from '../../actions/meme_actions';

const mapStateToProps = state => ({
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllMemes: () => dispatch(ACTIONS.requestAllMemes()),
  requestSingleMeme: (id) => dispatch(ACTIONS.requestSingleMeme())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
