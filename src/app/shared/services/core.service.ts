// import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

// @Injectable({
//     providedIn: 'root'
// })

export class CoreService {
    pageLoader: boolean = true;
    isLoading: boolean = false;
    private isAuthenticated: boolean = false;

    constructor(private authenticationService: AuthService, private router: Router, private matDialog: MatDialog, private _snackBar: MatSnackBar, private http: HttpClient) { }

    public isLoggedIn(): boolean {
        this.isAuthenticated = this.authenticationService.getToken() ? true : false;
        return this.isAuthenticated;
    }


}