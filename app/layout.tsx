import { ReactNode } from "react";
import "@/styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Session } from "next-auth";

type Props = {
  children: ReactNode;
  session: Session;
};

export const metadata = {
  title: "Promtopia",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children, session }: Props) => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
