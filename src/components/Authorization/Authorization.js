import Input from '../UI/Input/Input'

function Authorization({ onVisible }) {
  return (
    <div className="authorization">
      <form className="authorization__form">
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <button className="btn" type="submit" id="close">SIGN IN</button>
      </form>
      <button onClick={() => onVisible(false)} className='authorization__close'>&#10006;</button>
    </div>
  )
}

export default Authorization

