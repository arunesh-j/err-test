type Summary = { count: number }

const summary: Summary = { count: 3 }

export default function App() {
  // Deliberate type error: Summary has no `totals`.
  return <h1>Total: {summary.totals}</h1>
}
