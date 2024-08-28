"use client";

import * as z from "zod";

import Link from "next/link"
import { CardWrapper } from "./card-wrapper"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { PasswordInput } from "./password-input";

// RegisterSchema
const LoginSchema = z.object({
    name: z.string().min(5),
    email: z.string().email({
        message: "Email is required."
    }),
    password: z.string().min(6),
});

export const RegisterForm = () => {

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {

        console.log(values);
        startTransition(() => {
            // Handle login
        });
    }

    return (
        <CardWrapper
            headerTitle="Create an Account"
            headerLabel="Complete the form bellow to sign up"
            backButtonLabel="Already have an account? Sign in"
            backButtonHref="/auth/sign-in"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fullname</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                type="text"
                                                placeholder="eg. John Doe"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                type="email"
                                                placeholder="eg. JohnDoe@example.com"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput
                                                disabled={isPending}
                                                {...field}
                                                placeholder="******"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Sign up
                    </Button>

                    <div className='relative my-2'>
                        <div className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='bg-background px-2 text-muted-foreground'>
                                Or 
                            </span>
                        </div>
                    </div>

                </form>
            </Form>
        </CardWrapper>
    )
}