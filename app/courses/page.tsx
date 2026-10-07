import Link from 'next/link';

export default function CoursesPage() {
    const courses = [
        { id: 'react-basic', title: 'React для новичков' },
        { id: 'nextjs-advanced', title: 'Next.js Продвинутый уровень' }
    ];

    return (
        <div>
            <p>Выберите интересующее вас направление:</p>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <Link href={`/courses/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}