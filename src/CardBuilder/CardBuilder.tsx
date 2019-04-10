import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import BuilderForm from './BuilderForm'
const styles = (theme: Theme) => ({

})

export interface Props extends WithStyles<typeof styles> {
}

export class CardBuilder extends React.Component<Props > {
    public render() {
        const { classes } = this.props

        return (
            <div>
                <BuilderForm />
            </div>
        )
    }
}

export default withStyles(styles)(CardBuilder)
