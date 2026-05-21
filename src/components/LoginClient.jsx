"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function LoginPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(`${error.message}`)
        }
        else {
            toast.success('Sign In successfull')
            redirect('/')
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-cyan-50 px-4 relative overflow-hidden">

            {/* Background shapes */}
            <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -top-20 -left-20" />
            <div className="absolute w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -bottom-20 -right-20" />

            <Card className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/80 border border-white/40 shadow-2xl rounded-3xl p-8">

                <div className="text-center mb-8">

                    <div className="flex justify-center mb-3">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <Image src={'/logo.png'} alt="DocAppoint" width={90} height={90} />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        DocAppoint
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Secure login to manage appointments & doctors
                    </p>

                </div>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                    {/* Email */}
                    <TextField name="email" type="email" isRequired>
                        <Label>Email Address</Label>
                        <Input
                            placeholder="Enter your email"
                            className="h-12 rounded-xl border-gray-200 focus:border-blue-500"
                        />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField name="password" type="password" isRequired>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Enter password"
                            className="h-12 rounded-xl border-gray-200 focus:border-blue-500"
                        />
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-linear-to-r from-teal-700 to-cyan-500 py-6 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/30"
                    >
                        Login
                    </Button>

                    <Button
                        type="button"
                        onClick={handleGoogleSignIn}
                        variant="bordered"
                        className="w-full h-12 rounded-xl border-gray-300 hover:bg-gray-50"
                    >
                        <FaGoogle className="text-red-500" />
                        Continue with Google
                    </Button>

                </Form>

                <p className="text-center mt-6 text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-teal-600 font-semibold">
                        Register
                    </Link>
                </p>

            </Card>
        </div>
    );
}