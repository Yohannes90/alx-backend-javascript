export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };

  return reportObject;
}
