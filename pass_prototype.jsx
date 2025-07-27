import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PASSPrototype() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">PASS - Pan-African Salary Survey System</h1>
          <Button variant="outline">Log In</Button>
        </header>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold">Salary Data Coverage</h2>
              <p>Detailed salary information across Africa</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold">Easy Access</h2>
              <p>User-friendly mobile-first interface</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold">Powerful Search</h2>
              <p>Custom searches on a vast salary database</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold">Best-in-Class Features</h2>
              <p>Incorporates the finest features of Salary Survey Systems</p>
            </CardContent>
          </Card>
        </div>

        {/* Salary Search */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="text-xl font-semibold mb-2">Salary Search</h3>
          <div className="flex flex-col md:flex-row gap-2">
            <Input placeholder="Job Title" className="flex-1" />
            <Input placeholder="Country" className="flex-1" />
            <Button>Search</Button>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Extensive salary coverage for the entire continent</li>
            <li>Intuitive mobile-first design for easy use</li>
            <li>Feature-rich platform with excellent functionality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
