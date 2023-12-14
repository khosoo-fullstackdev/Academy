// Task 1 High paid employee by department
// Task 2 Find top performers employee

const employees = [
    {
    name: "Alice Johnson",
    position: "Software Engineer",
    salary: 95000,
    department: "Engineering",
    performanceRating: 4.7,
    },
    {
    name: "Bob Smith",
    position: "Product Manager",
    salary: 110000,
    department: "Product Management",
    performanceRating: 4.9,
    },
    {
    name: "Charlie Brown",
    position: "Data Analyst",
    salary: 80000,
    department: "Data Science",
    performanceRating: 4.5,
    },
    {
    name: "David Miller",
    position: "HR Specialist",
    salary: 75000,
    department: "Human Resources",
    performanceRating: 4.2,
    },
    {
    name: "Emily Davis",
    position: "Marketing Coordinator",
    salary: 85000,
    department: "Marketing",
    performanceRating: 4.8,
    },
    {
    name: "Frank Wilson",
    position: "QA Tester",
    salary: 90000,
    department: "Engineering",
    performanceRating: 4.6,
    },
    {
    name: "Grace Turner",
    position: "Financial Analyst",
    salary: 95000,
    department: "Finance",
    performanceRating: 4.7,
    },
    {
    name: "Harry White",
    position: "UI/UX Designer",
    salary: 100000,
    department: "Design",
    performanceRating: 4.9,
    },
    {
    name: "Ivy Martin",
    position: "Sales Representative",
    salary: 85000,
    department: "Sales",
    performanceRating: 4.5,
    },
    {
    name: "Jackie Adams",
    position: "Customer Support Specialist",
    salary: 80000,
    department: "Customer Support",
    performanceRating: 4.4,
    },
    {
    name: "Kevin Lewis",
    position: "Systems Administrator",
    salary: 95000,
    department: "IT",
    performanceRating: 4.8,
    },
    {
    name: "Linda Carter",
    position: "Operations Manager",
    salary: 110000,
    department: "Operations",
    performanceRating: 4.9,
    },
    {
    name: "Michael Turner",
    position: "Software Engineer",
    salary: 92000,
    department: "Engineering",
    performanceRating: 4.7,
    },
    {
    name: "Nancy Hill",
    position: "Marketing Manager",
    salary: 105000,
    department: "Marketing",
    performanceRating: 4.8,
    },
    {
    name: "Oscar Robinson",
    position: "Financial Manager",
    salary: 115000,
    department: "Finance",
    performanceRating: 4.9,
    },
    {
    name: "Pamela Foster",
    position: "HR Manager",
    salary: 100000,
    department: "Human Resources",
    performanceRating: 4.8,
    },
    {
    name: "Quincy Bennett",
    position: "Data Scientist",
    salary: 98000,
    department: "Data Science",
    performanceRating: 4.6,
    },
    {
    name: "Rachel Adams",
    position: "Software Developer",
    salary: 90000,
    department: "Engineering",
    performanceRating: 4.7,
    },
    {
    name: "Samuel James",
    position: "Customer Success Manager",
    salary: 105000,
    department: "Customer Support",
    performanceRating: 4.8,
    },
    {
    name: "Tracy Howard",
    position: "Sales Manager",
    salary: 110000,
    department: "Sales",
    performanceRating: 4.9,
    },
];
// Task 1 
// const highPaidEmployeesByDepartment = employees.filter((highPaidDepartments) => {
//     return highPaidDepartments.salary > 90000 && highPaidDepartments.department == "Finance"
//     });
// console.log("MostHighPaidDepartment:",highPaidEmployeesByDepartment);

// Task 2 
// const topPerformers = employees.filter((topPerformers) => {
//     return topPerformers.performanceRating > 4.8
//     });
// console.log("TopPerformers:", topPerformers);

// Task 3 

const aveSalaryByPosition = employees.map((byPostion)=> {
    if (byPostion.position == "Financial Analyst"){   
        return {position: byPostion.position,
            salary: byPostion.salary }
    }
})
console.log(aveSalaryByPosition)