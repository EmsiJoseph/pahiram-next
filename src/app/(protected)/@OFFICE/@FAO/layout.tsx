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
    const {position} = useUser;


    return (
        <>

            {position === "EMPLOYEE" && EMPLOYEE}
            {position === "SUPERVISOR" && SUPERVISOR}
            {position === "COSUPERVISOR" && COSUPERVISOR}
        </>
    );
}