import { useCallback, useState } from "react"




function SkillSection() {
    const [showSkill, setShowSkill] = useState(false)
    const skillClass = showSkill && "show-skill"
    function onSkillClick() {
        setShowSkill(!showSkill)
    }

    return (
        <div className="skill-container" id="skills">

            <div className={`skill-title ${skillClass}`} onClick={onSkillClick}>
        
            </div>
            <div className="skill-body">

            </div>

        </div>


    )
}

export default SkillSection