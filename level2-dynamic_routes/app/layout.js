import './globals.css';
export default function RootLayout({ children, team, analytics }) {
  return (
    <html
      lang="en"
    >
      <body className="w-screen h-screen flex">
        <div className="w-screen bg-blue-800">{children}</div>
        {/* <div className="w-[30%] bg-black">{team}</div> */}
        {/* <div className="w-[30%] bg-gray-400">{analytics}</div> */}
        <div></div>
        </body>
    </html>
  );
}
