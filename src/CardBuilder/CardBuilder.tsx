import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import BuilderForm, { FormValue, emptyFormValue } from './BuilderForm'
import PreviewCard from './PreviewCard'

const styles = (theme: Theme) => ({
    builderContainer: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap' as 'wrap',
    }
})

export interface Props extends WithStyles<typeof styles> {
}

export interface State {
    cardContents: FormValue
}

export class CardBuilder extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)

        this.state = {
            cardContents: emptyFormValue,
        }
    }

    private setCardContents = (cardContents: FormValue) => {
        this.setState({ cardContents })
    }

    public render() {
        const { classes } = this.props
        const { cardContents } = this.state

        return (
            <div className={classes.builderContainer}>
                <BuilderForm onFormChange={this.setCardContents} />
                <PreviewCard contents={cardContents} />
            </div>
        )
    }
}

export default withStyles(styles)(CardBuilder)
