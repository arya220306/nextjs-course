import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Travel App",
  description: "Practice project",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black ${roboto}`}>
        <div className="font-medium">
          <Navbar />
        </div>
        <div className=" w-screen text-white  ">{children}</div>
      </body>
    </html>
  );
}
