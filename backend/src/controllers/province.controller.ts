import { Request, Response } from 'express';
import { ProvinceClass } from '../models/provinces.model';
import { CityClass } from '../models/cities.model';
import { CountryClass } from '../models/countries.model';

export const createProvince = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nameProvince, idCountry } = req.body;
        const newProvince = await ProvinceClass.create({ nameProvince, idCountry });
        res.status(201).json(newProvince);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllProvinces = async (req: Request, res: Response): Promise<void> => {
    try {
        const provinces = await ProvinceClass.findAll({ include: [CountryClass, { model: CityClass }] });
        res.status(200).json(provinces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProvinceById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const province = await ProvinceClass.findByPk(id, { include: [CountryClass, { model: CityClass }] });
        if (!province) {
            res.status(404).json({ message: 'Province not found' });
            return; // Asegúrate de retornar aquí
        }
        res.status(200).json(province);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProvince = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { nameProvince, idCountry } = req.body;
    try {
        const province = await ProvinceClass.findByPk(id);
        if (!province) {
            res.status(404).json({ message: 'Province not found' });
            return; // Asegúrate de retornar aquí
        }
        province.nameProvince = nameProvince || province.nameProvince;
        province.idCountry = idCountry || province.idCountry;
        await province.save();
        res.status(200).json(province);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProvince = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const province = await ProvinceClass.findByPk(id);
        if (!province) {
            res.status(404).json({ message: 'Province not found' });
            return; // Asegúrate de retornar aquí
        }
        await province.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

