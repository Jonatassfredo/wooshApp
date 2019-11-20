import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { AlertProvider } from "../../providers/alert/alert";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  form: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider,
    private alertSrv: AlertProvider
  ) { }

  async login(): Promise<void> {
    let result = await this.usuarioSrv.autenticate(
      this.form.email,
      this.form.senha
    );
    console.log('retorno login', result.data.usuario.ativo);
    if (result.data.usuario.ativo !== false) {
      if (result.success) {
        UsuarioProvider.RegisterLogin(result.data);
        this.navCtrl.setRoot("CategoriaPage");
      }
    }
    else {
      this.alertSrv.toast("Usuário bloqueado, entre em contato com o estabelecimento", "bottom");
    }
    // console.log(result);
  }

  cadastrar(): void {
    this.navCtrl.setRoot("CadastroPage");
  }
}
