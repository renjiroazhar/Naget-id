import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { connect } from 'react-redux';
import { signOut } from '../../../../../../redux/actions/authActions';
import 'antd/dist/antd.css';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { AlertDialog, Button } from 'react-onsenui';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
	appBar: {
		position: 'relative',
		backgroundColor: '#16a085'
	},
	flex: {
		flex: 1
	},
	cssLabel: {
		color: '#999',
		'&$cssFocused': {
			color: '#000000'
		}
	},
	cssFocused: {},
	cssUnderline: {
		width: '100%',
		borderColor: '#fff',
		color: '#000',
		borderBottomColor: '#000000',
		'&:before': {
			borderBottomColor: '#000000'
		},
		'&:after': {
			borderBottomColor: '#000000'
		},
		'&:hover': {
			borderBottomColor: '#000000'
		}
	},
	margin: {
		margin: theme.spacing.unit,
		maxWidth: '350px',
		width: '100%',
		fontWeight: 400,
		color: 'white',
		backgroundColor: '#00c43e',
		textDecoration: 'none',
		borderRadius: 0,
		'&:hover': {
			backgroundColor: '#f7f7f7',
			color: '#00c43e'
		}
	},
	form: {
		textAlign: 'center'
	}
});

class Logout extends React.Component {
	state = {
		open: false,
		currentPassword: '',
		newPassword: '',
		isOpen: false
	};

	logout = () => {
		this.props.signOut();
		this.props.history.push('/');
	};

	onChangeTab = selectedTab => {
		this.setState({
			selectedTab: selectedTab
		});
	};

	handleOpen = () => {
		this.setState({
			isOpen: true
		});
	};

	handleClose = () => {
		this.setState({
			isOpen: false
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div style={{ backgroundColor: 'white' }}>
				<List
					className={classes.list}
					onClick={this.handleOpen}
					style={{ paddingBottom: '10px' }}
				>
					<ListItem button onClick={this.handleOpen}>
						<ListItemIcon>
							<ExitToApp style={{ fontSize: '24px', color: 'red' }} />
						</ListItemIcon>
						<ListItemSecondaryAction>
							<ListItemText
								style={{ fontSize: '24px' }}
								inset
								primary="Keluar"
							/>
						</ListItemSecondaryAction>
					</ListItem>
				</List>

				<AlertDialog
					isOpen={this.state.isOpen}
					onCancel={this.handleClose}
					cancelable
				>
					<div className="alert-dialog-title">Keluar</div>
					<div className="alert-dialog-content">Anda Yakin?</div>

					<Divider />
					<Button onClick={this.logout} className="alert-dialog-button">
						Ya
					</Button>
					<Button onClick={this.handleClose} className="alert-dialog-button">
						Tidak
					</Button>
				</AlertDialog>
			</div>
		);
	}
}

Logout.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	};
};

export default connect(
	null,
	mapDispatchToProps
)(withStyles(styles)(withRouter(Logout)));
