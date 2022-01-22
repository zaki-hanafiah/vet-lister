export interface IVeterinary {
    address: string
    operating_hours: TOperatingHours
    contact: string
    social: TSocial
    name: string
    image: string
    services: string[]
    rating: number
}

export type TTimeSlot = {
    opens: string
    closes: string
}

export type TOperatingHours = {
    weekdays: TTimeSlot
    weekends: TTimeSlot
}

export type TSocial = {
    website: string
    facebook: string
    instagram: string
}
