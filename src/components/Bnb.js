import Review from './Review'
import User from './User'

const Bnb = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <Review stars = {props.review}/>
            <img src={props.img}/>
            <User username = {props.username} location = {props.userLocation} userImg = {props.userImg} />
            
        </div>
    )
}

export default Bnb;