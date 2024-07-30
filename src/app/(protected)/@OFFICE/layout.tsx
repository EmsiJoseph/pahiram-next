import {useUser} from "@/hooks/use-user";
import {LENDING_OFFICES_ACRONYMS} from "@/CONSTANTS/OFFICES_CONSTANTS";

export default function ProtectedLayout({
                                            LENDING_OFFICES,
                                            FAO,
                                            PLO
                                        }: {
    LENDING_OFFICES: React.ReactNode;
    FAO: React.ReactNode;
    PLO: React.ReactNode;
}) {
    const {office} = useUser;


    return (
        <>
            {LENDING_OFFICES_ACRONYMS.includes(office) && LENDING_OFFICES}
            {office === "FAO" && FAO}
            {office === "PLO" && PLO}
        </>
    );

}