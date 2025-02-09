export default function CardapioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex-1 h-screen overflow-auto">
      {children}
    </div>
  );
}