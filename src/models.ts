export interface Address {
    locality: string;
    line1: string;
    line2: string;
    phone: number
}

export interface RestaurantData {
    id: number;
    name: string;
    website: string;
    ETA: number;
    ratings:  number;
    description: string;
    avgBillFor2: number;
    tags: string[];
    address: Address;
    pic: string;
}

export interface RData {
    data: RestaurantData[];
}

export interface SortInterface {
    sortHandler: (param: string | number, type: string) => void;
}

export interface PaginationInterface {
    restaurantsPerPage: number;
    totalRestaurants: number;
    paginate: (param: number) => void;
}

export interface SearchHeaderInterface {
    searchRestaurants: (keyword: string) => void;
}

export interface FiltersInterface {
    filterTags: (filters: Map<string, boolean>) => void;
}

export interface SliderInterface {
    range: number[];
    handleSliderChange: (range: number[]) => void;
}