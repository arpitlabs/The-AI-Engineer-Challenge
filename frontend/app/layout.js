import "./globals.css";

export const metadata = {
  title: "AI Mental Coach",
  description: "Chat with your supportive AI coach"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
