import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { minimumSkill } from "../enum/minimum.skill.enum";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";

@Entity('Course')

export class Course {
    @PrimaryGeneratedColumn()
    idCourse:number;

    @Column ({
        type:'text'
     })
    title:String;

    @Column({
        type:'text'
     })
    description:String;


    @Column({
        type:'datetime'})
    weeks:Number;
    
    @Column({
        type:'text'})
    tuition:Number;


    @Column ({ 
        type: 'enum',
        enum: ['Beginner', 'Intermediate', 'Advanced']

        })
        minimumSkill: minimumSkill
        @ManyToOne(() => Bootcamp, bootcamp => bootcamp.courses)
        bootcamp: Bootcamp;
}
