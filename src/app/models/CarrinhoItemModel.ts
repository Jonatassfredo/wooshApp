import { ProdutoModel } from "./produtoModel";

export class CarrinhoItemModel {
  Produto: ProdutoModel;
  Quantidade: number = 1;
  Observacoes: string;
  valor: number = 0.0;
}
