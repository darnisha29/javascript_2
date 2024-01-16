function createEmployee(firstName, lastName, mobile, email, salary, address) {
    return {
        firstName,
        lastName,
        mobile,
        email,
        salary,
        address,
    };
}

const employeeManagement = {
    employees: [],

    // Add new employee
    addEmployee(employee) {
        const isDuplicate = this.employees.some(emp => emp.mobile === employee.mobile || emp.email === employee.email);
        if (isDuplicate) {
            console.log("Error: Employee with the same mobile number or email already exists.");
        } else {
            this.employees.push(employee);
            console.log("Employee added successfully.");
        }
    },

    // Print all employees
    printAllEmployees() {
        console.log("Employee Details:");
        this.employees.forEach((employee, index) => {
            console.log(`\nEmployee ${index + 1}:`);
            console.log(employee);
        });
    },

    // Update employee details
    updateEmployeeDetails(index, updatedEmployee) {
        if (index >= 0 && index < this.employees.length) {
            this.employees[index] = updatedEmployee;
            console.log("Employee details updated successfully.");
        } else {
            console.log("Error: Invalid index. No employee found at the specified index.");
        }
    },

    // Delete employee
    deleteEmployee(index) {
        if (index >= 0 && index < this.employees.length) {
            this.employees.splice(index, 1);
            console.log("Employee deleted successfully.");
        } else {
            console.log("Error: Invalid index. No employee found at the specified index.");
        }
    },
};

// Example usage
const employee1 = createEmployee("Darnisha", "Patel", "1234567890", "darnisha@example.com", 50000, { line1: "123 Main St", line2: "", area: "Downtown", pincode: "12345", city: "Cityville", state: "Stateville" });
const employee2 = createEmployee("Anjali", "Patel", "9876543210", "anjali@example.com", 60000, { line1: "456 Oak St", line2: "Apt 3", area: "Suburb", pincode: "67890", city: "Townville", state: "Stateville" });

employeeManagement.addEmployee(employee1);
employeeManagement.addEmployee(employee2);

employeeManagement.printAllEmployees();

const updatedEmployee = createEmployee("darnisha", "patel", "1234567890", "patel@example.com", 55000, { line1: "123 Main St", line2: "", area: "Downtown", pincode: "12345", city: "Cityville", state: "Stateville" });
employeeManagement.updateEmployeeDetails(0, updatedEmployee);

employeeManagement.printAllEmployees();

employeeManagement.deleteEmployee(1);

employeeManagement.printAllEmployees();