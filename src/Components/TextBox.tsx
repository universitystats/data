import { Typography } from "@material-ui/core"
import { TextContainer } from "../styles"

const TextBox = (props: { children: any }) => {
    return (
        <TextContainer>
            <Typography variant='body1'>
                {props.children}
            </Typography>
        </TextContainer>
    )
}

export default TextBox