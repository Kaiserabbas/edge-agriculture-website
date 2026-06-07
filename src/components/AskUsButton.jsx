import Icon from './Icon.jsx'

export default function AskUsButton({ className = '' }) {
  const mrNaseerPhone = '+971 50 2424666'
  const waNumber = mrNaseerPhone.replace(/\D/g, '')
  const href = `https://wa.me/${waNumber}`

  return (
    <a className={`button button-primary ${className}`} href={href} target="_blank" rel="noreferrer">
      Ask us
      <Icon name="arrowRight" size={18} />
    </a>
  )
}
