import { List } from "@material-ui/core";
import CustomListItem from "./CustomListItem";
import TextBox from "./TextBox";

const Introduction = () => {
    return (
        <TextBox>
            Data on this site is provided to help students decide whether to go to university,
                what subject to take and choice of university.
                Data is provided on:
            <List>
                <CustomListItem>
                    Graduate earnings by subject
                </CustomListItem>
                <CustomListItem>
                    Graduate earnings by prior attainment
                </CustomListItem>
                <CustomListItem>
                    Graduate earnings by prior attainment and subject
                </CustomListItem>
                <CustomListItem>
                    Graduate earnings by University
                </CustomListItem>
                <CustomListItem>
                    Graduate net income premium
                </CustomListItem>
                <CustomListItem>
                    Student loan payments
                </CustomListItem>
                <CustomListItem>
                    Proportion of student loans repaid
                </CustomListItem>
            </List>
        </TextBox>
    )
}

export default Introduction;