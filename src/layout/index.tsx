import type { ComponentType } from 'react'


export type LayoutProps = {
    children: React.ReactNode;
}

export type LayoutComponent = React.FC<LayoutProps>;
export type PageWithLayout = ComponentType & { layout: LayoutComponent };

export default PageWithLayout;