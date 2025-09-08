import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-[#FF9200] to-[#FFB84D] text-white hover:from-[#E6840F] hover:to-[#FF9200] shadow-lg hover:shadow-xl hover:shadow-orange-500/25',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-[#FF9200] bg-transparent text-[#FF9200] hover:bg-[#FF9200] hover:text-white shadow-md hover:shadow-lg',
        secondary:
          'bg-[#0A192F] text-white hover:bg-[#0A192F]/90 shadow-md hover:shadow-lg',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-[#FF9200] underline-offset-4 hover:underline',
        glow: 'bg-gradient-to-r from-[#FF9200] to-[#FFB84D] text-white shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/75',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-12 rounded-xl px-8 text-base',
        xl: 'h-14 rounded-2xl px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading && (
          <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
