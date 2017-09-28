import Model from 'models/MovieDetails'
import getGenre from 'tests/mocks/helpers/models/movieGenre'

export function mapProperties (data) {
  return {
    id: data.id,
    title: data.title,
    imagePath: data.poster_path,
    averageVote: data.vote_average,
    voteCount: data.vote_count,
    genres: data.genres,
    releaseDate: data.release_date,
    overview: data.overview
  }
}

export default function ({
  id = 1,
  title = 'Title',
  imagePath = '/image-path.jpg',
  averageVote = 1.1,
  voteCount = 1,
  genres = [{id: 1, name: 'First'}, {id: 2, name: 'Second'}],
  releaseDate = '2017-01-01',
  overview = 'Overview'
} = {}) {
  const model = new Model()
  model.id = id
  model.title = title
  model.imagePath = imagePath
  model.averageVote = averageVote
  model.voteCount = voteCount
  model.genres = genres.map(genre => getGenre(genre))
  model.releaseDate = releaseDate
  model.overview = overview
  return model
}
