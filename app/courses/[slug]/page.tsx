interface CoursePageProps {
    params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
    const { slug } = await params;
    return (
        <div style={{ marginTop: '16px' }}>
            <h3>Детальная страница курса</h3>
            <p>ID/Слаг выбранного курса: <strong>{slug}</strong></p>
        </div>
    );
}