import { Inter } from "next/font/google"
import "./globals.css"
import { getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Ruan",
  description: "Porfolio Web Dev of Ruan Cardoso",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
