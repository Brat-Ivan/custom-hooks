export const Loader = () => {
  return (
    <div style={{
      width: '80px',
      height: '80px',
      border: '8px solid transparent',
      borderRadius: '50%',
      borderTop: '8px solid var(--color-accent)',
      animation: 'spin 0.25s ease-in-out infinite'
    }} />
  );
};
