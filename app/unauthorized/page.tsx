import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unauthorized Access",
};

const Unauthorized = () => {
  return (
    <div className="container h-[calc(100vh-200px)] mx-auto flex flex-col items-center justify-center space-y-4">
      <h1 className="h1-bold text-xl">Unauthorized Access</h1>
      <p className="text-muted-foreground">
        You do not have permission to access this page
      </p>
      <Button>
        <Link href={"/"}>Return Home</Link>
      </Button>
    </div>
  );
};

export default Unauthorized;
