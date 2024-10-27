import { Request, Response } from "express";
import { CountryClass } from "../models/countries.model";

// Crear un nuevo país
export const createCountry = async (req: Request, res: Response) => {
    try {
        const country = await CountryClass.create(req.body);
        res.status(201).json(country);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los países
export const getCountries = async (req: Request, res: Response) => {
    try {
        const countries = await CountryClass.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un país por ID
export const getCountryById = async (req: Request, res: Response) => {
    try {
        const country = await CountryClass.findByPk(req.params.id);
        if (country) {
            res.status(200).json(country);
        } else {
            res.status(404).json({ error: "País no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un país
export const updateCountry = async (req: Request, res: Response) => {
    try {
        const [updated] = await CountryClass.update(req.body, {
            where: { idCountry: req.params.id },
        });
        if (updated) {
            const updatedCountry = await CountryClass.findByPk(req.params.id);
            res.status(200).json(updatedCountry);
        } else {
            res.status(404).json({ error: "País no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un país
export const deleteCountry = async (req: Request, res: Response) => {
    try {
        const deleted = await CountryClass.destroy({
            where: { idCountry: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "País no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
