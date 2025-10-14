"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaAngleDown } from "react-icons/fa6";

interface LeftFormProps {
  selectedAmount: number | null;
  customAmount: string;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  onAmountSelect: (amount: number) => void;
  onCustomAmountChange: (value: string) => void;
  onInputChange: (field: string, value: string) => void;
  onDonate: () => void;
}

export default function LeftForm({
  selectedAmount,
  customAmount,
  formData,
  onAmountSelect,
  onCustomAmountChange,
  onInputChange,
  onDonate,
}: LeftFormProps) {
  const predefinedAmounts = [2000, 2500, 3000, 5000];

  return (
    <div className="w-full max-w-[620px] mx-auto px-2 sm:px-4 lg:px-0 lg:ml-0 xl:ml-12 2xl:ml-56">
      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        <div>
          <h1 
            className="font-medium text-[#030712] text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight"
            style={{ fontFamily: "Sora" }}
          >
            Raise Money for <span className="text-[#0B763C]">Helping</span> and{" "}
            <span className="text-[#0B763C]">Fulfilling</span> the goal of our
            Mission
          </h1>
          <p
            className="text-[#374151] text-sm sm:text-base font-normal mt-3 sm:mt-4 leading-relaxed"
            style={{ fontFamily: "Manrope" }}
          >
            We believe education is the most powerful way to end poverty.
            <br className="hidden sm:block" /> By supporting children&apos;s learning, you&apos;re not just
            giving them a pencil—you&apos;re giving them a future.
          </p>
        </div>

        {/* Amount Selection */}
        <div className="space-y-3 sm:space-y-4">
          <h3 
            className="text-lg sm:text-xl font-medium text-gray-900"
            style={{ fontFamily: "Sora" }}
          >
            Select the Amount
          </h3>

          {/* Fixed Amount Selection */}
          <div>
            <p
              className="text-sm text-gray-700 mb-3 font-medium"
              style={{ fontFamily: "Manrope" }}
            >
              Select Fixed Amount
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => onAmountSelect(amount)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    selectedAmount === amount
                      ? "bg-[#0B763C] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: "Manrope" }}
                >
                  NPR {amount.toLocaleString()}.00
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <p
              className="text-sm text-gray-700 mb-3 font-medium"
              style={{ fontFamily: "Manrope" }}
            >
              Custom Amount
            </p>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-[#0B763C] text-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium inline-flex items-center gap-1">
                NPR
                <FaAngleDown />
              </div>
              <Input
                type="number"
                placeholder="Enter Custom Amount"
                value={customAmount}
                onChange={(e) => onCustomAmountChange(e.target.value)}
                className="border-none h-10 sm:h-11 flex-1 text-sm sm:text-base"
                style={{ fontFamily: "Manrope" }}
              />
            </div>
          </div>
        </div>
        <Separator />
        {/* Personal Information - Simplified */}
        <div className="space-y-3 sm:space-y-4">
          <h1 
            className="text-base sm:text-lg md:text-xl font-medium text-[#030712]"
            style={{ fontFamily: "Sora" }}
          >
            Fill Your Information
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label
                htmlFor="firstName"
                className="text-sm text-gray-700 mb-1 block font-medium"
                style={{ fontFamily: "Manrope" }}
              >
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => onInputChange("firstName", e.target.value)}
                className="h-10 sm:h-11 text-sm sm:text-base"
                style={{ fontFamily: "Manrope" }}
              />
            </div>
            <div>
              <Label
                htmlFor="lastName"
                className="text-sm text-gray-700 mb-1 block font-medium"
                style={{ fontFamily: "Manrope" }}
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => onInputChange("lastName", e.target.value)}
                className="h-10 sm:h-11 text-sm sm:text-base"
                style={{ fontFamily: "Manrope" }}
              />
            </div>
          </div>

          <div>
            <Label 
              htmlFor="phone" 
              className="text-sm text-gray-700 mb-1 block font-medium"
              style={{ fontFamily: "Manrope" }}
            >
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="Eg. +977 97xxxxxxxx"
              value={formData.phone}
              onChange={(e) => onInputChange("phone", e.target.value)}
              className="h-10 sm:h-11 text-sm sm:text-base"
              style={{ fontFamily: "Manrope" }}
            />
          </div>

          <div>
            <Label 
              htmlFor="email" 
              className="text-sm text-gray-700 mb-1 block font-medium"
              style={{ fontFamily: "Manrope" }}
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Eg. johndoe@gmail.com"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              className="h-10 sm:h-11 text-sm sm:text-base"
              style={{ fontFamily: "Manrope" }}
            />
          </div>
        </div>

        {/* Donate Button */}
        <Button
          onClick={onDonate}
          className="w-full sm:w-auto sm:min-w-[172px] h-11 sm:h-12 bg-[#0B763C] hover:bg-[#0B763C]/90 text-[#FFFFFF] font-medium text-sm sm:text-base rounded-full mt-4 sm:mt-6 transition-all duration-300"
          style={{ fontFamily: "Manrope" }}
        >
          Proceed to Donate
        </Button>
      </div>
    </div>
  );
}
