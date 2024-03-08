import Table from "@/components/Table";
import { useProfile } from "@/hooks";

export default function StudentList() {
    const { data: profile, isLoading, isError, error } = useProfile();

    const handleDelete = (id: string) => {
        console.log("Delete", id);
    };

    if (isLoading) {
        return <div>Loading profile...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    if (!profile) {
        return <div>No profile found</div>;
    }

    console.log(profile);

    return (
        <div>
            <h1>StudentList</h1>
            <Table userProfile={profile} onDelete={handleDelete} />
        </div>
    );
}
