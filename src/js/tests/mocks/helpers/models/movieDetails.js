import Model from 'models/MovieDetails'
import Genre from 'models/MovieGenre'

function getGenre (id = 1, name = 'First') {
  const model = new Genre()
  model.id = id
  model.name = name
  return model
}

export default function (imagePath = '/image-path.jpg') {
  const model = new Model()
  model.id = 1
  model.title = 'Title'
  model.imagePath = imagePath
  model.averageVote = 1.1
  model.voteCount = 1
  model.genres = [getGenre(), getGenre(2, 'Second')]
  model.releaseDate = '2017-01-01'
  model.overview = 'Overview'
  return model
}
