"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Header } from "@/components/header";
import { BackButton } from "@/components/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    headerTitle: string;
    backButtonLabel: string;
    backButtonHref: string;
};

export const CardWrapper = ({
    children,
    headerLabel,
    headerTitle,
    backButtonLabel,
    backButtonHref,
} : CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header 
                    title={headerTitle}
                    label={headerLabel} 
                />
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>

            <CardFooter>
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}