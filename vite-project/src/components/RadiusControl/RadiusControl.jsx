import './RadiusControl.css';

function RadiusControl({ radius, onRadiusChange }) {
  return (
    <div className="radius-control">
      <label htmlFor="radius">Radius (miles): </label>
      <input
        type="number"
        id="radius"
        value={radius}
        onChange={onRadiusChange}
        min="0.1"
        step="0.1"
        style={{ marginBottom: '10px' }}
      />
    </div>
  );
}

export default RadiusControl; 