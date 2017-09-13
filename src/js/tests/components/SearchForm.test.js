import React from 'react'
import SearchForm from 'components/SearchForm'
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'

describe('Search form component', () => {
  function getRenderedComponent (onSubmit = () => {}) {
    return renderer.create(<SearchForm onSubmit={onSubmit} />)
  }

  function getMountedComponent (onSubmit = () => {}) {
    return mount(<SearchForm onSubmit={onSubmit} />)
  }

  it('input should have empty value', () => {
    expect(getRenderedComponent().toJSON()).toMatchSnapshot()
  })

  it('should have value when input changed', () => {
    const value = 'movie',
      input = getMountedComponent().find('input')
    input.simulate('change', {target: {value}})
    expect(input.props().value).toEqual(value)
  })

  it('should call "onSubmit" callback when input changed and form submitted', () => {
    const value = 'movie',
      onSubmit = jest.fn(),
      form = getMountedComponent(onSubmit),
      input = form.find('input')
    input.simulate('change', {target: {value}})
    form.simulate('submit')
    expect(input.props().value).toEqual(value)
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toBeCalledWith(value)
  })

  it('should not call "onSubmit" callback when no input changed and form submitted', () => {
    const onSubmit = jest.fn(),
      form = getMountedComponent(onSubmit)
    form.simulate('submit')
    expect(onSubmit).toHaveBeenCalledTimes(0)
  })

  it('should not call "onSubmit" callback twice when input changed once and form submitted twice', () => {
    const value = 'movie',
      onSubmit = jest.fn(),
      form = getMountedComponent(onSubmit),
      input = form.find('input')
    input.simulate('change', {target: {value}})
    form.simulate('submit')
    form.simulate('submit')
    expect(input.props().value).toEqual(value)
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toBeCalledWith(value)
  })
})
