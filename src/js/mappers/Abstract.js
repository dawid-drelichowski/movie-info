export default class {
  static mapping = new Map()
  static performMapping (data, model) {
    this.mapping.forEach((dataKey, modelKey) => {
      const value = data[dataKey]
      if (value) {
        model[modelKey] = value
      }
    })
    return model
  }
  static mapCollection (collection) {
    const models = []
    collection.forEach(data => models.push(this.map(data)))
    return models
  }
}
