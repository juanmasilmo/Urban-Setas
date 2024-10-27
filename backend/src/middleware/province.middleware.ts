import { Request, Response } from 'express';
import { ProvinceClass } from '../models/provinces.model';
import { CityClass } from '../models/cities.model';
import { CountryClass } from '../models/countries.model';

// Crear una nueva provincia
export const createProvince = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nameProvince, idCountry } = req.body;
        const newProvince = await ProvinceClass.create({ nameProvince, idCountry });
        return res.status(201).json(newProvince);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Obtener todas las provincias
export const getAllProvinces = async (req: Request, res: Response): Promise<Response> => {
    try {
        const provinces = await ProvinceClass.findAll({ include: [CountryClass, { model: CityClass }] });
        return res.status(200).json(provinces);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Obtener una provincia por ID
export const getProvinceById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const province = await ProvinceClass.findByPk(id, { include: [CountryClass, { model: CityClass }] });
        if (!province) {
            return res.status(404).json({ message: 'Province not found' });
        }
        return res.status(200).json(province);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Actualizar una provincia
export const updateProvince = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { nameProvince, idCountry } = req.body;
    try {
        const province = await ProvinceClass.findByPk(id);
        if (!province) {
            return res.status(404).json({ message: 'Province not found' });
        }
        province.nameProvince = nameProvince || province.nameProvince;
        province.idCountry = idCountry || province.idCountry;
        await province.save();
        return res.status(200).json(province);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar una provincia
export const deleteProvince = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const province = await ProvinceClass.findByPk(id);
        if (!province) {
            return res.status(404).json({ message: 'Province not found' });
        }
        await province.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
