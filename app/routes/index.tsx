import { PrismaClient, User } from '@prisma/client';
import { LoaderFunction, useLoaderData } from 'remix';

export const loader: LoaderFunction = async () => {
    const prisma = new PrismaClient();

    return prisma.user.findFirst();
};

export default function Index() {
    const user = useLoaderData<User>();

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
            <h1>Welcome to Remix, {user.email}</h1>
        </div>
    );
}
