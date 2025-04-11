import { Request, Response } from "express";

import {
    srvCreateCarrera,
    srvGetCarreraByID,
    srvGetCarreras,
    srvDeleteCarrera
} from "../services/carrera.service";

// OBTENER TODAS LAS CARRERAS
export const getCarreras = async (req: Request, res: Response) => {
    
    try {
        const carreras = await srvGetCarreras();
        res.status(200).json(carreras)
    } catch (error) {
        console.log('Error al obtener las carreras' + error)

    }

}

// OBTENER UNA CARRERA POR ID
export const getCarrera = async(req: Request, res: Response) => {

    try {
        const {id} = req.params;

        const carrera = await srvGetCarreraByID(+id);

        if(!carrera) return res.status(404).json({ message: "No se encontró la carrera con ID" + id});

        res.status(200).json(carrera);

    }  catch (error) {

    console.log('Error al obtener la carrera' + error)

    }

}

// CREAR UNA CARRERA
export const createCarrera = async (req: Request, res: Response) => {

    try {

        const { nombreCarrera } = req.body;

        const carrera = await srvCreateCarrera(nombreCarrera);

        res.status(201).json(carrera)

    } catch (error) {
        console.log('Error al crear la carrera ' + error)
    }
    
}

// ACTUALIZAR UNA CARRERA
export const updateCarrera = async (req: Request, res: Response) => {

    const { id } = req.params; // const datos = req.params; // const id = datosid;
    const { nombreCarrera } = req.body;

    try {
        const carrera = await srvGetCarreraByID(+id);

        if(!carrera) return res.status(404).json({message: 'No se encontró la carrera con ID ' + id});

        const carreraUpdate = await srvCreateCarrera(nombreCarrera);

        res.status(200).json(carreraUpdate)
    }
    catch (error) {
        console.log('Error al catualizar la carrera ' + error)
    }
}

// ELIMINAR UNA CARRERA
export const deleteCarrera = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const carrera = await srvGetCarreraByID(+id);

        if(!carrera) return res.status(404).json({message: 'No  se encontró la carrera con ID ' + id});

        // Eliminar la carrrera
        await srvDeleteCarrera(+id);

        res.status(200).json({message: 'Carrera eliminada' })

    }
    catch (error) {
        console.log('Error al eliminar la carrera ' + error)
    }

}