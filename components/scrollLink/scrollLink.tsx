
import Link from 'next/link';


function ScrollLink({ id, children }: { id: string, children: React.ReactNode }) {

    const handleClick = (e: any) => {
        e.preventDefault();

        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Link href={`#${id}`} passHref className='drop-shadow hover:text-primary-700'>
            <div onClick={handleClick}>{children}</div>
        </Link>
    );
}

export default ScrollLink;
