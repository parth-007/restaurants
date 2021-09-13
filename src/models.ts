export interface Address {
    locality: string,
    line1: string,
    line2: string,
    phone: number
}

export interface RestaurantData {
    id: number,
    name: string,
    website: string,
    ETA: number,
    ratings:  number,
    description: string,
    avgBillFor2: number,
    tags: string[],
    address: Address,
    pic: string
}