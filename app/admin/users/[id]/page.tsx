import { getUserByID } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import { notFound } from 'next/navigation';
import UpdateAdminUserForm from "./update-user-form";

export const metadata: Metadata = {
  title: "Update User",
};

const AdminUpdatePage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  const user = await getUserByID(id)
  if (!user) return notFound();

  return <div className="space-y-8 max-w-lg mx-auto">
    <h1 className="h2-bold">Update User</h1>
    <UpdateAdminUserForm user={user} />
  </div>;
};

export default AdminUpdatePage;
