
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  interests: z.array(z.string()).optional(),
  marketingConsent: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Subscribe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      interests: [],
      marketingConsent: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Subscription data:", data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Subscription Successful",
        description: "You have been added to our mailing list.",
      });
    }, 1000);
  };

  const interestOptions = [
    { id: "tech", label: "Technology" },
    { id: "business", label: "Business" },
    { id: "marketing", label: "Marketing" },
    { id: "healthcare", label: "Healthcare" },
    { id: "sustainability", label: "Sustainability" },
  ];

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-md">
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Subscription Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for subscribing to our newsletter. You will now receive updates about our upcoming events.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Subscribe another email</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Subscribe to Updates</h1>
        <p className="text-gray-600 mb-8 text-center">
          Stay up to date with our latest events, news, and exclusive content.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-4">
              <p className="font-medium">What topics are you interested in?</p>
              {interestOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    onCheckedChange={(checked) => {
                      const currentInterests = form.getValues("interests") || [];
                      if (checked) {
                        form.setValue("interests", [...currentInterests, option.id]);
                      } else {
                        form.setValue(
                          "interests",
                          currentInterests.filter((id) => id !== option.id)
                        );
                      }
                    }}
                  />
                  <label 
                    htmlFor={option.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketingConsent"
                onCheckedChange={(checked) => {
                  form.setValue("marketingConsent", !!checked);
                }}
              />
              <label
                htmlFor="marketingConsent"
                className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive marketing communications from EventConnect.
              </label>
            </div>
            
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        </Form>
        
        <p className="text-xs text-gray-500 mt-6 text-center">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
          You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
