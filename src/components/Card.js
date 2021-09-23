import '../styles/Card.scss'
import Profile from './Profile'
import {ReactComponent as CardButton} from '../images/cardButton.svg'
import CardMenu from './CardMenu'
import Comment from './Comment'
import {ReactComponent as EmojiComment} from '../images/emojiComment.svg'

function Card(props){
const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedBynumber,
    hours
} = props

    return(
        <div className="card">
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder} />
                <CardButton className="cardButton" />
            </header>
            <img className="cardImage" src={image} alt="conteudo do card"/>
            <CardMenu />
            <div className="likedBy">
                <Profile iconSize="small" hideAccountName={true}/>
                <span>
                    Curtido por <strong>{likedByText}</strong> e <strong>{likedBynumber}</strong> outros
                </span>
            </div>
            <div className="comments">
                {comments.map((comment) => {
                    return (
                        <Comment key={comment.id}
                        accountName={comment.user}
                        comment={comment.text}/>
                    )
                })}
            </div>
            <div className="timePosted">{hours} Horas atrás</div>
            <div className="addComment">
                <EmojiComment className="emojiComment"/>
                <div className="commentText">Adicione um comentário...</div>
                <div className="postText">Postar</div>
            </div>
        </div>
    )
}

export default Card;