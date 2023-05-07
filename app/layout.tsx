import { ReactNode } from "react";
import "@/styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: "Promtopia",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Provider>
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
