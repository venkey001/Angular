import { EmployeeModel } from "../components/employee-model";

export class ProjectModel {
    id : number;
    projectId : string;
    projectName : string;
    startDate : Date;
    endDate : Date;
    description : string;
    manager : EmployeeModel = new EmployeeModel();
}

export class TaskModel {
    id : number;
    taskId : string;
    taskName : string;
    startDate : Date;
    endDate : Date;
    plannedHours : number;
    description : string;
    project : ProjectModel;
}