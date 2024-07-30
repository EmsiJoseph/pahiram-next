import { OFFICES_CONSTANTS } from "@/CONSTANTS/OFFICES_CONSTANTS";

// TODO: Make the office assignment dynamic

const office = OFFICES_CONSTANTS.LENDING_OFFICES.ITRO;

// TODO: Make this a zustand store and also for the toggle component
export const useUser = {
    firstName: "Mc Joseph",
    lastName: "Agbanlog",
    email: "mcagbanlog@gmail.com",
    office: office.acronym,
    role: office.positions[0],
    isAdmin: false,
    pahiramToken: "",
    apcisToken: "",
};