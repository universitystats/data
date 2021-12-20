import { createSvgIcon, ListItem } from "@material-ui/core";

const CircleIcon = createSvgIcon(
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />,
    "Circle"
);

interface CustomListItemProps {
    children: any
}

function CustomListItem(props: CustomListItemProps) {

    return (
        <ListItem style={{ padding: '0px 16px', alignItems: 'unset' }}>
            <CircleIcon style={{ width: '10px', marginRight: '8px' }} />
            {props.children}
        </ListItem>
    )
}

export default CustomListItem