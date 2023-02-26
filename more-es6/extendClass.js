class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedBack(){
        console.log(`${this.name} thank you for your feedback`)
    }
}
class Instructor extends TeamMember {
    designation = 'web course instuction'
    team = 'web team'
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    designation = 'web course instuction'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feture){
        console.log(`please develop the ${feture}`)
    }
    relase(version){
        console.log(`please relase the version ${version}`)
    }
}
class JobPlacement extends TeamMember{
    designation = 'job placementS'
    team = 'web team'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    developFeature(feture){
        console.log(`please develop the ${feture}`)
    }
    relase(version){
        console.log(`please relase the version ${version}`)
    }
}

const alia = new Developer('Alia bhatt', 'dhaka', 'react');
console.log(alia);
alia.provideFeedBack();
const bipasha = new JobPlacement('bipasha', 'mumbai', 'india');
console.log(bipasha)