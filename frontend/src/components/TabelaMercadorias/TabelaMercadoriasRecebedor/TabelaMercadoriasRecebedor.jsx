import { React, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import styles from "./TabelaMercadoriasRecebedor.module.css"

import { encontrarPedidos } from "../../../hooks/encontrarPedidos"

// TABELA REFERENTE AO RECEBEDOR <-------------

export const TabelaMercadoriasRecebedor = () => {

  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    async function fetchPedidos() {
      const dadosPedidos = await encontrarPedidos()
      setPedidos(dadosPedidos)
    }
    fetchPedidos()
  }, [])

  console.log(pedidos)

  return (
    <div className={styles.table}>
      <div className={styles.title}>
        <h1>Gerenciar mercadorias</h1>
      </div>

      <table className={styles.tableBackground}>
        <thead>
          <tr>
            <th>Número do Pedido</th>
            <th>Fornecedor</th>
            <th>Tipo de Carga</th>
            <th>Estado da Aprovação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos?.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td className={styles.tableData}>{pedido.id_pedido}</td>
              <td className={styles.tableData}>{pedido.fornecedor.nome_fornecedor}</td>
              <td className={styles.tableData}>{pedido.produto.nome_produto}</td>
              <td className={styles.tableData}>{pedido.status_aprovacao}</td>
              <td className={styles.tableData}>

                {/* verificando com é o estado da aprovação para mostrar ação */}

                {pedido.status_aprovacao === 'Pendente' ? (
                  <button className={styles.button}>
                    <Link to={`/recebedor/entradamercadoria/${pedido.id_pedido}`}>
                      Analisar <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                  </button>
                ) : (
                  <button className={styles.button}>
                    <Link to={`/recebedor/mercadoriascadastradas/${pedido.id_pedido}`}>
                      Visualizar <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                  </button>
      		      )}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
