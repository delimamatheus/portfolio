import { ReactNode } from "react";

import { Content } from "../../components/organisms/MainContent";
import { Footer } from "../../components/organisms/MainFooter";
import { MainHeader } from "../../components/organisms/MainHeader";
interface MainLayoutProps {
  children?: ReactNode | ReactNode[] | string;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>    
        <MainHeader />

        <Content>{children}</Content>

        <Footer />
    </>
  );
}
