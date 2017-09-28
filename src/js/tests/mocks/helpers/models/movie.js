import Model from 'models/Movie'

export function mapProperties (data) {
  return {id: data.id, title: data.title, imagePath: data.backdrop_path}
}

export default function ({id = 1, title = 'Title', imagePath = '/image-path.jpg'} = {}) {
  const model = new Model()
  model.id = id
  model.title = title
  model.imagePath = imagePath
  return model
}
