
import './Loader.css';

const Loader = ({ size = 'medium', color = '#3498db' }) => {
  return (
    <div className="loader-container h-500 w-screen flex justify-center items-center">
      <div 
        className={`spinner ${size}`} 
        style={{ borderTopColor: color }}
      ></div>
    </div>
  );
};

export default Loader;