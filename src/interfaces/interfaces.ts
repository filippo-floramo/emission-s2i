export interface EmissionData {
  average: number;
  end: string;
  start: string;
}

export interface EmissionQuery {
  countryCode: string | undefined;
  latitude: string | undefined;
  longitude: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
}

export interface CountryCodes {
  [index: string]: string;
}

export interface ChartsData {
  value: EmissionData[];
}

export interface InputTypes {
  countryCode: string | undefined;
  longitude: string | undefined;
  latitude: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
}

export interface TimeRangeOptions {
  value: string;
  label: string;
  type: string;
  amount?: number;
}
