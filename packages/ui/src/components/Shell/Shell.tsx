import * as React from 'react';
import { cn } from '@coe/utils';

// ─── AppShell ─────────────────────────────────────────────

export interface AppShellProps {
  topNav?: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AppShell: React.FC<AppShellProps> = ({ topNav, sidebar, children, className }) => (
  <div className={cn('min-h-screen bg-[#11202b]', className)}>
    {topNav && (
      <header className="fixed left-0 right-0 top-0 z-[200] h-[48px] border-b border-[#1e3347] bg-[#11202b]">
        {topNav}
      </header>
    )}
    {sidebar && (
      <aside className="fixed bottom-0 left-0 top-[48px] z-[100] w-[260px] overflow-y-auto border-r border-[#1e3347] bg-[#0d1a24] [scrollbar-color:_#1e3347_transparent] [scrollbar-width:thin]">
        {sidebar}
      </aside>
    )}
    <main
      className={cn(
        'min-h-[calc(100vh-48px)]',
        topNav && 'pt-[48px]',
        sidebar && 'ml-[260px]'
      )}
    >
      {children}
    </main>
  </div>
);
AppShell.displayName = 'AppShell';

// ─── TopNav ────────────────────────────────────────────────

export interface TopNavProps extends React.HTMLAttributes<HTMLDivElement> {
  logoMark?: React.ReactNode;
  logoLabel?: React.ReactNode;
  badge?: string;
  actions?: React.ReactNode;
}

export const TopNav: React.FC<TopNavProps> = ({
  className,
  logoMark,
  logoLabel,
  badge,
  actions,
  ...props
}) => (
  <div
    className={cn('flex h-full items-center border-b border-[#1e3347]', className)}
    {...props}
  >
    {/* Logo slot */}
    <div className="flex h-full w-[260px] shrink-0 items-center gap-2.5 border-r border-[#1e3347] px-5">
      {logoMark ?? <LogoMark />}
      {logoLabel}
    </div>
    {/* Right side */}
    <div className="flex flex-1 items-center justify-between px-5">
      {badge && (
        <span className="border border-[#1e3347] bg-[#1e3a50] font-mono text-[11px] text-[#6b7d8a] px-2.5 py-0.5">
          {badge}
        </span>
      )}
      {actions && <div className="ml-auto flex items-center gap-0.5">{actions}</div>}
    </div>
  </div>
);
TopNav.displayName = 'TopNav';

export const NavLink: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => (
  <button
    className={cn(
      'border-none bg-none px-2.5 py-1.5 font-body text-[12px] text-[#6b7d8a]',
      'cursor-pointer transition-colors duration-150 hover:text-white',
      className
    )}
    {...props}
  />
);

// ─── Logo Mark ────────────────────────────────────────────

export interface LogoMarkProps {
  label?: string;
  className?: string;
}

export const LogoMark: React.FC<LogoMarkProps> = ({ label = 'COE', className }) => (
  <span
    className={cn(
      'inline-flex h-7 w-7 shrink-0 items-center justify-center bg-[#cc4927]',
      'font-heading text-[13px] font-bold tracking-[-0.5px] text-white',
      className
    )}
  >
    {label}
  </span>
);
LogoMark.displayName = 'LogoMark';

// ─── Sidebar ──────────────────────────────────────────────

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  defaultOpen?: boolean;
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
  className,
  label,
  defaultOpen = true,
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={cn('border-b border-[#1e3347]', className)} {...props}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer select-none items-center justify-between px-5 py-[11px] font-mono text-[10px] font-semibold uppercase tracking-[1.2px] text-[#6b7d8a] transition-colors duration-150 hover:text-[#c8cdd3]"
        aria-expanded={open}
      >
        {label}
        <span
          className={cn(
            'text-[9px] transition-transform duration-200',
            !open && 'rotate-[-90deg]'
          )}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      {open && <div className="pb-2 pt-1">{children}</div>}
    </div>
  );
};
SidebarGroup.displayName = 'SidebarGroup';

export interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  badge?: string | number;
  icon?: React.ReactNode;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  className,
  active,
  badge,
  icon,
  children,
  ...props
}) => (
  <div
    role="button"
    tabIndex={0}
    className={cn(
      'flex cursor-pointer select-none items-center gap-2 border-l-2 px-5 py-[7px]',
      'font-body text-[13px] transition-all duration-[120ms]',
      active
        ? 'border-l-[#cc4927] bg-[#1e3a50] text-white'
        : 'border-l-transparent text-[#c8cdd3] hover:bg-[#172c3c] hover:text-white',
      className
    )}
    {...props}
  >
    {/* Dot indicator (no icon case) */}
    {!icon && (
      <span
        className={cn(
          'h-[5px] w-[5px] shrink-0 rounded-full',
          active ? 'bg-[#cc4927]' : 'bg-[#6b7d8a]'
        )}
        aria-hidden="true"
      />
    )}
    {icon && <span className="shrink-0 text-[14px]">{icon}</span>}
    <span className="flex-1">{children}</span>
    {badge !== undefined && (
      <span className="ml-auto border border-[#1e3347] bg-[#1e3347] font-mono text-[10px] text-[#6b7d8a] px-1.5 py-0.5">
        {badge}
      </span>
    )}
  </div>
);
SidebarItem.displayName = 'SidebarItem';
