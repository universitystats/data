import { Typography } from "@material-ui/core"

const SubTitle = (props: {children: any}) => {
    return (
        <Typography variant = 'h5' style={{marginBottom : '16px'}}>
            {props.children}
        </Typography>
    )
} 

export default SubTitle