import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { RolesTypes } from "../types";

const AdminUser = {
    role: RolesTypes.Admin,
    lastName: 'Петров',
    middleName: 'Петя',
    firstName: 'Петечкин',
    phone: '+79123123123'
};

const PatientUser = {
    role: RolesTypes.Patient,
    lastName: 'Петров',
    middleName: 'Петя',
    firstName: 'Петечкин',
    birthDay: '02-06-1959',
    oms: '1231241124124124124',
    phone: '+79123123123'
};

const DoctorUser = {
    role: RolesTypes.Doctor,
    lastName: 'Петров',
    middleName: 'Петя',
    firstName: 'Петечкин',
    phone: '+79123123123',
    jobPlace: 'Больница 1',
    jobTitle: 'Врач'
}

@Injectable({
    providedIn: 'root'
})
export class ActiveUserService {
    private readonly _profile$ = new BehaviorSubject<any | null>(
        null
    );

    public readonly profile$ = this._profile$.asObservable();

    public get profile(): any | null {
        return this._profile$.value;
    }

    public loadProfile(): void {
        this._profile$.next(AdminUser)
    }
}