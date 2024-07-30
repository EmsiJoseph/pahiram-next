import {useUser} from "@/hooks/use-user";

export default function ProtectedLayout({
                                           EMPLOYEE,
    SUPERVISOR,
    COSUPERVISOR
                                        }: {
    EMPLOYEE: React.ReactNode;
    SUPERVISOR: React.ReactNode;
    COSUPERVISOR: React.ReactNode;
}) {
    const {role} = useUser;


    return (
        <>

            {role === "EMPLOYEE" && EMPLOYEE}
            {role === "SUPERVISOR" && SUPERVISOR}
            {role === "COSUPERVISOR" && COSUPERVISOR}
        </>
    );
}