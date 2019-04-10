import * as React from 'react'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { FormValue } from './BuilderForm'
import person from '../assets/person.png'

import CardRow from '../Components/CardRow'

const styles = (theme: Theme) => ({
    mainContainer: {
        width: '450px',
        display: 'inline-block',
    },
    title: {
        textAlign: 'right' as 'right',
        color: theme.palette.grey[400],
        fontSize: '18px',
        fontWeight: 500,
        marginTop: '5px',
        marginBottom: '5px',
    },
    cardContainer: {
        position: 'relative' as 'relative',
        width: '100%',
        boxShadow: `0.5px 2px ${theme.palette.grey[300]}`,
    },
    nameContainer: {
        height: '110px',
        backgroundColor: '#394F62',
    },
    name: {
        color: 'white',
        fontFamily: '"Big Caslon", "Times New Roman", "serif"',
        fontSize: '26px',
        fontWeight: 600,
        paddingTop: '55px',
        paddingLeft: '20px',
    },
    profile: {
        position: 'absolute' as 'absolute',
        zIndex: 1,
        top: '15px',
        right: '15px',
        height: '110px',
        width: '85px',
        backgroundColor: 'white',
        padding: '5px',
        border: `1px solid ${theme.palette.grey[300]}`,
        boxShadow: `1px 2px ${theme.palette.grey[300]}`,
    },
    contentsContainer: {
        padding: '20px 30px',
        backgroundColor: 'white',

    },
    postCountryContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
})

export interface Props extends WithStyles<typeof styles> {
    contents: FormValue
    avatar?: string
}

export class PreviewCard extends React.Component<Props > {
    private renderCardContents = () => {
        const { contents, classes } = this.props
        const suburbRow = `${contents.suburb}${(contents.suburb && contents.state) ? ',' : ''} ${contents.state}`

        return (
            <div className={classes.contentsContainer}>
                <CardRow title='EMAIL' content={contents.email} />
                <CardRow title='PHONE' content={contents.phone} />
                <CardRow title='ADDRESS' content={`${contents.houseName} ${contents.street}`} />
                <CardRow content={suburbRow} />
                <div className={classes.postCountryContainer}>
                    <CardRow title='POSTCODE' content={contents.postcode} inline />
                    <CardRow title='COUNTRY' content={contents.country} inline />
                </div>
            </div>
        )
    }

    public render() {
        const { classes, contents, avatar } = this.props

        return (
            <div className={classes.mainContainer}>
                <Typography className={classes.title}>HCARD PREVIEW</Typography>
                <div className={classes.cardContainer}>
                    <div className={classes.nameContainer}>
                        <Typography className={classes.name}>{`${contents.givenName} ${contents.surname}`}</Typography>
                    </div>
                    <img src={avatar || person} className={classes.profile}/>
                    {this.renderCardContents()}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PreviewCard)
