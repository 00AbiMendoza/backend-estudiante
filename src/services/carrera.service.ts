import { AppDataSource } from "../config/db";
import { Carrera } from "../entities/carrera.entity";

// Crear el reporsitorio
const carreraRepository = AppDataSource.getRepository(Carrera);

// C = create, R = read, U = update, D = delete

// Leer todas las carreras
export const srvGetCarreras = async () => {

    // select * from carreras order by id_carrera desc;
    const carreras = await carreraRepository.find({
        order: { nombreCarrera: 'ASC' }
    });

    return carreras;

}

// Crear una nueva carrera
export const srvCreateCarrera = async (pnombreCarrera: string) => {

    const nuevaCarrera = new Carrera();

    nuevaCarrera.nombreCarrera = pnombreCarrera;

    return await carreraRepository.save(nuevaCarrera);

}

// Obtener una carrera
export const srvGetCarreraByID = async (pIdCarrera: number) => {

    const carrera = await carreraRepository.findOne({
        where: { idCarrera: pIdCarrera }
    })

    return carrera;

}

// Actualizar carrera
export const srvUpdateCarrera = async (pIdCarrera: number, pNombreCarrera: string) => {

    // Buscar la carrera
    const carrera = await carreraRepository.findOne({
        where: { idCarrera: pIdCarrera }
    });

    // Validación
    if(!carrera) return null;

    carrera.nombreCarrera = pNombreCarrera
    
    return await carreraRepository.save(carrera);

}

// ELiminar carrera
export const srvDeleteCarrera = async (pIdCarrera: number) => {

    // Buscar la carrera
    const carrera = await carreraRepository.findOne({
        where: { idCarrera: pIdCarrera }
    });

    // Validación
    if(!carrera) return null;
    
    return await carreraRepository.remove(carrera);

}