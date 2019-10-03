import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1
    },
    button: {
        margin: '20px',
        minHeight: '0px',
    },
    label: {
        flexGrow: 1
    }
}))

export default useStyles
