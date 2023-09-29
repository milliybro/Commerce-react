import React, { Component, Fragment } from 'react'

export class PortfolioPage extends Component {
  render() {
   let portfolioId = window.location.pathname.split('/').at(-1)
    return (
      <Fragment>
         <section>
            <div className="container">
               PortfolioPage {portfolioId}
            </div>
         </section>
      </Fragment>
    )
  }
}

export default PortfolioPage