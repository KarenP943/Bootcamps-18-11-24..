import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column(
        {
                type:'varchar',
                length:30      
        }
    ) 

    name : String;

    @Column({
        type:'text'}
    )
     email : String;
     @Column({
        type:'text'}
    )
     role : String;
     @Column({
        type:'text'}
    )
     password : String;
 
     @OneToMany(()=> Bootcamp, bootcamp=>bootcamp.user)
     bootcamps: Bootcamp[];
     @OneToMany(()=> Review, review=>review.users)
     reviews: Review[];
}

