import './globals.css';

import { LucideKanban } from 'lucide-react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { homePath, ticketMainPath } from '@/path';
import { ThemeProvider } from '@/themes/ThemeProvider';
import ThemeSwitcher from '@/themes/ThemeSwitcher';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ticket App',
  description: 'Ticket App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex justify-between items-center py-2.5 px-5 border-b supports-backdrop-blur:bg-background/60 fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur w-full">
            <div className="flex items-center gap-x-2">
              <Link
                href={homePath()}
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'font-bold'
                )}
              >
                <LucideKanban className=" size-6" />
                <h1 className="text-lg ml-2 font-semibold">TicketBounty</h1>
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <ThemeSwitcher />
                <Link
                  href={ticketMainPath()}
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'font-bold'
                  )}
                >
                  Tickets
                </Link>
              </div>
            </div>
          </nav>
          <main className="min-h-screen  flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/28 flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
