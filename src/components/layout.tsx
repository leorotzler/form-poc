import { Container, Title } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

export interface LayoutProps {
  title: string;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  title,
}) => {
  return (
    <main>
      <Container p={24}>
        <Title order={1} mb={24}>{title}</Title>
        <div>{children}</div>
      </Container>
    </main>
  );
};
