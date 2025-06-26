import { ReactNode } from 'react';
import { QueryProvider } from '@shared/providers/QueryProvider';
import 'antd/dist/reset.css';
// import './globals.scss';

export const metadata = {
    title: 'Movies App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <QueryProvider>
            {children}
        </QueryProvider>
        </body>
        </html>
    );
}
