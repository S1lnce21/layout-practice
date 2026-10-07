import type { ReactNode } from 'react';

export default function CoursesLayout({ children }: { children: ReactNode }) {
    return (
        <div style={{ border: '2px dashed #4A90E2', padding: '20px', borderRadius: '8px' }}>
            <h2>📚 Каталог наших курсов</h2>
            {children}
        </div>
    );
}