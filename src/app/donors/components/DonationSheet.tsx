"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LeftForm from "./LeftForm";
import RightContent from "./RightContent";
interface DonationSheetProps {
  children: React.ReactNode;
}

export function DonationSheet({ children }: DonationSheetProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });



  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDonate = () => {
    const donationAmount = selectedAmount || parseFloat(customAmount);
    console.log("Donation Details:", { amount: donationAmount, ...formData });
    // Handle donation logic here
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-[95vh] w-full max-w-[1920px] p-0 rounded-t-[30px] sm:rounded-t-[40px] lg:rounded-t-[50px] overflow-hidden"
      >
        <div className="h-full overflow-y-auto scrollbar-hide">
          <div className="min-h-full flex flex-col lg:flex-row justify-center lg:justify-evenly px-4 sm:px-8 lg:px-24 py-4 gap-4 sm:gap-6 lg:gap-0">
            {/* Right Side - Background Image with Progress (Mobile First) */}
            <div className="w-full lg:flex-1 flex justify-center mt-4 sm:mt-4 lg:mt-10 mx-auto order-1 lg:order-2">
               <RightContent />
            </div>

            {/* Left Side - Form (Mobile Second) */}
            <div className="w-full lg:flex-1 flex justify-center mt-2 sm:mt-4 lg:mt-10 mx-auto order-2 lg:order-1">
              <LeftForm
                selectedAmount={selectedAmount}
                customAmount={customAmount}
                formData={formData}
                onAmountSelect={handleAmountSelect}
                onCustomAmountChange={handleCustomAmountChange}
                onInputChange={handleInputChange}
                onDonate={handleDonate}
              />
            </div>
          </div>
         
        </div>
      </SheetContent>
    </Sheet>
  );
}
