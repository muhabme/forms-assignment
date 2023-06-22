import Forms from '@/components/Forms/Forms';
import FormsHead from '@/components/FormsHead/FormsHead';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center px-4 py-4 lg:px-8 gap-4">
            <FormsHead />
            <Forms />
        </main>
    );
}
