import { Center, Icon, Tooltip, useDisclosure } from '@chakra-ui/react'
import type { Skill } from '@utils/types'

export interface SkillProps extends Skill {
  size?: 'sm' | 'md' | 'lg'
  setBorderColor?: (color: string) => void
}

export const SkillBox: React.FC<SkillProps> = ({
  name,
  icon,
  color,
  size = 'lg',
  setBorderColor,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const sizeValue = {
    sm: 10,
    md: 12,
    lg: 16,
  }

  return (
    <Tooltip
      aria-label={name}
      label={name}
      isOpen={isOpen}
      placement='bottom'
      gutter={-8}
      shouldWrapChildren
    >
      <Center
        p='1'
        boxSize={sizeValue[size]}
        bg='gray.100'
        onMouseEnter={() => {
          setBorderColor?.(color)
          onOpen()
        }}
        onMouseLeave={() => {
          setBorderColor?.('black')
          onClose()
        }}
        onClick={onToggle}
      >
        <Icon as={icon} aria-label={name} boxSize={8} color={color} />
      </Center>
    </Tooltip>
  )
}
