import clsx from 'clsx'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel
  bold?: boolean
}

const styles: Record<HeadingLevel, string> = {
  1: 'text-xl md:text-3xl',
  2: 'text-lg md:text-2xl',
  3: 'text-base md:text-xl',
  4: 'text-base md:text-lg',
  5: 'text-base',
  6: 'text-sm',
}

export const Heading = ({
  level,
  bold = true,
  className,
  children,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const style = styles[level]

  return (
    <Tag className={clsx(bold && 'font-bold', style, className)}>
      {children}
    </Tag>
  )
}
