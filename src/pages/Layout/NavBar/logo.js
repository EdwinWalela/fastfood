import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="mx-8">
      <Link to="/">
        <img className="w-10" src="/assets/img/logo.png" />
      </Link>
    </div>
  )
}

export default Logo