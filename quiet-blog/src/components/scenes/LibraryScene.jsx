export default function LibraryScene({ imagePath }) {
  return (
    <img
      src={imagePath}
      alt="theme"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '0 0 8px 8px',
      }}
    />
  );
}
