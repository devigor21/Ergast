import type { Driver } from './driver';

export type ApiData = {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable: {
      season: string;
      Drivers: Driver[];
    };
  };
};
