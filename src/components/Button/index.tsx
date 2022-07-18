import * as S from './style';
import { ButtonProps } from './type';

export default function Button({
  mode = 'primary',
  size = 'medium',
  label,
}: ButtonProps) {
  return (
    <S.StyledButton mode={mode} size={size} type="button">
      {label}
    </S.StyledButton>
  );
}
