import React from 'react'
import LogoutIcon from '../icons/LogoutIcon'
import { connect } from 'react-redux';
import { logout } from '../redux/actions';



function LogoutButton(props) {
    const handleLogout = () => {
        localStorage.removeItem("token")
        props.logout()
    }
    return (
        <span onClick={handleLogout}>
            <LogoutIcon/>
        </span>
    )
}

const mapDispatchToProps = (dispatch) => {
    return { logout: () => dispatch(logout())}
}

export default connect(null, mapDispatchToProps)(LogoutButton)