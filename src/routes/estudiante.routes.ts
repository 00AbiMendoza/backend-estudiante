import { Router } from "express";
import { getEstudiantes, getEstudiante, createEstudiante, updateEstudiante, deleteEstudiante } from "../controllers/estudiante.controller";

const router = Router();

router.get('/', getEstudiantes);
router.get('/:id', getEstudiante);
router.put('/', createEstudiante);
router.post('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);

export default router;