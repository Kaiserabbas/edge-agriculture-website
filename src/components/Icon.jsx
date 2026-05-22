import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Droplets,
  Eye,
  Facebook,
  Globe2,
  HeartHandshake,
  Instagram,
  Languages,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Shovel,
  ShoppingBag,
  ShoppingCart,
  Sprout,
  Star,
  Trees,
  Waves,
  X,
} from 'lucide-react'

const icons = {
  arrowRight: ArrowRight,
  book: BookOpen,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  droplets: Droplets,
  eye: Eye,
  facebook: Facebook,
  globe: Globe2,
  handshake: HeartHandshake,
  help: CircleHelp,
  instagram: Instagram,
  languages: Languages,
  leaf: Leaf,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  minus: Minus,
  phone: Phone,
  plus: Plus,
  search: Search,
  seedling: Sprout,
  send: Send,
  shield: ShieldCheck,
  shovel: Shovel,
  shoppingBag: ShoppingBag,
  shoppingCart: ShoppingCart,
  sprout: Sprout,
  star: Star,
  trees: Trees,
  waves: Waves,
  x: X,
}

export default function Icon({ name, size = 20, strokeWidth = 1.9, ...props }) {
  const IconComponent = icons[name] || Leaf
  const className = ['arrowRight', 'chevronLeft', 'chevronRight'].includes(name)
    ? `${props.className || ''} directional-icon`.trim()
    : props.className

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...props}
      className={className}
    />
  )
}
