import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="px-4">
      <Link to="/">
        <img className="w-12" src="/assets/img/logo.png" />
      </Link>
    </div>
  )
}

export default Logo