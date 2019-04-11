import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

export interface HTMLFileInputElement extends HTMLInputElement {
    files: FileList
}

export const styles = () => ({
    fileInput: {
        opacity: 0,
        position: 'absolute' as 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
    },
    addButton: {
        position: 'relative' as 'relative',
        display: 'inline-block',
        boxSizing: 'border-box' as 'border-box',
        backgroundColor: '#768E9C',
		padding: '3px 20px',
        width: '195px',
        height: '41px',
		border: 'none',
		borderRadius: '3px',
		marginLeft: '10px',
		marginRight: '10px',
    },
    buttonText: {
        color: 'white',
        fontSize: '20px',
		fontWeight: 450,
    }
})

export interface Props extends WithStyles<typeof styles> {
    onFileLoaded: (data: string) => void
}

export class UploadFileButton extends React.Component<Props> {
    private readFile = (file: File) => {
        const reader = new FileReader()
        reader.addEventListener('load', _e => this.props.onFileLoaded(reader.result as string))
        reader.readAsDataURL(file)
    }

    private onInputChange = (event: React.ChangeEvent<HTMLFileInputElement>) => {
        const target = event.target as HTMLFileInputElement

        // FileList type has no forEach
        [].forEach.call(target.files, this.readFile)
    }

    public render() {
        const { classes, children } = this.props

        return (
            <ButtonBase
                className={classes.addButton}
            >
                <Typography className={classes.buttonText}>Upload Avatar</Typography>
                <input
                    className={classes.fileInput}
                    type='file'
                    onChange={this.onInputChange}
                    onClick={(event: any) => {
                        event.target.value = null
                    }}
                    accept="image/*"
                />
            </ButtonBase>
        )
    }
}

export default withStyles(styles)(UploadFileButton)
