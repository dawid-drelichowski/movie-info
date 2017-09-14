import React from 'react'
import Movie from 'components/Movie'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import config from 'tests/mocks/config.json'
import repository from 'tests/mocks/repository'
import search from 'tests/mocks/search.json'

describe('Movie component', () => {
  function getRenderedComponent (data) {
    return renderer.create(<Movie config={config} repository={repository} data={data}/>)
  }

  function getShallowComponent (data) {
    return shallow(<Movie config={config} repository={repository} data={data}/>)
  }

  it('should not have image', () => {
    expect(getRenderedComponent({...search.results[0], backdrop_path: undefined}).toJSON()).toMatchSnapshot()
  })

  it('should have image', () => {
    expect(getRenderedComponent(search.results[0]).toJSON()).toMatchSnapshot()
  })

  it('should have details', async () => {
    const wrapper = getShallowComponent(search.results[0])
    await wrapper.instance().toggleDetails()
    expect(wrapper.find('MovieDetails').exists()).toBeTruthy()
  })
})
