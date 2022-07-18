interface ButtonStyleProps {
  mode?: string;
  size: string;
}

interface ButtonProps {
  mode?: string;
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export type { ButtonProps, ButtonStyleProps };
