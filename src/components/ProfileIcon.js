import '../styles/ProfileIcon.scss'

export default function ProfileIcon(props) {
    const { iconSize, storyBorder, image } = props;
    /* Essa função será responsável por pegar um avatar aleatório entre 70 possibilidades*/
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    let randomId = getRandomInt(1, 70)

    /* 150 = tamanho img=${randomId} = deferentes avatares*/
    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`; 

    return (
        <div className={storyBorder ? "storyBorder" : ""}>
            <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile"/>
        </div>
    )
}
