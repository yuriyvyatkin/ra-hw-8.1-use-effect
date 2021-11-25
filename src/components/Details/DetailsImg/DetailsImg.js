import './DetailsImg.css';

export default function DetailsImg({ src, alt }) {
  return (
    <div className="DetailsImg-container">
      <img
        className="DetailsImg-content"
        src={src}
        alt={alt}
        style={{ left: !src ? '-15px' : '' }}
      />
    </div>
  );
}
