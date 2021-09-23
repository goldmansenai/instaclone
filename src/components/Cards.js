import '../styles/Cards.scss'
import Stories from './Stories'
import Card from './Card'
 
export default function Cards() {
    const commentsOne = [
        {
            id: 1,
            user: "Bugs",
            text: "Maneiro!!!!"
        },
        {
            id: 2,
            user: "Hiko",
            text: "Muito legal!!!!"
        },
        {
            id: 3,
            user: "Ari",
            text: "Não gostei muito :c"
        },
        {
            id: 4,
            user: "eHow",
            text: "Que conteúdo horrível xD"
        },
    ];
    const commentsTwo = [
        {
            id: 5,
            user: "eHow",
            text: "Que bacana!!!"
        }
    ];
    const commentsThree = [
        {
            id: 6,
            user: "mBean",
            text: "Super legal"
        },
        {
            id: 7,
            user: "Duck",
            text: "Uau, genial!!!"
        }
    ]
    return <div className="cards">
        <Stories />

        <Card accountName="CR7" storyBorder={true} image="https://picsum.photos/800/900" comments={commentsOne} likedByText="DoubleD" likedByNumber={70} hours={12}/>
        <Card accountName="Bugs" storyBorder={true} image="https://picsum.photos/800" comments={commentsTwo} likedByText="Hiko" likedByNumber={167} hours={2}/>
        <Card accountName="DoubleM" storyBorder={true} image="https://picsum.photos/800/1000" comments={commentsThree} likedByText="CR7" likedByNumber={124} hours={23}/>
    </div>
}