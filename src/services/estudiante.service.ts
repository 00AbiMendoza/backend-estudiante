import { AppDataSource } from "../config/db";
import { Estudiante } from "../entities/estudiante.entity";

const estudianteRepository = AppDataSource.getRepository(Estudiante);

// Leer todos los estudiantes
export const srvGetEstudiantes = async () => {

    const estudiantes = await estudianteRepository.find({
        order: {nombreEstudiante: 'ASC'}
    });

    return estudiantes;
}

// Obtener un estudiante
export const srvGetEstudianteByID = async(pIdEstudiante: number) => {
    const estudiante = await estudianteRepository.findOne({
        where: {idEstudiante: pIdEstudiante}
    });

    return estudiante;
}

// Crear un nuevo Estudiante
export const srvCreateEstudiante = async (pNombreEstudiante: string, pDireccion: string, pCorreoElectronico: string,
    pTelefono: string, pIdCarrera: number
) => {
    const nuevoEstudiante = new Estudiante();

    nuevoEstudiante.nombreEstudiante = pNombreEstudiante;
    nuevoEstudiante.direccion = pDireccion;
    nuevoEstudiante.correoElectronico = pCorreoElectronico;
    nuevoEstudiante.telefono = pTelefono;
    nuevoEstudiante.idCarrera = pIdCarrera;

    return await estudianteRepository.save(nuevoEstudiante);
}

// Actualizar Estudiante
export const srvUpdateCarrera = async (pIdEstudiante: number,pNombreEstudiante: string, pDireccion: string, pCorreoElectronico: string,
    pTelefono: string, pIdCarrera: number) => {
    // Buscar estudiante
    const estudiante = await estudianteRepository.findOne({
        where: {idEstudiante: pIdEstudiante}
    });

    //validacion
    if(!estudiante) return null;

    estudiante.nombreEstudiante = pNombreEstudiante;
    estudiante.direccion = pDireccion;
    estudiante.correoElectronico = pCorreoElectronico;
    estudiante.telefono = pTelefono;
    estudiante.idCarrera = pIdCarrera;

    return await estudianteRepository.save(estudiante);
}

// Eliminar Carrera
export const srvDeleteEstudiante = async (pIdEstudiante: number) => {
    // Buscar estudiante
    const estudiante = await estudianteRepository.findOne({
        where: {idEstudiante: pIdEstudiante}
    });


    //validacion
    if(!estudiante) return null;

    return await estudianteRepository.remove(estudiante);
}