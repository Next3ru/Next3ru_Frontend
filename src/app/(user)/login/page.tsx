"use client";

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

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  // const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setError("");
  //   setIsPending(true);

  //   try {
  //     const res = await fetch("/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       router.push("/");
  //     } else {
  //       setError(data.message);
  //     }
  //   } catch (err) {
  //     setError("로그인에 실패하였습니다.");
  //   } finally {
  //     setIsPending(false);
  //   }
  // };

  // form server action
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };

    return (
      <form action={createInvoice}>
        <Card className="w-96 mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex justify-center">
              로그인
            </CardTitle>
            <CardDescription className="flex justify-center">
              가입한 이메일을 입력해 주세요.
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
                <div className="flex items-center">
                  <Label htmlFor="password">비밀번호</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    비밀번호 찾기
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                이메일 로그인
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
              계정이 없으신가요?&nbsp;
              <Link
                href="/signup"
                className="underline font-semibold"
              >
                가입하기
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    );
  }
};

export default LoginPage;
