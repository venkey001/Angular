export class EmployeeModel {
    id:number;
    empId: string;
    firstName : string;
    lastName : string;
    nickName : string;
    email : string;
    department :string;
    location :string;
    reportTo : string;
    doj : Date;
    srcofhire :string;
    empstatus : string;
    seatLocation : string;
    empType : string;
    workPhone : string;
    mobileNo : string;
    address : string;
    otheremail : string;
    dob : Date;
    maritalstatus : string;
    jobDescp : string;
    aboutMe : string;
    doe : Date;
    role : string;
    gender : string;
    workexp : WorkExpModel[] = new Array();
    education : EducationModel[] = new Array();
    dependent : DependentModel[] = new Array();
}

export class WorkExpModel {
    id:number;
    companyName: string;
    jobTitle : string;
    fromDate : Date;
    toDate : Date;
    jobDescri : string;
}

export class EducationModel {
    id:number;
    schoolName: string;
    degree : string;
    fieldofStudy : string;
    doc : Date;
    additionalNotes : string;
    intersts : string;
}

export class DependentModel {
    id:number;
    name : string;
    relationship : string;
    dob : Date;
}