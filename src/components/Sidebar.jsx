import Avatar from '../img/iris.png'

import SocialNetworks from './SocialNetworks'
import InformationContainer  from './InformationContainer';

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Íris Balk" />
      <p className="title">Desenvolvedora Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="/curriculo_iris.pdf" className="btn" download>Download currículo</a>
    </aside>
  )
}

export default Sidebar
