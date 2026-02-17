interface StatCardProps {
  number: string
  label: string
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-foreground">{number}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}
