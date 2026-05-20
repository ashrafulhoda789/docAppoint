"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";


export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(`${error.message}`)
        }
        else {
            toast.success('Registration Successfully Completed!')
            router.push('/login')
        }

    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-cyan-50 px-4 relative overflow-hidden">

            {/* Background blur */}
            <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-20 -left-20" />
            <div className="absolute w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -bottom-20 -right-20" />

            <Card className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/80 border border-white/40 shadow-2xl rounded-3xl p-8">

                <div className="text-center mb-8">

                    <div className="flex justify-center mb-3">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <Image src={'/logo.png'} alt="DocAppoint" width={90} height={90} />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Join DocAppoint to manage appointments easily
                    </p>

                </div>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                    {/* Name */}
                    <TextField name="name" type="text" isRequired>
                        <Label>Full Name</Label>
                        <Input
                            placeholder="Enter your full name"
                            className="h-12 rounded-xl border-gray-200 focus:border-blue-500"
                        />
                        <FieldError />
                    </TextField>

                    {/* Image */}
                    <TextField name="image" type="text" isRequired>
                        <Label>Profile Image URL</Label>
                        <Input
                            placeholder="Enter Profile URI"
                            className="h-12 rounded-xl border-gray-200 focus:border-blue-500"
                        />
                        <Description className="text-xs text-gray-500">
                            Optional but improves profile appearance
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField name="email" type="email" isRequired>
                        <Label>Email Address</Label>
                        <Input
                            placeholder="Enter Your email"
                            className="h-12 rounded-xl border-gray-200 focus:border-blue-500"
                        />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField name="password" type="password" isRequired>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Create a strong password"
                            className="h-12 rounded-xl border-gray-200 focus:border-blue-500"
                        />
                        <Description className="text-xs text-gray-500">
                            Must include 8+ chars, uppercase & number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Register Button */}
                    <Button
                        type="submit"
                        className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                        Create Account
                    </Button>

                    {/* Google */}
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
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 font-semibold">
                        Sign In
                    </Link>
                </p>

            </Card>
        </div>
    );
}