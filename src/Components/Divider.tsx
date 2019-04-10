import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DividerComponent from '@material-ui/core/Divider'

const styles = (theme: Theme) => ({
    title: {
        color: theme.palette.grey[400],
        fontWeight: 600,
        fontSize: '14px',
    },
    container: {
        textAlign: 'left' as 'left',
        marginTop: '25px',
        marginBottom: '20px',
        marginLeft: '10px',
        marginRight: '10px',
    },
})

export interface Props extends WithStyles<typeof styles> {
    title: string
}

export class Divider extends React.Component<Props> {
	public render() {
		const { classes, title } = this.props

		return (
			<div className={classes.container}>
                <Typography className={classes.title}>{title}</Typography>
                <DividerComponent />
            </div>
		)
	}
}

export default withStyles(styles)(Divider)
