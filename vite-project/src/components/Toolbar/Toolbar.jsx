import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-content">
        <div className="toolbar-left">
          <a href="/" className="logo-text">AirQuality Map</a>
        </div>
        <div className="toolbar-right">
          <a 
            href="/" 
            className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}
          >
            Map
          </a>
          <a 
            href="/info" 
            className={`nav-link ${window.location.pathname === '/info' ? 'active' : ''}`}
          >
            Learn About Air Quality
          </a>
        </div>
      </div>
    </div>
  );
};

export default Toolbar; 