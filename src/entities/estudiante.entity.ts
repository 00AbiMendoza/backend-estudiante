import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'estudiante'})
export class Estudiante {

    //Definir todos los campos
    @PrimaryGeneratedColumn({name: 'id_estudiante'})
    idEstudiante: number;

    @Column({name: 'nombre_estudiante', nullable: false})
    nombreEstudiante: string;

    @Column({name: 'direccion', nullable: false})
    direccion: string;

    @Column({name: 'correo_electronico', nullable: true})
    correoElectronico: string;
    
    @Column({name: 'telefono', nullable: false})
    telefono: string;

    @Column({name: 'id_carrera', nullable: false})
    idCarrera: number;
}