import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  href,
  className,
  ...props 
}: ButtonProps) {
  const buttonClasses = `
    ${variant === 'primary' ? 'bg-[#FF5900] text-white' : 'bg-[#F5F5F5] text-[#FF5900] border border-[#FF5900]'}
    ${fullWidth ? 'w-full' : ''}
    px-4 py-2 rounded-lg text-sm font-medium
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}
