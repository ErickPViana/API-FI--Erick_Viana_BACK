import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class EP {

    @PrimaryGeneratedColumn()
    cod: number;

    @Column()
    preco: number;

    @Column()
    nome: string;

}