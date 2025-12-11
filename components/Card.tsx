import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import React from 'react';
import { cn } from '@/lib/utils';

interface CustomCardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  children,
  footer,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
}) => {
  return (
    <Card className={cn("w-full", className)}>
      {(title || description) && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={contentClassName}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className={footerClassName}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};
