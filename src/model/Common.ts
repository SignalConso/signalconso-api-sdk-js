export type Id = string

export interface Paginate<T> {
  entities: T[]
  totalCount: number
}

export type OrderBy = 'desc' | 'asc'

export interface Entity {
  id: Id
}

export interface PaginatedData<T> {
  totalCount: number
  hasNextPage: boolean
  entities: Array<T>
}

export interface PaginatedFilters {
  offset: number
  limit: number
}

export interface PaginatedSearch<T extends object = any> extends PaginatedFilters {
  sortBy?: Extract<keyof T, string>
  orderBy?: 'asc' | 'desc'
}
