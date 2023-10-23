// import logo from '../logo.svg'
import NavItem from './NavItem'
import Button from './UI/Button'

function Header({onVisible}) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">

          <a href="#">
            {/* <img src={logo} alt="logo" classNameName="header__logo"/> */}
          </a>

          <nav className="nav">
            <NavItem text="Page-1" />
            <NavItem text="Page-2" />
            <NavItem text="Page-3" />
            <NavItem text="Page-4" />
            <NavItem text="Page-5" />
            <Button text="Log in" onVisible={onVisible} />
          </nav>

          <div className="toggle">
            <div className="toggle__item"></div>
            <div className="toggle__item"></div>
            <div className="toggle__item"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


