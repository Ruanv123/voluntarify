import HeaderPrivate from "./components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPrivate />
      <main>{children}</main>
    </>
  );
}
