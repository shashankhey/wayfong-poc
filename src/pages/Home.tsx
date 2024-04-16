import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import CompanyForm from "@/components/Form/CompanyForm";
import Header from "@/components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useId } from "react";
import { FormProp } from "@/types/form.type";



const Home = () => {
	const navigate = useNavigate();
	const formId = useId();
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      companyName: "",
      contactPerson: "",
      phone: "",
      zipCode: "",
      city: "",
      state: "",
      email: "",
	  address: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors,  isValid},
	reset,
  } = methods;

  const onSubmit = async ({companyName, city,contactPerson,phone,state,zipCode, address, email}: FormProp) => {
    // local storage logic
	const productDetails: FormProp = {
		id: formId.slice(0,6),
		companyName: companyName,
		contactPerson: contactPerson,
		phone: phone,
		state: state,
		zipCode: zipCode,
		city: city,
		address: address,
		email: email,
	  };
	
	  // Get existing items from localStorage or initialize an empty array
	  const itemsInCompare: FormProp[] = JSON.parse(localStorage.getItem('itemsInCompare') || '[]');
	
	  // Push the new form data object into the array
	  itemsInCompare.push(productDetails);
	
	  // Store the updated array back into localStorage
	  localStorage.setItem('itemsInCompare', JSON.stringify(itemsInCompare));
	  navigate('/lists')
	  reset();
  };

  return (
    <div>
      <Header />
      <CompanyForm />
      <Form {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-screen-xl mx-auto p-4"
        >
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="max-w-lg">
              <FormField
                control={control}
                name="companyName"
                rules={{
                  required: { value: true, message: "This field is required!" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow",
                          {
                            "focus-visible:ring-red-500": errors.companyName,
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="max-w-lg">
              <FormField
                control={control}
                name="contactPerson"
                rules={{
                  required: { value: true, message: "This field is required!" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact person name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow",
                          {
                            "focus-visible:ring-red-500": errors.contactPerson,
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="max-w-lg">
              <FormField
                control={control}
                name="phone"
                rules={{
					required: { value: true, message: "This field is required!" },
					pattern: {
					  value: /^[0-9]{10}$/, // Add your phone number validation pattern here
					  message: "Invalid phone number format!"
					}
				  }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow appearance-none",
                          {
                            "focus-visible:ring-red-500": errors.phone,
                          }
                        )}
                        {...field}
						maxLength={10}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="max-w-lg">
              <FormField
                control={control}
                name="email"
                rules={{
					required: { value: true, message: "This field is required!" },
					pattern: {
					  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
					  message: "Invalid email address!"
					}

				  }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow",
                          {
                            "focus-visible:ring-red-500": errors.email,
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
			<div className="max-w-lg">
              <FormField
                control={control}
                name="address"
                rules={{
                  required: { value: true, message: "This field is required!" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow",
                          {
                            "focus-visible:ring-red-500": errors.address,
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
			<div className="max-w-lg">
              <FormField
                control={control}
                name="city"
                rules={{
                  required: { value: true, message: "This field is required!" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow",
                          {
                            "focus-visible:ring-red-500": errors.city,
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
			<div className="max-w-lg">
              <FormField
                control={control}
                name="state"
                rules={{
                  required: { value: true, message: "This field is required!" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow",
                          {
                            "focus-visible:ring-red-500": errors.state,
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
			<div className="max-w-lg">
              <FormField
                control={control}
                name="zipCode"
                rules={{
					required: { value: true, message: "This field is required!" },
					pattern: {
					  value: /^\d{6}$/,
					  message: "Zip code must be a six-digit number!"
					}
				  }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className={cn(
                          "rounded-md bg-[#F0F4F8] px-4 hide-arrow appearance-none",
                          {
                            "focus-visible:ring-red-500": errors.zipCode,
                          }
                        )}
                        {...field}
						maxLength={6}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
			
          </div>

          <Button type="submit" className="mt-2 p-4" disabled={!isValid}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Home;
