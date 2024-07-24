import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "../../styles/elisa.css";
import { buttonVariants } from "@/components/shadcn-ui/button";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen min-w-md mx-auto bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div>
          <div className="flex justify-between m-4">
            <div>로고</div>
            <Link
              href="/login"
              className={buttonVariants({ variant: "secondary" })}
            >
              로그인되어 있으면 회원가입, 회원가입되어 있으면 로그인
            </Link>
          </div>
          <div className="min-h-screen flex justify-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default LoginLayout;
