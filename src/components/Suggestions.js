import '../styles/Suggestions.scss'
import Profile from './Profile';

function Suggestions(){
    return(
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">Sugestões para você</div>
                <a href="/">Veja tudo</a>
            </div>

            <Profile caption="Seguido(a) por mapvault e mais 3 pessoas" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile caption="Seguido(a) por someone e mais 2 pessoas" urlText="Follow" iconSize="medium" captionSize="small" />
            <Profile caption="Seguido(a) por Hiko e mais 1 pessoa" urlText="Follow" iconSize="medium" captionSize="small" />
            <Profile caption="Seguido(a) por DoubleD" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile caption="Seguido(a) por Bugs e mais 7 pessoas" urlText="Follow" iconSize="medium" captionSize="small" />
        </div>
    )
}

export default Suggestions;