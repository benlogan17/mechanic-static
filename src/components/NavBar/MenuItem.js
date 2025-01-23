import { NavLink } from "react-router"

export const MenuItem = (props) => {
    return (
    <NavLink to={props.link} className="text-decoration-none" end>
        <div className='fs-1 text-center bg-light text-danger px-5 my-1'>{props.label}</div>
    </NavLink>
    )
}