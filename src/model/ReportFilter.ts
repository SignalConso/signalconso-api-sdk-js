import {Tag} from './Anomaly'

export interface ReportFilter {
  readonly departments?: string[];
  readonly tags?: Tag[];
  readonly companyCountries?: string[];
  readonly siretSirenList?: string[];
  start?: Date;
  end?: Date;
  email?: string;
  websiteURL?: string;
  phone?: string;
  websiteExists?: boolean;
  phoneExists?: boolean;
  category?: string;
  status?: string;
  details?: string;
  hasCompany?: boolean;
  offset: number;
  limit: number;
}
