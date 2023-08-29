export interface Measurement {
  name: string;
  value: number;
  unit: string;
}

export const measurements: Measurement[] = [
  {
    name: 'Temperatura',
    value: 20,
    unit: '°C',
  },
];

export interface ExternalEnvironmentConditions {
  airQuality: {
    co2: number; // in parts per million (ppm)
    so2: number; // in parts per billion (ppb)
    nox: number; // in parts per billion (ppb)
    pm25: number; // in micrograms per cubic meter (µg/m³)
    o3: number; // in parts per billion (ppb)
    aqi: string; // Air Quality Index category (e.g., "Moderate")
  };
  weather: {
    temperature: number; // in degrees Celsius
    humidity: number; // in percentage
    precipitation: number; // in inches
    windSpeed: number; // in miles per hour (mph)
    atmosphericPressure: number; // in hectopascals (hPa)
    solarRadiation: number; // in watts per square meter (W/m²)
  };
  waterQuality: {
    waterTemperature: number; // in degrees Celsius
    pH: number; // pH level
    dissolvedOxygen: number; // in milligrams per liter (mg/L)
    nitrateConcentration: number; // in milligrams per liter (mg/L)
    phosphateConcentration: number; // in milligrams per liter (mg/L)
    mercuryLevel: number; // in micrograms per liter (µg/L)
  };
  resourceUsage: {
    waterConsumption: number; // in cubic meters per day (m³/day)
    energyConsumption: number; // in megawatt-hours per month (MWh/month)
    wasteGeneration: number; // in kilograms per day (kg/day)
    landUseChange: number; // in acres per year
  };
}

export const externalEnvironmentData: ExternalEnvironmentConditions = {
  airQuality: {
    co2: 400,
    so2: 5,
    nox: 20,
    pm25: 15,
    o3: 40,
    aqi: 'Moderate',
  },
  weather: {
    temperature: 22,
    humidity: 65,
    precipitation: 0.2,
    windSpeed: 12,
    atmosphericPressure: 1015,
    solarRadiation: 750,
  },
  waterQuality: {
    waterTemperature: 20,
    pH: 7.8,
    dissolvedOxygen: 9.5,
    nitrateConcentration: 8,
    phosphateConcentration: 0.4,
    mercuryLevel: 0.002,
  },
  resourceUsage: {
    waterConsumption: 1200,
    energyConsumption: 9500,
    wasteGeneration: 550,
    landUseChange: 4,
  },
};
