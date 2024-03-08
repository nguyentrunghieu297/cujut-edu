import React from "react";
import { UserProfile } from "@/api";
import { Trash2, Settings } from "lucide-react";

interface Props {
    userProfile: UserProfile;
    onDelete: (id: string) => void;
}

const Table: React.FC<Props> = ({ userProfile, onDelete }) => {
    if (!Array.isArray(userProfile) || userProfile.length === 0)
        return (
            <div>
                <p>No data</p>
            </div>
        );
    const handleDelete = (id: string) => {
        onDelete(id);
    };
    return (
        <div className="py-6 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr className="">
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Avatar
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    First Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Last Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    DOB
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Address
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Phone
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Gender
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    GPA
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {userProfile.map((profile: UserProfile) => (
                                <tr key={profile.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap">{profile.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img
                                            src={profile.avatar}
                                            alt={profile.firstName}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {profile.firstName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {profile.lastName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{profile.dob}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {profile.address}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{profile.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {profile.gender ? "Male" : "Female"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{profile.gpa}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            <Settings />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(profile.id)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            <Trash2 />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
