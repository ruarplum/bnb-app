const User = (props) => {
    return (
        <div>
            <h2>{props.username}</h2>
            <h3>{props.location}</h3>
            <img src = {props.userImg}/>
        </div>
    )
}

export default User;