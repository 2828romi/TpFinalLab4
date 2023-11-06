import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | null | undefined = null;

  constructor(private apiService: ApiService) { }


  public async login(email: string, password: string): Promise<boolean> {

    let isLogin = false;

    try {

      let apiResponse = this.apiService.getUserToAuth(email, password);

      let userResponse = await lastValueFrom(apiResponse);

      this.user = userResponse[0];

      if (this.user) {
        localStorage.setItem('token', this.user.id!.toString());
        isLogin = true;
      }
    } catch (error) {
      throw error;
    }

    return isLogin;
  }

  public addUser(user: User): Promise<User> {

    return new Promise<User>((resolve, reject) => {
      this.apiService.addUser(user).subscribe({

        next: data => resolve(data),
        error: error => reject(error)
      })
    });

  }

}
