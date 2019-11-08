import { HttpProvider } from "./../http/http";
import { CarrinhoItemModel } from "./../../app/models/CarrinhoItemModel";
import { EnderecoEntregaModel } from "./../../app/models/enderecoModel";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ProdutoModel } from "../../app/models/produtoModel";
import { CarrinhoModel } from "../../app/models/carrinhoModel";
import { Events } from "ionic-angular";
import { ConfigHelper } from "../../app/helpers/configHelper";
import { HttpResultModel } from "../../app/models/HttpResultModel";
import { UsuarioModel } from "../../app/models/usuarioModel";
import { UsuarioProvider } from "../usuario/usuario";

@Injectable()
export class CarrinhoProvider {
  private _carrinho: CarrinhoModel = new CarrinhoModel();
  private carrinho: Observable<CarrinhoModel>;
  private carrinhoObservable: any;
  usuario: UsuarioModel = new UsuarioModel();

  constructor(public http: HttpProvider, public evt: Events) {
    //Inicializando nosso carrinho
    this._carrinho.datahora = new Date();
    this._carrinho.itens = new Array<CarrinhoItemModel>();
    this._carrinho.valorTotal = 0.0;
    this._carrinho.enderecoEntrega = new Array<EnderecoEntregaModel>();

    //Inicializando nosso observable
    this.carrinho = Observable.create(obs => {
      this.carrinhoObservable = obs;
      this.carrinhoObservable.next(this._carrinho);
    });
  }

  public getCarrinho(): Observable<CarrinhoModel> {
    return this.carrinho;
  }

  public adicionarNovoItem(item: ProdutoModel): void {
    let isExiste = false;

    this._carrinho.itens.forEach(prod => {
      if (prod.Produto._id == item._id) {
        prod.Quantidade++;
        isExiste = true;
      }
    });

    if (!isExiste) {
      let newProduto = new CarrinhoItemModel();
      newProduto.Produto = item;
      newProduto.Quantidade = 1;
      this._carrinho.itens.push(newProduto);
    }

    this._calcularCarrinho();
    this.evt.publish(ConfigHelper.Events.atualizaoQuantidadeProduto, {});
    this.carrinhoObservable.next(this._carrinho);
  }

  public removerItem(item: ProdutoModel): void {
    for (let index = 0; index < this._carrinho.itens.length; index++) {
      const prod = this._carrinho.itens[index];
      if (prod.Produto._id == item._id) {
        if (prod.Quantidade <= 1) {
          this._carrinho.itens.splice(index, 1);
        } else {
          this._carrinho.itens[index].Quantidade--;
        }
      }
    }
    this._calcularCarrinho();
    this.evt.publish(ConfigHelper.Events.atualizaoQuantidadeProduto, {});
    this.carrinhoObservable.next(this._carrinho);
  }

  public getQuantidadeItem(item: ProdutoModel): number {
    let prod = this._carrinho.itens.filter(x => x.Produto._id == item._id)[0];
    if (prod) return prod.Quantidade;
    else return 0;
  }

  private _calcularCarrinho(): void {
    this._carrinho.valorTotal = 0;
    this._carrinho.itens.forEach(prod => {
      this._carrinho.valorTotal += prod.Produto.preco * prod.Quantidade;
    });
  }

  public async SalvarPedido(pedido: CarrinhoModel): Promise<HttpResultModel> {
    let _pedido: any = {};
    this.usuario = UsuarioProvider.GetUsuario();
    _pedido.valorTotal = pedido.valorTotal;
    _pedido.itens = [];
    _pedido.enderecoEntregaId = pedido.enderecoEntregaId;
    _pedido.usuarioNome = this.usuario.nome;
    _pedido.formaPagamento = pedido.formaPagamento;

    _pedido.enderecoEntrega = {};
    pedido.enderecoEntregaId = await this.http.get(`${ConfigHelper.Url}enderecoEntrega/${pedido.enderecoEntregaId}`);
    pedido.enderecoEntrega = pedido.enderecoEntregaId.data;
    _pedido.enderecoEntrega = pedido.enderecoEntrega;
    // console.log("oooooooooooo", _pedido.enderecoEntrega);

    // pedido.enderecoEntrega.forEach(ender => {
    //   _pedido.enderecoEntrega.push({
    //     cidade: ender.cidade,
    //     bairro: ender.bairro,
    //     rua: ender.rua,
    //     numero: ender.numero,
    //     cep: ender.cep,
    //     orientacoes: ender.orientacoes,
    //     pontoReferencia: ender.pontoReferencia,
    //     uf: ender.uf
    //   });
    // });

    // pedido.enderecoEntrega.forEach(end => {
    //   _pedido.enderecoEntrega.push({
    //     cidade: end.cidade,
    //     rua: end.rua,
    //     bairro: end.bairro,
    //     cep: end.cep,
    //     uf: end.uf,
    //     observacoes: end.observacoes
    //   });
    // });

    // console.log("ooooooooooooooooo", pedido.enderecoEntrega);

    // _pedido.itens = JSON.stringify(_pedido.itens);

    pedido.itens.forEach(prod => {
      _pedido.itens.push({
        quantidade: prod.Quantidade,
        produtoId: prod.Produto._id,
        nomeProd: prod.Produto.nome,
        observacoes: prod.Observacoes,
        valor: prod.valor
      });
    });
    console.log("pedido inteiro", _pedido);
    return this.http.post(`${ConfigHelper.Url}pedido`, _pedido);
  }

  public GetMeusPedidos(): Promise<HttpResultModel> {
    return this.http.get(`${ConfigHelper.Url}pedido`);
  }
}
