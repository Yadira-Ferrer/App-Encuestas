import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segmentModel = 'administrador';

  constructor(private router: Router, 
              public toastController: ToastController) {}

  login (form) {
    if (this.segmentModel === 'administrador') {
      if (form.value.usuario === 'admin' && form.value.password === 'admin123') {
        form.reset();
        this.router.navigate(['/panel-admin']);
        return false;
      }
      this.presentToast('Credenciales Invalidas');
    } else {

    }
    console.log(form.value);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'tertiary'
    });
    toast.present();
  }

}
