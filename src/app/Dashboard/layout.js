import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        {/* Responsive container */}
        <div className="flex flex-col md:flex-row  min-h-screen">
          {/* Sidebar will be full width on small screens, fixed width on desktop */}
          <Sidebar />
          
          {/* Main content adapts to remaining space */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
