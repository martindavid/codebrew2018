// @flow
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { hideAlert } from '../actions/alert';

type Props = {
  classes: Object,
  hideAlert: () => void,
  message: string,
  pathname: string,
  visible: boolean,
};

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class Alert extends Component {
  componentWillReceiveProps(nextProps) {
    const { visible, pathname } = this.props;

    if (visible && pathname !== nextProps.pathname) {
      this.props.hideAlert();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.visible !== this.props.visible) return true;
    return false;
  }

  onClose = () => {
    this.props.hideAlert();
  };

  props: Props;

  render() {
    const { message, visible, classes } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={visible}
        autoHideDuration={3000}
        onClose={this.onClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.onClose}
          >
            <Icon>close</Icon>
          </IconButton>,
        ]}
      />
    );
  }
}

const mapStateToProps = state => ({
  message: state.alert.message,
  visible: state.alert.visible,
});

export default compose(withStyles(styles), connect(mapStateToProps, { hideAlert }))(Alert);
