import Model from 'models/MovieGenre'

export default function ({id = 1, name = 'Name'} = {}) {
  const model = new Model()
  model.id = id
  model.name = name
  return model
}
