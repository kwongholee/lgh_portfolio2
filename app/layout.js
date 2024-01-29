import Footbar from "./_components/(main)/Footbar";
import Navbar from "./_components/(main)/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body style={{margin: '0px', width: '100%', height: '300%'}}>
        <Navbar></Navbar>
        {children}
        <Footbar></Footbar>
      </body>
    </html>
  );
}