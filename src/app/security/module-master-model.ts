export class ModuleMasterModel {
    id: number;
    moduleId: String;
    moduleName: String;
    active: String;
    comments: String;
    featureDOs : FeatureModel[] = new Array();
}

export class FeatureModel {
    
    id: number;
    featureId: String;
    featureName: String;
    active: String;
}
