import '../styles/CardMenu.scss'
import { ReactComponent as Inbox } from '../images/inbox.svg'
import { ReactComponent as Comment } from '../images/comment.svg'
import { ReactComponent as Notifications } from '../images/notifications.svg'
import { ReactComponent as Bookmark } from '../images/bookmark.svg'

function CardMenu(){
    return(
        <div className="cardMenu">
            <div classNmae="interactions">
                <Notifications className="icon" />
                <Comment className="icon"/>
                <Inbox className="icon" />
            </div>
            <Bookmark className="icon" />
        </div>
    )
}

export default CardMenu;