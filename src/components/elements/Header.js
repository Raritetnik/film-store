import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = (props) => {
  /*  const onClick = () => {
        console.log('Component')
    }*/

    return (
        <header className="header d-flex justify-content-between shadow-sm p-3 bg-body-tertiary rounded">
            <div>
                <Link to="/accueil" className='fw-bold fs-4 btnMenu'>Travail Pratique 2</Link>
            </div>
            <nav>
                <Link to="/accueil" className='p-3 fs-5 btnMenu' >Accueil</Link>
                <Link to="/produit" className='p-3 fs-5 btnMenu' >Produits</Link>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
/*
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}
*/
export default Header