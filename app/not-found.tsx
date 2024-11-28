"use client";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          404
        </h1>
        <p className="text text-gray-600 dark:text-gray-300 mt-4">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button
          className="mt-10"
          onClick={() => (window.location.href = "/")}
          variant="outline"
        >
          Back to homepage
        </Button>
      </div>
    </div>
  );
}
