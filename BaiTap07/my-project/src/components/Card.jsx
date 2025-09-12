export default function Card({ children }) {
  return (
    <div className="border p-4 rounded shadow mb-2 bg-white">
      {children}
    </div>
  );
}
