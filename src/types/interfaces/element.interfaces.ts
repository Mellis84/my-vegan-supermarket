/**
 * Element Interfaces
 */

// Button ------------------------------------------------------------------ //

export interface ButtonProps {
  buttonStyle?: 'outline' | 'solid' | 'solid-primary' | 'solid-danger';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
