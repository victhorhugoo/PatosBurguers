import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Header/>
        <main className="w-full  mx-auto">
          {children}
        </main>
        <Footer/>
    </div>
  );
}
