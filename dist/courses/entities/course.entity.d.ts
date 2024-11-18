import { minimumSkill } from "../enum/minimum.skill.enum";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
export declare class Course {
    idCourse: number;
    title: String;
    description: String;
    weeks: Number;
    tuition: Number;
    minimumSkill: minimumSkill;
    bootcamp: Bootcamp;
}
