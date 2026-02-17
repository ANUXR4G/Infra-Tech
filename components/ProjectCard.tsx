import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Building2 } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  location: string
  date: string
  scope: string
}

export default function ProjectCard({
  title,
  description,
  image,
  location,
  date,
  scope,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 px-4 sm:px-6 pb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Building2 className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{scope}</span>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          See More
        </Button>
      </div>
    </div>
  )
}
