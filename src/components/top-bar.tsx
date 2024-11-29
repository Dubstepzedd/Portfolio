import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div style={{ margin: 0, display: 'flex', flexDirection: 'column'}}>
            {/* Top Bar Menu */}
            <nav style={{ background: '#282c34', padding: '1rem', color: 'white' }}>
            <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>
                Home
            </Link>
            <Link to="/other" style={{ color: 'white', textDecoration: 'none' }}>
                Other Page
            </Link>
            </nav>
        </div>
    )
}

export default TopBar;
