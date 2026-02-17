export interface Vet {
    _id: string
    name: string
    address: string
    operating_hours: {
        weekdays: { opens: string; closes: string }
        weekends: { opens: string; closes: string }
    }
    services: string[]
    social: {
        website: string
        facebook: string
        instagram: string
    }
    contact: string
    rating: number
    image: string
}

export const vetsData: Vet[] = [
    {
        _id: '1',
        name: 'Vet4U Pet Clinic',
        address:
            'G-05, Giant Hypermarket, Jalan Klang Lama, 58000 Kuala Lumpur',
        operating_hours: {
            weekdays: { opens: '09:00', closes: '19:00' },
            weekends: { opens: '09:00', closes: '17:00' },
        },
        services: [
            'General Checkup',
            'Vaccination',
            'Dental Care',
            'Surgery',
            'Grooming',
        ],
        social: {
            website: 'https://vet4u.com.my',
            facebook: 'Vet4UPetClinic',
            instagram: '@vet4upetclinic',
        },
        contact: '+603-7980 1234',
        rating: 5,
        image: 'https://placehold.co/600x400/2E7D32/FFFFFF?text=Vet4U+Pet+Clinic',
    },
    {
        _id: '2',
        name: 'Pawsome Veterinary Clinic',
        address:
            'No. 21, Jalan Mamanda 7, Ampang Point, 68000 Ampang, Selangor',
        operating_hours: {
            weekdays: { opens: '08:00', closes: '20:00' },
            weekends: { opens: '09:00', closes: '18:00' },
        },
        services: [
            'Emergency Care',
            'X-Ray',
            'Laboratory',
            'Pet Boarding',
            'Nutrition',
        ],
        social: {
            website: 'https://pawsomevet.my',
            facebook: 'PawsomeVetClinic',
            instagram: '@pawsomevet',
        },
        contact: '+603-4296 5678',
        rating: 5,
        image: 'https://placehold.co/600x400/1565C0/FFFFFF?text=Pawsome+Vet+Clinic',
    },
    {
        _id: '3',
        name: 'Happy Paws Animal Hospital',
        address: 'Lot 2.02, Level 2, Watermark Hotel, 43900 Sepang, Selangor',
        operating_hours: {
            weekdays: { opens: '24 hours', closes: '' },
            weekends: { opens: '24 hours', closes: '' },
        },
        services: [
            '24/7 Emergency',
            'ICU',
            'Surgery',
            'Diagnostic Imaging',
            'Pharmacy',
        ],
        social: {
            website: 'https://happypaws.my',
            facebook: 'HappyPawsAnimalHospital',
            instagram: '@happypawshospital',
        },
        contact: '+603-8787 9999',
        rating: 5,
        image: 'https://placehold.co/600x400/FF6F00/FFFFFF?text=Happy+Paws+Animal+Hospital',
    },
    {
        _id: '4',
        name: 'Klinik Haiwan Klang Utama',
        address: 'No. 58, Jalan Besar, Klang Utama, 41000 Klang, Selangor',
        operating_hours: {
            weekdays: { opens: '08:30', closes: '18:30' },
            weekends: { opens: '09:00', closes: '16:00' },
        },
        services: [
            'General Medicine',
            'Vaccination',
            'Deworming',
            'Minor Surgery',
            'Pet Food',
        ],
        social: {
            website: '',
            facebook: 'KlinikHaiwanKlangUtama',
            instagram: '',
        },
        contact: '+603-3373 4567',
        rating: 5,
        image: 'https://placehold.co/600x400/7B1FA2/FFFFFF?text=Klinik+Haiwan+Klang+Utama',
    },
    {
        _id: '5',
        name: 'Sunway Veterinary Centre',
        address:
            'No. 97, Jalan PJS 11/7, Bandar Sunway, 46150 Petaling Jaya, Selangor',
        operating_hours: {
            weekdays: { opens: '08:00', closes: '19:00' },
            weekends: { opens: '09:00', closes: '17:00' },
        },
        services: [
            'Orthopedics',
            'Dermatology',
            'Cardiology',
            'Laboratory',
            'Grooming Spa',
        ],
        social: {
            website: 'https://sunwayvet.com.my',
            facebook: 'SunwayVetCentre',
            instagram: '@sunwayvet',
        },
        contact: '+603-5632 8901',
        rating: 5,
        image: 'https://placehold.co/600x400/00838F/FFFFFF?text=Sunway+Veterinary+Centre',
    },
    {
        _id: '6',
        name: 'Pet Care Plus Clinic',
        address: 'No. 12, Jalan SS 2/75, Petaling Jaya, 47301 Selangor',
        operating_hours: {
            weekdays: { opens: '09:00', closes: '20:00' },
            weekends: { opens: '10:00', closes: '18:00' },
        },
        services: [
            'Wellness Check',
            'Vaccination',
            'Dental Scaling',
            'Ultrasound',
            'Pet Shop',
        ],
        social: {
            website: 'https://petcareplus.my',
            facebook: 'PetCarePlusClinic',
            instagram: '@petcareplus',
        },
        contact: '+603-7878 2345',
        rating: 5,
        image: 'https://placehold.co/600x400/EF6C00/FFFFFF?text=Pet+Care+Plus+Clinic',
    },
    {
        _id: '7',
        name: 'Klinik Haiwan Damansara Utama',
        address:
            'No. 42, Jalan SS 21/39, Damansara Utama, 47400 Petaling Jaya, Selangor',
        operating_hours: {
            weekdays: { opens: '08:00', closes: '18:00' },
            weekends: { opens: '09:00', closes: '15:00' },
        },
        services: [
            'General Practice',
            'Vaccination',
            'Spay/Neuter',
            'Laboratory Tests',
            'Pet Accessories',
        ],
        social: { website: '', facebook: 'KDUAnimalClinic', instagram: '' },
        contact: '+603-7722 3456',
        rating: 5,
        image: 'https://placehold.co/600x400/5D4037/FFFFFF?text=Klinik+Haiwan+Damansara+Utama',
    },
    {
        _id: '8',
        name: 'Mount Miriam Pet Hospital',
        address: 'No. 23, Jalan Bintang, Taman Maju, 56100 Kuala Lumpur',
        operating_hours: {
            weekdays: { opens: '08:30', closes: '19:30' },
            weekends: { opens: '09:00', closes: '17:00' },
        },
        services: [
            'Medical Treatment',
            'Surgery',
            'Diagnostic Lab',
            'Pet Pharmacy',
            'Hospitalization',
        ],
        social: {
            website: 'https://mountmiriamvet.com',
            facebook: 'MountMiriamPetHospital',
            instagram: '@mountmiriamvet',
        },
        contact: '+603-6258 5678',
        rating: 5,
        image: 'https://placehold.co/600x400/C62828/FFFFFF?text=Mount+Miriam+Pet+Hospital',
    },
    {
        _id: '9',
        name: 'Taman Equine Veterinary Clinic',
        address:
            'No. 8, Jalan Equine 9, Taman Equine, 43300 Seri Kembangan, Selangor',
        operating_hours: {
            weekdays: { opens: '08:00', closes: '18:00' },
            weekends: { opens: '09:00', closes: '16:00' },
        },
        services: [
            'Equine Care',
            'Large Animals',
            'Small Animals',
            'Reproduction',
            'Nutrition Advisory',
        ],
        social: {
            website: 'https://tamanequinevet.my',
            facebook: 'TamanEquineVet',
            instagram: '@tamanequinevet',
        },
        contact: '+603-8941 2345',
        rating: 5,
        image: 'https://placehold.co/600x400/558B2F/FFFFFF?text=Taman+Equine+Vet+Clinic',
    },
    {
        _id: '10',
        name: 'Klinik Haiwan PJ Old Town',
        address: 'No. 77, Jalan Othman, Petaling Jaya, 46000 Selangor',
        operating_hours: {
            weekdays: { opens: '09:00', closes: '19:00' },
            weekends: { opens: '10:00', closes: '17:00' },
        },
        services: [
            'Consultation',
            'Vaccination',
            'Dental Care',
            'Minor Surgery',
            'Pet Food',
        ],
        social: { website: '', facebook: 'PJOldTownVet', instagram: '' },
        contact: '+603-7782 6789',
        rating: 5,
        image: 'https://placehold.co/600x400/6A1B9A/FFFFFF?text=Klinik+Haiwan+PJ+Old+Town',
    },
    {
        _id: '11',
        name: 'Bandar Sunway Animal Care',
        address:
            'No. 5, Jalan PJS 11/16, Bandar Sunway, 46150 Petaling Jaya, Selangor',
        operating_hours: {
            weekdays: { opens: '09:00', closes: '20:00' },
            weekends: { opens: '10:00', closes: '18:00' },
        },
        services: [
            'General Checkup',
            'Vaccination',
            'Dental',
            'Grooming',
            'Pet Daycare',
        ],
        social: {
            website: 'https://sunwayanimalcare.my',
            facebook: 'SunwayAnimalCare',
            instagram: '@sunwayanimalcare',
        },
        contact: '+603-5634 5678',
        rating: 5,
        image: 'https://placehold.co/600x400/00897B/FFFFFF?text=Bandar+Sunway+Animal+Care',
    },
    {
        _id: '12',
        name: 'Vet On The Park',
        address:
            'No. 31, Jalan SS 20/11, Damansara Kim, 47400 Petaling Jaya, Selangor',
        operating_hours: {
            weekdays: { opens: '08:00', closes: '19:00' },
            weekends: { opens: '09:00', closes: '17:00' },
        },
        services: [
            'Preventive Care',
            'Surgery',
            'X-Ray Services',
            'In-House Lab',
            'Pet Boarding',
        ],
        social: {
            website: 'https://vetonthepark.com.my',
            facebook: 'VetOnThePark',
            instagram: '@vetonthepark',
        },
        contact: '+603-7728 9012',
        rating: 5,
        image: 'https://placehold.co/600x400/43A047/FFFFFF?text=Vet+On+The+Park',
    },
    {
        _id: '13',
        name: 'Klinik Veterinar Shah Alam',
        address: 'No. 16, Jalan Osman, Seksyen 27, 40400 Shah Alam, Selangor',
        operating_hours: {
            weekdays: { opens: '08:30', closes: '18:30' },
            weekends: { opens: '09:00', closes: '16:00' },
        },
        services: [
            'General Treatment',
            'Vaccination',
            'Deworming',
            'Spay/Neuter',
            'Pet Products',
        ],
        social: { website: '', facebook: 'ShahAlamVetClinic', instagram: '' },
        contact: '+603-5512 3456',
        rating: 5,
        image: 'https://placehold.co/600x400/AD1457/FFFFFF?text=Klinik+Veterinar+Shah+Alam',
    },
    {
        _id: '14',
        name: 'City Vet Centre',
        address: 'G-12, Wisma Conlay, Jalan Conlay, 50450 Kuala Lumpur',
        operating_hours: {
            weekdays: { opens: '09:00', closes: '20:00' },
            weekends: { opens: '10:00', closes: '18:00' },
        },
        services: [
            'Premium Care',
            'Surgery',
            'Dentistry',
            'Dermatology',
            'Pet Spa',
        ],
        social: {
            website: 'https://cityvet.my',
            facebook: 'CityVetCentre',
            instagram: '@cityvetcentre',
        },
        contact: '+603-2110 6789',
        rating: 5,
        image: 'https://placehold.co/600x400/00ACC1/FFFFFF?text=City+Vet+Centre',
    },
    {
        _id: '15',
        name: 'Klang Vet Clinic & Surgery',
        address: 'No. 102, Jalan Besar, Klang Selatan, 41000 Klang, Selangor',
        operating_hours: {
            weekdays: { opens: '08:00', closes: '18:00' },
            weekends: { opens: '09:00', closes: '15:00' },
        },
        services: [
            'Medical Consultation',
            'Surgical Procedures',
            'Vaccination',
            'Laboratory',
            'Pet Grooming',
        ],
        social: {
            website: 'https://klangvetclinic.com',
            facebook: 'KlangVetClinic',
            instagram: '@klangvet',
        },
        contact: '+603-3344 7890',
        rating: 5,
        image: 'https://placehold.co/600x400/8E24AA/FFFFFF?text=Klang+Vet+Clinic',
    },
]
