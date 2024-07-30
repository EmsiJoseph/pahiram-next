import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import {useUser} from "@/hooks/use-user";

export default function ProtectedLayout({
                                            ADMIN,
                                            BORROW,
                                            OFFICE
                                        }: {
    ADMIN: React.ReactNode;
    BORROW: React.ReactNode;
    OFFICE: React.ReactNode;
}) {
    const {office, role, isAdmin} = useUser;



    return (
        <AdminPanelLayout>
            {/*// TODO: Make the toggle a component and check the user's role*/}
            {/*{role === "BORROW" && BORROW}*/}
            {isAdmin && ADMIN}
            {office ? OFFICE : null}
        </AdminPanelLayout>
    );
}