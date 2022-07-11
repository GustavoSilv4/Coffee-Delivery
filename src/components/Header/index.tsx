import logoCoffee from '../../assets/logo-coffee.svg'

export function Header() {
  return (
    <div>
      <img src={logoCoffee} alt="" />
      <div>
        <span>Porto Alegre, RS</span>
        <span>Carrinho</span>
      </div>
    </div>
  )
}
