function withEmploymentDate(target: any, context: any): any {
    if (context.kind === "class") {
    return class extends target {
            employmentDate = '2024-04-12T00:00:00.000Z';
        }
    }   
}

@withEmploymentDate
class Manager {
    task: string = 'Simple task';
    project: string = 'Simple project';

    constructor() {
        console.log('Initializing the Manager class');
    }
}

const manager = new Manager();
console.log(manager);

// Output
//{ "task": "Simple task", "project": "Simple project", "employmentDate": "2024-04-12T00:00:00.000Z" }
