// controllers/location.controller.ts
import { Request, Response } from "express";
import CountryClass from "../models/countries.model";
import ProvinceClass from "../models/provinces.model";
import CityClass from "../models/cities.model";

// Crear país
export const createCountry = async (req: Request, res: Response) => {
  try {
    const { countryName } = req.body;
    const country = await CountryClass.create({ countryName });
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Listar países
export const listCountries = async (req: Request, res: Response) => {
  try {
    const countries = await CountryClass.findAll({ include: [ProvinceClass] });
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Crear provincia
export const createProvince = async (req: Request, res: Response) => {
  try {
    const { nameProvince, idCountry } = req.body;
    const province = await ProvinceClass.create({ nameProvince, idCountry });
    res.status(201).json(province);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Listar provincias de un país
export const listProvinces = async (req: Request, res: Response) => {
  try {
    const { idCountry } = req.params;
    const provinces = await ProvinceClass.findAll({
      where: { idCountry },
      include: [CityClass],
    });
    res.status(200).json(provinces);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Crear ciudad
export const createCity = async (req: Request, res: Response) => {
  try {
    const { cityName, idProvince } = req.body;
    const city = await CityClass.create({ cityName, idProvince });
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Listar ciudades de una provincia
export const listCities = async (req: Request, res: Response) => {
  try {
    const { idProvince } = req.params;
    const cities = await CityClass.findAll({ where: { idProvince } });
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
