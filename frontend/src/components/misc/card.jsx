import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Star,
  Edit,
  Trash2,
  Eye,
  LucidePin,
  LucideMapPin,
  LucideClock,
  LucideArrowBigRight,
  LucideEye,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * @typedef {Object} DataCardProps
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} [location]
 * @property {number} [rating]
 * @property {string[]} [tags]
 * @property {"tourism" | "student" | "jobs" | "business"} [variant]
 * @property {() => void} [onView]
 * @property {() => void} [onEdit]
 * @property {() => void} [onDelete]
 */

/**
 * @param {DataCardProps} props
 */
export default function DataCard({
  title,
  subtitle,
  description,
  image,
  location,
  rating,
  price,
  tags = [],
  variant,
  onView,
  onEdit,
  onDelete,
}) {
  const getRatingLabel = (rating) => {
    if (rating === 5) return { label: 'Excellent', className: 'bg-green-100 text-green-800' };
    if (rating >= 4) return { label: 'Good', className: 'bg-blue-100 text-blue-800' };
    if (rating >= 3) return { label: 'Average', className: 'bg-yellow-100 text-yellow-800' };
    if (rating >= 2) return { label: 'Below Avg', className: 'bg-orange-100 text-orange-800' };
    return { label: 'Poor', className: 'bg-red-100 text-red-800' };
  };

  return (
    <Card className='group overflow-hidden hover:shadow-card-hover transition-all duration-300 animate-scale-in border-sm border-gray-50 shadow-md'>
      {image && (
        <div className='relative h-48 overflow-hidden'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
          {typeof rating === 'number' &&
            (() => {
              const { label, className } = getRatingLabel(rating);
              return (
                <div
                  className={`absolute top-3 right-3 backdrop-blur-sm rounded-xl px-2 py-1 flex items-center gap-1 ${className}`}
                >
                  <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                  <span className='text-sm font-medium'>{rating.toFixed(1)}</span>
                  <span className='ml-1 text-sm font-normal'>{label}</span>
                </div>
              );
            })()}
          {location && (
            <div className='absolute bottom-3 left-3 flex items-center gap-1.5 text-sm text-muted-foreground bg-white/80 backdrop-blur-sm rounded-xl px-2 py-1 font-bold'>
              <LucideMapPin className='w-4 h-4 stroke-blue-600 text-blue-600' />
              <span>{location}</span>
            </div>
          )}
        </div>
      )}

      <CardHeader className='pb-2'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col justify-between gap-2'>
            <h3 className='text-xl font-extrabold text-blue-600 uppercase'>{title}</h3>
            {subtitle && (
              <p className='text-sm bg-gradient-to-bl from-blue-600 to-blue-400 text-white font-bold flex justify-center  rounded-xl px-2 py-1'>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className='pb-3'>
        {description && <p className='text-sm line-clamp-2 mb-3 text-gray-600'>{description}</p>}

        {tags.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <div key={tag} className='flex items-center gap-1.5 bg-muted rounded-md py-1'>
                <LucideClock className='w-4 h-4 text-gray-500' />
                <Badge
                  variant='secondary'
                  className={cn(
                    'text-xs text-gray-600 px-0 py-0 bg-transparent',
                    variant === 'tourism' && 'text-tourism',
                    variant === 'student' && 'text-student',
                    variant === 'jobs' && 'text-jobs',
                    variant === 'business' && 'text-business',
                  )}
                >
                  {tag}
                </Badge>
              </div>
            ))}
          </div>
        )}

        {price && (
          <div className='flex items-center justify-between font-extrabold gap-1.5 pt-2 text-xl text-muted-foreground'>
            <span>{price}</span>
            <button className='flex items-center rounded-full p-2 text-sm font-medium bg-blue-200 text-blue-600 underline hover:text-blue-800 hover:bg-blue-300 hover:text-lg transition'>
              <LucideEye className='w-4 h-4 inline-block' />
            </button>
          </div>
        )}
      </CardContent>

      <CardFooter className='pt-0 gap-2'>
        {onView && (
          <Button variant='ghost' size='sm' onClick={onView} className='flex-1'>
            <Eye className='w-4 h-4 mr-1' />
            View
          </Button>
        )}
        {onEdit && (
          <Button variant='ghost' size='sm' onClick={onEdit}>
            <Edit className='w-4 h-4' />
          </Button>
        )}
        {onDelete && (
          <Button
            variant='ghost'
            size='sm'
            onClick={onDelete}
            className='text-destructive hover:text-destructive'
          >
            <Trash2 className='w-4 h-4' />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
