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
    avatarData: string //base 64
}

export class CardBuilder extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)

        this.state = {
            cardContents: emptyFormValue,
            avatarData: '',
        }
    }

    private setCardContents = (cardContents: FormValue) => {
        this.setState({ cardContents })
    }

    private setAvatar = (avatarData: string) => {
        this.setState({ avatarData })
    }

    public render() {
        const { classes } = this.props
        const { cardContents, avatarData } = this.state

        return (
            <div className={classes.builderContainer}>
                <BuilderForm onFormChange={this.setCardContents} onAvatarSelected={this.setAvatar}/>
                <PreviewCard contents={cardContents} avatar={avatarData}/>
            </div>
        )
    }
}

export default withStyles(styles)(CardBuilder)
