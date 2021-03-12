import S from './styles/Button.module.scss'

// TODO: Icons, size

const Button: React.FC<BtnProps> = ({
  children,
  variant = 'default',
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size = 'md',
  color = 'default',
}) => {
  let variantClass = S[`btn--${variant}`] || ''
  let colorClass = S[`btn--${color}`] || ''
  let shadowClass = disableShadow ? S[`btn--no-shadow`] : ''

  let className = `${S.btn} ${variantClass} ${colorClass} ${shadowClass}`

  const clickHandler = () => console.log('button clicked!')
  return (
    <button className={className} disabled={disabled} onClick={clickHandler}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  )
}

export interface BtnProps {
  variant?: 'default' | 'outline' | 'text'
  disableShadow?: boolean
  disabled?: boolean
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export default Button
