import avatar from "../assets/img/user-img.jpg";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FieldName = "firstName" | "lastName" | "email" | "phoneNumber" | "address" | "bio";

const schema = z.object({
    firstName: z
        .string()
        .min(2, {
            message: "First name is too short",
        })
        .max(12, {
            message: "First name is too long",
        }),
    lastName: z
        .string()
        .min(2, {
            message: "Last name is too short",
        })
        .max(12, {
            message: "Last name is too long",
        }),
    email: z.string().email({ message: "Email is not valid" }),
    phoneNumber: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, {
        message: "Phone number is not valid",
    }),
    address: z.string().nonempty({ message: "Address is required" }),
    bio: z.string(),
});

type FormValues = z.infer<typeof schema>;

export default function UserProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditProfile = () => {
        setIsEditing(true);
    };
    const handleCancel = () => {
        setIsEditing(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<FormValues>({
        defaultValues: {
            firstName: "Nguyen",
            lastName: "Hieu",
            email: "hieuntse160479@fpt.edu.vn",
            phoneNumber: "0819438687",
            address: "179 Nguyen Tat Thanh, Cujut, DakNong",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque explicabo perspiciatis aspernatur eligendi delectus nulla maiores est soluta temporibus sed eum vitae, molestias nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1200));
            setIsEditing(false);
            console.log(data);
        } catch (error) {
            setError("root", { type: "manual", message: "This email is already in use" });
        }
    };

    const renderInputField = (fieldName: FieldName, label: string, errorMessage?: FieldError) => {
        const inputProps = {
            ...register(fieldName, {
                required: `${label} is required`,
            }),
            type: "text",
            id: fieldName,
            className:
                "mt-1 block w-full py-2 px-3 focus:outline-none border-b border-gray-300 rounded-md",
        };

        if (errors[fieldName]) {
            inputProps.className += " focus:border-red-500";
        } else {
            inputProps.className += " focus:border-gray-700";
        }

        return (
            <div className="form-item">
                <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <input disabled={!isEditing} {...inputProps} />
                {errorMessage && <div className="text-red-500 mt-2">{errorMessage.message}</div>}
            </div>
        );
    };

    return (
        <div className="">
            <div className="user-background">
                <img
                    className="w-full h-56 object-cover rounded-3xl"
                    src="https://images.unsplash.com/photo-1495080600440-47b003ed9521?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="background"
                />
                <div className="flex">
                    <div className="user-img">
                        <img
                            src={avatar}
                            alt="user-img"
                            className="user-img rounded-full w-48 h-48 object-cover border-8 border-solid border-[#F2EAE5] mt-[-5rem] ml-10"
                        />
                    </div>
                    <div className="user-info flex flex-col gap-3 mt-3 ml-7">
                        <h1 className="user-name text-3xl font-bold">Nguyen Trung Hieu</h1>
                        <p className="user-date">Member since Aug 23, 2023</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-10 ">
                {/* Left side of the page */}
                <div className="col-span-5 user-desc mt-12">
                    <div className="courses-info flex justify-evenly mt-5 text-center">
                        <div className="course">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Studying</h1>
                            <p className="text-gray-600 text-lg font-medium">3 courses</p>
                        </div>
                        <div className="separate w-px bg-gray-300"></div>
                        <div className="course">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Complete</h1>
                            <p className="text-gray-600 text-lg font-medium">15 courses</p>
                        </div>
                        <div className="separate w-px bg-gray-300"></div>
                        <div className="course">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Hours</h1>
                            <p className="text-gray-600 text-lg font-medium">279 hours</p>
                        </div>
                    </div>
                    <div className="about-me mt-10 ">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                            About Me
                        </h1>
                        <p className="text-gray-600 px-10 leading-6 font-normal text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque
                            explicabo perspiciatis aspernatur eligendi delectus nulla maiores est
                            soluta temporibus sed eum vitae, molestias nemo. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="cta flex justify-center gap-5 mt-10">
                        <button
                            onClick={handleEditProfile}
                            disabled={isEditing}
                            className={
                                !isEditing
                                    ? "cta-btn bg-sky-500 hover:bg-white hover:text-sky-500 text-white font-semibold py-4 px-8 rounded inline-flex items-center transition-colors duration-300"
                                    : "cta-btn bg-sky-800 text-white font-semibold py-4 px-8 rounded inline-flex items-center transition-colors duration-300"
                            }
                        >
                            {isEditing ? "Editing Profile..." : "Edit Profile"}
                        </button>
                        <button className="cta-btn bg-gray-50 hover:bg-gray-500 text-gray-500 hover:text-white font-semibold py-4 px-8 rounded inline-flex items-center transition-colors duration-300">
                            Upload Photo
                        </button>
                    </div>
                </div>
                {/* Right side of the page */}
                <div className="col-span-7 edit-info border-l border-solid border-gray-300 pl-10">
                    <form
                        action=""
                        method="post"
                        className="mx-auto"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-4">EDIT PROFILE</h2>
                        {/* Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {renderInputField("firstName", "First name", errors.firstName)}
                            {renderInputField("lastName", "Last name", errors.lastName)}
                        </div>
                        {/* Address */}
                        <div className="mt-4">
                            {renderInputField("address", "Address", errors.address)}
                        </div>
                        {/* Phone and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {renderInputField("phoneNumber", "Phone", errors.phoneNumber)}
                            {renderInputField("email", "Email", errors.email)}
                        </div>
                        {/* Bio */}
                        <div className="form-item mt-4">
                            <label
                                htmlFor="bio"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Bio
                            </label>
                            <textarea
                                {...register("bio", {
                                    maxLength: {
                                        value: 250,
                                        message: "Bio is too long",
                                    },
                                })}
                                disabled={!isEditing}
                                maxLength={250}
                                id="bio"
                                className="mt-1 block w-full h-32 py-2 px-3 leading-normal focus:outline-none border border-gray-300 focus:border-gray-700 rounded-md"
                            ></textarea>
                            {errors.bio && <div className="text-red-500">{errors.bio.message}</div>}
                        </div>
                        {/* CTA */}
                        <div className="flex justify-end mt-6">
                            {errors.root && (
                                <div className="text-red-500">{errors.root.message}</div>
                            )}
                            <button
                                disabled={isSubmitting || !isEditing}
                                onClick={handleSubmit(onSubmit)}
                                type="submit"
                                className={
                                    isEditing
                                        ? "inline-flex items-center justify-center w-28 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-300"
                                        : "inline-flex items-center justify-center w-28 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-300"
                                }
                            >
                                {isSubmitting ? "Loading..." : "Save"}
                            </button>
                            <button
                                disabled={!isEditing}
                                onClick={handleCancel}
                                type="button"
                                className={
                                    isEditing
                                        ? "ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-300"
                                        : "ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-300"
                                }
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
