import { Id, PaginatedFilters } from '../../model';
import { Address } from '../../model/Address';
export interface CompanyWithReportsCount extends Company {
    count: number;
    responseRate: number;
}
export interface Company {
    id: Id;
    siret: string;
    creationDate: Date;
    name: string;
    address: Address;
    activityCode?: string;
}
export interface CompanyToActivate {
    company: Company;
    lastNotice?: Date;
    tokenCreation: Date;
}
export interface CompanyCreation {
    siret: string;
    name: string;
    address: Address;
    activityCode?: string;
}
export interface CompanyUpdate {
    address: Address;
    activationDocumentRequired: boolean;
}
export interface CompanySearchResult {
    siret: string;
    name?: string;
    brand?: string;
    isHeadOffice: boolean;
    address: Address;
    activityCode: string;
    activityLabel?: string;
    isMarketPlace: boolean;
}
export interface CompanySearch extends PaginatedFilters {
    readonly departments?: string[];
    readonly activityCodes?: string[];
    emailsWithAccess?: string;
    identity?: string;
}
export declare enum AccessLevel {
    NONE = "none",
    MEMBER = "member",
    ADMIN = "admin"
}
export interface CompanyWithAccessLevel extends Company {
    level: AccessLevel;
}
