"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.email({
    message: "Invalid email address",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="py-4 sm:py-5 lg:py-6">
      <h1 
        className="text-base sm:text-lg md:text-xl lg:text-2xl py-2 sm:py-3 lg:py-4 font-medium leading-relaxed"
        style={{ fontFamily: "Sora" }}
      >
        Please fill out the form and our team will respond as soon as possible.
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
          {/* First and last name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <h3 
                    className="text-[#030712] text-sm sm:text-base font-medium mb-2"
                    style={{ fontFamily: "Manrope" }}
                  >
                    First Name
                  </h3>
                  <FormControl>
                    <Input
                      placeholder="Enter first name"
                      {...field}
                      className="rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#374151] px-4 py-3 sm:py-3.5 text-sm sm:text-base focus:border-[#0B763C] focus:ring-[#0B763C]"
                      style={{ fontFamily: "Manrope" }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <h3 
                    className="text-[#030712] text-sm sm:text-base font-medium mb-2"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Last Name
                  </h3>
                  <FormControl>
                    <Input
                      placeholder="Enter last name"
                      {...field}
                      className="rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#374151] px-4 py-3 sm:py-3.5 text-sm sm:text-base focus:border-[#0B763C] focus:ring-[#0B763C]"
                      style={{ fontFamily: "Manrope" }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <h3 
                  className="text-[#030712] text-sm sm:text-base font-medium mb-2"
                  style={{ fontFamily: "Manrope" }}
                >
                  Email
                </h3>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    {...field}
                    className="rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#374151] px-4 py-3 sm:py-3.5 text-sm sm:text-base focus:border-[#0B763C] focus:ring-[#0B763C]"
                    style={{ fontFamily: "Manrope" }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <h3 
                  className="text-[#030712] text-sm sm:text-base font-medium mb-2"
                  style={{ fontFamily: "Manrope" }}
                >
                  Message
                </h3>
                <FormControl>
                  <Input
                    placeholder="Enter your message"
                    {...field}
                    className="rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#374151] px-4 py-3 sm:py-3.5 text-sm sm:text-base focus:border-[#0B763C] focus:ring-[#0B763C]"
                    style={{ fontFamily: "Manrope" }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#0B763C] hover:bg-[#0B763C]/90 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 w-full sm:w-auto cursor-pointer"
            style={{ fontFamily: "Manrope" }}
          >
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
}
