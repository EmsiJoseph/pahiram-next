const OFFICES_CONSTANTS = {
    LENDING_OFFICES: {
        ITRO: {
            office: "Information Technology and Resource Office",
            acronym: "ITRO",
            // is_lending_office: true,
            positions: [
                "EMPLOYEE",
                "SUPERVISOR",
                "COSUPERVISOR",
            ]
        },
        BMO: {
            office: "Building Maintenance Office",
            acronym: "BMO",
            is_lending_office: true,
            positions: [
                "EMPLOYEE",
                "SUPERVISOR",
                "COSUPERVISOR",
            ]
        },
        ESLO: {
            office: "Engineering and Science Laboratory Office",
            acronym: "ESLO",
            is_lending_office: true,
            positions: [
                "EMPLOYEE",
                "SUPERVISOR",
                "COSUPERVISOR",
            ]
        },
    },
    FAO: {
        office: "Finance and Accounting Office",
        acronym: "FAO",
        positions: [
            "EMPLOYEE",
            "SUPERVISOR",
            "COSUPERVISOR",
        ]
        // is_lending_office: false,
    },
    PLO: {
        office: "Purchasing and Logistics Office",
        acronym: "PLO",
        positions: [
            "EMPLOYEE",
            "SUPERVISOR",
            "COSUPERVISOR",
        ]
        // is_lending_office: false,
    },
    "N/A": {
        office: "No Designation",
        acronym: "N/A",
        // is_lending_office: false,
    },
};

const LENDING_OFFICES_ACRONYMS = Object.keys(OFFICES_CONSTANTS.LENDING_OFFICES);

export { OFFICES_CONSTANTS, LENDING_OFFICES_ACRONYMS };