import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = ({ children }: any) => {
  return (
    <main className="min-h-[100vh] flex flex-col">
      <NavBar />
      <div className="px-3 mb-8 md:p-6 m-auto max-w-[1100px] w-full">
        {children}
      </div>
      <Footer />
    </main>
  );
};
