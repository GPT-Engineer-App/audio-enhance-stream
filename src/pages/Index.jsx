import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Welcome to AudioStream</CardTitle>
          <CardDescription className="text-center text-gray-500">Your one-stop solution for advanced audio streaming and processing</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="flex justify-center mb-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="Enter your username" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="new-username">Username</Label>
                  <Input id="new-username" type="text" placeholder="Choose a username" />
                </div>
                <div>
                  <Label htmlFor="new-password">Password</Label>
                  <Input id="new-password" type="password" placeholder="Choose a password" />
                </div>
                <Button type="submit" className="w-full">Register</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="text-center text-gray-500">
          &copy; 2023 AudioStream. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;