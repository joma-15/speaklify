import { SidebarContent } from "../components/Sidebar";
import { WrappedSidebar } from "../components/Sidebar";

export function HomePage() {
  return (
    <>
      <WrappedSidebar Sidebar={SidebarContent} />
    </>
  );
}
