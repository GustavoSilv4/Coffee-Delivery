import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import LogoCoffee from '../../assets/image-coffee.png'
import api from '../../assets/fakeapi.json'

import { Card } from './Card'

import {
  CardContainer,
  HomeContainer,
  HomeSectionText,
  HomeSectionTextContainer,
  HomeSectionTextTitle,
  HomeSectionTextTSubTitle,
  SectionProducts,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeSectionTextContainer>
        <HomeSectionText>
          <HomeSectionTextTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </HomeSectionTextTitle>
          <HomeSectionTextTSubTitle>
            <div>
              <h4>
                <span>
                  <ShoppingCart size={16} color="white" weight="fill" />
                </span>
                Compra simples e segura
              </h4>
              <h4>
                <span>
                  <Timer size={16} color="white" weight="fill" />
                </span>
                Entrega rápida e rastreada
              </h4>
            </div>
            <div>
              <h4>
                <span>
                  <Package size={16} color="white" weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </h4>
              <h4>
                <span>
                  <Coffee size={16} color="white" weight="fill" />
                </span>
                O café chega fresquinho até você
              </h4>
            </div>
          </HomeSectionTextTSubTitle>
        </HomeSectionText>

        <div>
          <img src={LogoCoffee} alt="" />
        </div>
      </HomeSectionTextContainer>

      <SectionProducts>
        <h2>Nossos cafés</h2>
        <CardContainer>
          {api.map((product) => {
            return (
              <Card
                key={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                types={product.types}
              />
            )
          })}
        </CardContainer>
      </SectionProducts>
    </HomeContainer>
  )
}
