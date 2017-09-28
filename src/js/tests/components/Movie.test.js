import React from 'react'
import Movie from 'components/Movie'
import getModel from 'tests/mocks/helpers/models/movie'
import config from 'tests/mocks/config.json'
import service from 'tests/mocks/services/Movie'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('Movie component', () => {
  function getRenderedComponent (model = getModel()) {
    return renderer.create(<Movie config={config} service={service} model={model}/>)
  }

  function getShallowComponent (model = getModel()) {
    return shallow(<Movie config={config} service={service} model={model}/>)
  }

  it('should not have image', () => {
    expect(getRenderedComponent(getModel({id: 1, title: 'Title', imagePath: ''})).toJSON()).toMatchSnapshot()
  })

  it('should have image', () => {
    expect(getRenderedComponent().toJSON()).toMatchSnapshot()
  })

  it('should have details', async () => {
    const wrapper = getShallowComponent()
    await wrapper.instance().toggleDetails()
    expect(wrapper.find('MovieDetails').exists()).toBeTruthy()
  })
})
