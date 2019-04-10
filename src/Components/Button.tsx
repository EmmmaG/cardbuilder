import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import ButtonComponent from '@material-ui/core/Button'

const styles = (theme: Theme) => ({
	button: {
		color: 'white',
        fontSize: '20px',
        backgroundColor: theme.palette.grey[500],
		textTransform: 'none' as 'none',
		fontWeight: 450,
		padding: '3px 20px',
        borderRadius: '3px',
        width: '200px',
        minWidth: '200px',
        border: `1px solid ${theme.palette.grey[500]}`,
	},
})

export interface Props extends WithStyles<typeof styles> {
    buttonContent: string
    onClick: () => void
    backgroundColor?: string
}

export class Button extends React.Component<Props> {
	public render() {
		const { classes, buttonContent, onClick, backgroundColor } = this.props

		return (
			<ButtonComponent
                variant='contained'
				className={classes.button}
                onClick={onClick}
                style={{backgroundColor}}
			>
				{buttonContent}
			</ButtonComponent>
		)
	}
}

export default withStyles(styles)(Button)
