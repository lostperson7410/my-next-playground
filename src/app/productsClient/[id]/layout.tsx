export default function ProductsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>this is Sub Header</div>

      {children}
    </section>
  );
}
