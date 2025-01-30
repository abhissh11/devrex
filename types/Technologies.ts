export interface Technology {
    name: string;
    stack: string[];
}

export interface Technologies {
    frontend: Technology;
    backend: Technology;
    ai: Technology;
    ml: Technology;
    dsa: Technology;
    deployments: Technology;
}