import Link from "next/link";
import { Button, buttonVariants } from "@/components/shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import { Input } from "@/components/shadcn-ui/input";
import { Label } from "@/components/shadcn-ui/label";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <Card className="w-96 mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex justify-center">
          회원가입
        </CardTitle>
        <CardDescription className="flex justify-center">
          회원가입 방식을 선택해 주세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
          >
            이메일 회원가입
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                또는
              </span>
            </div>
          </div>
          {/* <Link
            href="/"
            className={`bg-[#FEE600] ${buttonVariants({
              variant: "secondaryNone",
            })}`}
          > */}
          <Link
            href="/"
            className="bg-[#FEE600] flex justify-center rounded-md"
          >
            <Image
              src="/images/social-logos/kakao-narrow.png"
              alt=""
              width={160}
              height={40}
            />
          </Link>
          {/* <Link
            href="/"
            className={`bg-[#02C75A] ${buttonVariants({
              variant: "secondaryNone",
            })}`}
          > */}
          <Link
            href="/"
            className="bg-[#02C75A] flex justify-center rounded-md"
          >
            <Image
              src="/images/social-logos/naver.png"
              alt=""
              width={140}
              height={40}
            />
          </Link>
          {/* <Link
            href="/"
            className={`bg-[#F2F2F2] ${buttonVariants({
              variant: "secondaryNone",
            })}`}
          > */}
          <Link
            href="/"
            className="bg-[#F2F2F2] flex justify-center rounded-md"
          >
            <Image
              src="/images/social-logos/google.svg"
              alt=""
              width={170}
              height={40}
            />
          </Link>
        </div>
        <div className="mt-4 text-center text-sm">
          이미 계정이 있으신가요?&nbsp;
          <Link
            href="login"
            className="underline font-semibold"
          >
            로그인하기
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
