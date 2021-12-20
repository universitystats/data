import { ToolTipP, TooltipText } from "../styles"

export const ToolTipLine = (props: { children: any }) => {
    return (
        <ToolTipP>
            <TooltipText>
                {props.children}
            </TooltipText>
        </ToolTipP>
    )
}