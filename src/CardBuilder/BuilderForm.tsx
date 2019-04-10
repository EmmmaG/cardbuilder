import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import Divider from '../Components/Divider'


const styles = (theme: Theme) => ({

})

export interface Props extends WithStyles<typeof styles> {
}

export class BuilderForm extends React.Component<Props > {
    public render() {
        const { classes } = this.props

        return (
            <div>
                <Divider title='PERSONAL DETAILS' />
                <Button
                    buttonContent='Upload Avatar'
                    onClick={() => console.log('a')}
                    backgroundColor='#768E9C'
                />
                <Button
                    buttonContent='Create hCard'
                    onClick={() => console.log('a')}
                    backgroundColor='#43A8E0'
                />
            </div>
        )
    }
}

export default withStyles(styles)(BuilderForm)
