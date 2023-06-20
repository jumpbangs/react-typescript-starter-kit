import React, { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const container = ({ className, children }: ContainerProps) => {
  return <section className={className}>{children}</section>;
};

export default container;
