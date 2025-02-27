export default function Layout({ children }) {
  return (
    <main className="flex relative flex-col justify-center items-center p-7 min-h-screen shadow-lg dark:bg-gray-900 dark:text-gray-400">
      {children}
    </main>
  );
}
