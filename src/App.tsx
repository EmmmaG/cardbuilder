import React from 'react'
import CardBuilder from './CardBuilder'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{ maxWidth: '1280px', margin: 'auto' }}>
        <CardBuilder />
      </div>
    )
  }
}
