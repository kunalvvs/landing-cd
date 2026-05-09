"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./AdminSidebar.module.css";

const NAV = [
  { label: "Dashboard", href: "/admin" },
  { label: "All Blogs", href: "/admin/blogs" },
  { label: "New Blog", href: "/admin/blogs/new" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Creatordesks Admin</div>
      <nav className={styles.nav}>
        {NAV.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.navLink} ${
              pathname === href ? styles.active : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}
