import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>
      <Button variant="ghost" size="sm" className="justify-start text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto">
        Learn More →
      </Button>
    </div>
  )
}
