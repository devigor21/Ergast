import { Result } from './result';

export type apiResultData = {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      round: string;
      Races: Array<{
        season: string;
        round: string;
        url: string;
        raceName: string;
        Circuit: {
          circuitId: string;
          url: string;
          circuitName: string;
          Location: {
            lat: string;
            long: string;
            locality: string;
            country: string;
          };
        };
        date: string;
        time: string;
        Results: Result[];
      }>;
    };
  };
};
