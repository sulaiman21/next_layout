import { Container } from '@mui/material';

type LayoutProps = {
    children: React.ReactNode;
}

function BaseLayout(props: LayoutProps) {
    return (
        <Container maxWidth="lg">
            {props.children}
        </Container>
    )
}

export default BaseLayout;
