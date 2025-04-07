function display(param: string): void;
function display(param: string, param2: string): void;
function display(param: string[]): void;

function display(param: any, param2?: any): void {
    if (typeof param === "string" && typeof param2 === "string") {
        console.log(param);
        console.log(param2);
    } else if (typeof param === "string") {
        console.log(param);
    } else if (Array.isArray(param)) {
        param.forEach(item => console.log(item));
    }
}

display("Hello, World!");
display("Hello", "World!");	
display(["Hello", "World", "!"]);

