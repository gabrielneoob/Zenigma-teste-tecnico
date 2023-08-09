import React, { ReactNode } from 'react'

type BtnProps = {
  children: ReactNode
  onClick: () => void;
}

const Button = ({
  children,
  onClick
}: BtnProps) => 
  <button
  onClick={onClick}
  >
    {children}
  </button>
export default Button