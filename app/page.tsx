import Sidebar from "@/components/sidebar"

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Weather Dashboard</h1>
          <p className="text-white/70">Main content area</p>
        </div>
      </main>
      <aside className="p-6 overflow-y-auto">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Details</h2>
          <p className="text-white/70">Right sidebar content</p>
        </div>
      </aside>
    </>
  )
}
