import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const styles = (theme: Theme) => ({
	inputContainer: {
		textAlign: 'left' as 'left',
		marginTop: '5px',
		marginBottom: '5px',
		marginLeft: '10px',
		marginRight: '10px',
		display: 'inline-block',
	},
	textField: {
		height: '35px',
		backgroundColor: 'white',
		width: '195px',
	},
	inputRoot: {
		height: '35px',
		fontFamily: '"Big Caslon", "Times New Roman", "serif"',
	},
	title: {
		color: theme.palette.grey[700],
		marginBottom: '2px',
	},
})

export interface Select {
	value: string
	text: string
}

export interface Props extends WithStyles<typeof styles> {
	title: string
	onChange: (selectedValue: string) => void
}

export interface State {
    value: string
}

export class TextInput extends React.Component<Props, State> {
    public state = { value: ''}

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        this.setState({ value }, () => this.props.onChange(value))
	}

	public render() {
        const { classes, title } = this.props
        const { value } = this.state

		return (
			<div className={classes.inputContainer}>
				<Typography className={classes.title}>{title}</Typography>
				<TextField
					id={title}
					className={classes.textField}
					value={value}
					onChange={this.handleChange}
					variant='outlined'
					InputProps={{ classes: { root: classes.inputRoot } }}
				/>
			</div>
		)
	}
}

export default withStyles(styles)(TextInput)
