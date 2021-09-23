import '../styles/Sidebar.scss'
import Sticky from 'react-sticky-el'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'
import image from '../images/profile.jpg'

export default function Sidebar() {
    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile username="vsg" caption="Descrição" urlText="Switch" iconSize="big" image={image}/>
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
        )
}