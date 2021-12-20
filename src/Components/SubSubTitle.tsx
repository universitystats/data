import { Typography } from "@material-ui/core"

const SubSubTitle = (props: {children: any}) => {
    return (
        <Typography variant = 'h6' style={{marginBottom : '8px'}}>
            {props.children}
        </Typography>
    )
} 

export default SubSubTitle