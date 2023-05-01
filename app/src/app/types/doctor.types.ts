import { JobTitleDto } from './jobTitle.types';
import { JobPlaceDto } from './jobPlace.types';

export type DoctorType = {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    jobTitle: JobTitleDto;
    jobPlace: JobPlaceDto;
    phone: string;
    email: string;
}