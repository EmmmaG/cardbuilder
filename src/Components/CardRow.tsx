import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) => ({
    rowContainer: {
        position: 'relative' as 'relative',
        height: '35px',
    },
    titleContainer: {
        display: 'inline-block',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        width: '80px',
        position: 'absolute' as 'absolute',
        bottom: 0,
        left: 0,
    },
    contentContainer: {
        display: 'inline-block',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        position: 'absolute' as 'absolute',
        bottom: 0,
        left: '80px',
        width: '310px',
    },
    content: {
        whiteSpace: 'nowrap' as 'nowrap',
        overflowX: 'hidden' as 'hidden',
        textOverflow: 'ellipsis',
        fontFamily: '"Big Caslon", "Times New Roman", "serif"',
        fontSize: '18px',
        textAlign: 'left' as 'left',
    },
    title: {
        fontSize: '12px',
        color: '#374D60',
        textAlign: 'left' as 'left',
    },
})

export interface Props extends WithStyles<typeof styles> {
    title?: string
    content: string
    inline?: boolean
}

export class CardRow extends React.PureComponent<Props> {
	public render() {
        const { classes, title, content, inline } = this.props
        const containerInlineStyle = inline ? { width: '195px' } : undefined
        const contentInlineStyle = inline ? { width: '115px' } : undefined

		return (
			<div className={classes.rowContainer} style={containerInlineStyle}>
                <div className={classes.titleContainer}>
                    {title && <Typography className={classes.title}>{title}</Typography>}
                </div>
                <div className={classes.contentContainer} style={contentInlineStyle}>
                    {content && (
                        <Typography
                            className={classes.content}
                        >
                            {content}
                        </Typography>
                    )}
                </div>
            </div>
		)
	}
}

export default withStyles(styles)(CardRow)
