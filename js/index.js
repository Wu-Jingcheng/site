// button links
const addClasses = (id, classesStr) => {
    let classes = classesStr.split(" ");
    let obj = document.getElementById(id);
    for(let cls of classes){
        obj.classList.add(cls);
    }
}
// button1
document.getElementById("btn1").href = configs.buttons.btn1.link;
addClasses("btn1-icon", configs.buttons.btn1.icon);
// button2
document.getElementById("btn2").href = configs.buttons.btn2.link;
addClasses("btn2-icon", configs.buttons.btn2.icon);

// profile
document.getElementById("profile").src = configs.profile_path;

// skills
const loadSkills = (configs) => {
    const loadPrimarySkills = (primarySkills)=>{
        let res = [];
        for(let primarySkill in primarySkills){
            let imagePath = primarySkills[primarySkill].img;
            let description = primarySkills[primarySkill].dscpt;
            res.push(`
            <div class="col-lg-4 skill-img">
                <img src="`+imagePath+`">
            </div>
            <div class="col-lg-8 skill-container">
                <h2>`+primarySkill+`</h2>
                <p>`+description+`</p>
            </div>
            `)
        }
        document.getElementById("primary-skills-entry").innerHTML = res.join(`<div style="height:5rem"></div>`);
    }

    const loadSkillBars = (skills)=>{
        let res = [];
        for(let skill in skills){
            let percentage = skills[skill];
            res.push(`
            <div class="col-lg-4">
                <h5>`+skill+`</h5>
            </div>
            <div class="col-lg-8">
                <div class="progress">
                    <div class="progress-bar" style="width: `+percentage+`%;"></div>
                </div>
            </div>
            `)
        }
        document.getElementById("skillbars-entry").innerHTML = res.join(`<div style="height:1rem"></div>`);
    }

    loadPrimarySkills(configs.skills.primary);
    loadSkillBars(configs.skills.skillbar);
}
loadSkills(configs);