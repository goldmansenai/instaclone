import '../styles/Suggestions.scss'
import Profile from './Profile';

function Suggestions(){
    return(
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">Sugestões para você</div>
                <a href="/">Veja tudo</a>
            </div>

            <Profile caption="Followed by mapvault + 3 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile caption="Followed by someone + 2 more" urlText="Follow" iconSize="medium" captionSize="small" />
            <Profile caption="Followed by Hiko + 1 more" urlText="Follow" iconSize="medium" captionSize="small" />
            <Profile caption="Followed by DoubleD" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile caption="Followed by Bugs + 7 more" urlText="Follow" iconSize="medium" captionSize="small" />
        </div>
    )
}

export default Suggestions;