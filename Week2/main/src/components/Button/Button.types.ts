import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: React.ReactNode;
  label?: string | null;
}