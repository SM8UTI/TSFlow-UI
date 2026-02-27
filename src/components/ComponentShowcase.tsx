import * as fs from "fs";
import * as path from "path";
import ClientShowcase from "./ClientShowcase";

interface ComponentShowcaseProps {
    componentPath: string; // Path relative to 'src' directory, e.g. "layouts/FAQ/FAQLayout1.tsx"
    title: string;
    children: React.ReactNode;
}

export default function ComponentShowcase({
    componentPath,
    title,
    children,
}: ComponentShowcaseProps) {
    const fullPath = path.join(process.cwd(), "src", componentPath);
    let code = "Code not found: " + fullPath;
    try {
        code = fs.readFileSync(fullPath, "utf8");
    } catch (e) {
        console.error(`Error reading file at ${fullPath}`, e);
    }

    return (
        <ClientShowcase code={code} title={title}>
            {children}
        </ClientShowcase>
    );
}
