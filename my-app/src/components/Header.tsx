import Link from "next/link"

export default function Header() {
  return (
    <div className="flex p-2 gap-4 text-2xl font-bold text-blue-500">
      <Link href="/"><span className="text-green-500">Home</span></Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </div>
  )
}
