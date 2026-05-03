export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visual Timeline of<br />
          <span className="text-[#58a6ff]">Database Schema Changes</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload migration files or connect your database to generate an interactive timeline. Instantly spot breaking changes, track schema evolution, and understand migration impact — all in one view.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $18/mo
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Mock Timeline Visual */}
        <div id="how-it-works" className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] mb-4 uppercase tracking-widest">Schema Timeline Preview</p>
          <div className="relative pl-6 border-l-2 border-[#21262d] space-y-6">
            {[
              { date: "2024-01-10", label: "Initial schema", desc: "users, products tables created", color: "bg-[#3fb950]" },
              { date: "2024-03-22", label: "Added orders table", desc: "FK to users.id — safe migration", color: "bg-[#58a6ff]" },
              { date: "2024-06-05", label: "⚠ Breaking change", desc: "Dropped column users.legacy_id", color: "bg-[#f85149]" },
              { date: "2024-09-18", label: "Index optimization", desc: "Added composite index on orders", color: "bg-[#3fb950]" },
            ].map((item) => (
              <div key={item.date} className="relative">
                <span className={`absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full ${item.color} border-2 border-[#0d1117]`}></span>
                <p className="text-xs text-[#8b949e] mb-0.5">{item.date}</p>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-[#8b949e]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited migration file uploads",
              "Live database connection support",
              "Breaking change detection",
              "Exportable timeline reports",
              "Team sharing & collaboration",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which databases are supported?",
              a: "PostgreSQL, MySQL, and SQLite are fully supported. You can connect via connection string or upload raw migration files (SQL, Flyway, Liquibase, Prisma)."
            },
            {
              q: "How does breaking change detection work?",
              a: "The engine analyzes each migration diff for destructive operations — column drops, type changes, constraint removals — and flags them visually on the timeline."
            },
            {
              q: "Is my database connection secure?",
              a: "Connections are encrypted in transit and never stored. Credentials are used only for the duration of the analysis session and discarded immediately after."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Schema Timeline. All rights reserved.
      </footer>
    </main>
  )
}
