type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

function superSort(arr: string[], direction: "asc" | "desc"): string[] {
    const sortedArray = [...arr].sort();
    if (direction === "asc") {
        return sortedArray; 
  
    } else if (direction === "desc") {
        return sortedArray.reverse(); 
    }
    return arr;
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc")); // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result); // [ 'D', 'C', 'B', 'A' ]
