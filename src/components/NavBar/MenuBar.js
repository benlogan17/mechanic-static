import { Cross } from 'hamburger-react';
import { slide as Menu } from 'react-burger-menu';
import { MenuItem } from './MenuItem';

export const MenuBar = () => {
    return (
    <Menu customBurgerIcon={<Cross />}>
        <MenuItem label="Home" link="/" />
        <MenuItem label="Items" link="/items" />
    </Menu>
    )
}