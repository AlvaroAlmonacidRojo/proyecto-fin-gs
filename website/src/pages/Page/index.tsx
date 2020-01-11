import React, { ReactNode } from 'react';

export type Tab = 'Home';

interface ComponentProps {
    pageTitle: string;
    tab?: Tab;
    children: ReactNode;
}

type Props = ComponentProps;

const Page = ({ children }: Props) => {
    return <main>{children}</main>
}

export default Page;