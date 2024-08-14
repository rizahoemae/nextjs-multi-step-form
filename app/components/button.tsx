export default function Button({
  label,
  onClick,
}: {
  label: String;
  onClick: React.MouseEventHandler;
}) {
  return (
    <>
      <button onClick={onClick} className="btn-primary">
        {label}
      </button>
    </>
  );
}
