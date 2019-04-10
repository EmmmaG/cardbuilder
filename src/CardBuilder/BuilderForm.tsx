import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import Divider from '../Components/Divider'


const styles = (theme: Theme) => ({
    title: {
        fontSize: '32px',
        fontWeight: 900,
        color: '#374D60',
        marginLeft: '10px',
        textAlign: 'left' as 'left',
    },
    mainContainer: {
        backgroundColor: 'white',
        maxWidth: '430px',
        textAlign: 'center' as 'center',
        padding: '30px',
        display: 'inline-block',
    },
    buttonContainer: {
        marginTop: '30px',
    },
})

export interface FormValue {
    givenName: string
    surname: string
    email: string
    phone: string
    houseName: string
    street: string
    suburb: string
    state: string
    postcode: string
    country: string
}

export interface Props extends WithStyles<typeof styles> {
    onFormChange: (formValue: FormValue) => void
}

export interface State {
    formValue: FormValue
}

export const emptyFormValue: FormValue = {
    givenName: '',
    surname: '',
    email: '',
    phone: '',
    houseName: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
}

type FormKey = keyof FormValue

export class BuilderForm extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)

        this.state = {
            formValue: emptyFormValue,
        }
    }

    private onTextFieldChange = (value: string, formKey: FormKey) => {
        const currentFormValue = this.state.formValue

        this.setState({
            formValue: {
                ...currentFormValue,
                [formKey]: value,
            }
        }, () => {this.props.onFormChange(this.state.formValue)})
    }

    private renderTextInput = (title: string, formKey: FormKey) => {
        return (
            <TextInput key={formKey} title={title} onChange={(value) => this.onTextFieldChange(value, formKey)} />
        )
    }

    private renderPersonalDetails = () => {
        const nameRow = [{
            title: 'GIVEN NAME',
            formKey: 'givenName' as FormKey,
        }, {
            title: 'SURNAME',
            formKey: 'surname' as FormKey,
        }].map(element => this.renderTextInput(element.title, element.formKey))

        const detailRow = [{
            title: 'EMAIL',
            formKey: 'email' as FormKey,
        }, {
            title: 'PHONE',
            formKey: 'phone' as FormKey,
        }].map(element => this.renderTextInput(element.title, element.formKey))

        return (
            <div>
                <Divider title='PERSONAL DETAILS' />
                <div>
                    {nameRow}
                </div>
                <div>
                    {detailRow}
                </div>
            </div>
        )
    }

    private renderAddress = () => {
        const streetRow = [{
            title: 'HOUSE NAME OR #',
            formKey: 'houseName' as FormKey,
        }, {
            title: 'STREET',
            formKey: 'street' as FormKey,
        }].map(element => this.renderTextInput(element.title, element.formKey))

        const suburbRow = [{
            title: 'SUBURB',
            formKey: 'suburb' as FormKey,
        }, {
            title: 'STATE',
            formKey: 'state' as FormKey,
        }].map(element => this.renderTextInput(element.title, element.formKey))

        const postcodeRow = [{
            title: 'POSTCODE',
            formKey: 'postcode' as FormKey,
        }, {
            title: 'COUNTRY',
            formKey: 'country' as FormKey,
        }].map(element => this.renderTextInput(element.title, element.formKey))

        return (
            <div>
                <Divider title='PERSONAL DETAILS' />
                <div>
                    {streetRow}
                </div>
                <div>
                    {suburbRow}
                </div>
                <div>
                    {postcodeRow}
                </div>
            </div>
        )
    }

    private renderButtons = () => (
        <div className={this.props.classes.buttonContainer}>
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

    public render() {
        const { classes } = this.props

        return (
            <div className={classes.mainContainer}>
				<Typography className={classes.title}>hCard Builder</Typography>

                {this.renderPersonalDetails()}

                {this.renderAddress()}

                {this.renderButtons()}
            </div>
        )
    }
}

export default withStyles(styles)(BuilderForm)
