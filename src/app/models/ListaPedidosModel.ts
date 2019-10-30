export class ListaPedidosModel {
  dataPedido: string;
  valorTotal: number;
  itens: string;
  usuarioId: string;
  operadorId: string;
  usuarioNome: string;

  public static getTotalItens(itens: string): number {
    try {
      let _itens = JSON.parse(itens);
      return _itens.length;
    } catch (error) {
      return 0;
    }
  }
}
