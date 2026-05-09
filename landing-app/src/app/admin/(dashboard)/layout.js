import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";
import styles from "./layout.module.css";

export const metadata = { title: "Admin | Creatordesks" };

export default async function DashboardLayout({ children }) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <div className={styles.shell}>
      <AdminSidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
