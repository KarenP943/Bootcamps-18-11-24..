import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    idReview:number;

    @Column({
                type:'text'   
    }) 
    title: string;
    
    @Column({
        type:'text',
        nullable:true
    }) 
        comment: string;
    
        @Column({
        type:'integer',
    }) 
    rating: number;

    @ManyToOne(() => Bootcamp, bootcamp => bootcamp.courses)
    bootcamp: Bootcamp;
    @ManyToOne(()=> User, user=>user.reviews)
    users: User;
}
