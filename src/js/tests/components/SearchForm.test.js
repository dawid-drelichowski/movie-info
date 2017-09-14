import React from 'react'
import SearchForm from 'components/SearchForm'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('Search form component', () => {
  function getRenderedComponent (onSubmit = () => {}) {
    return renderer.create(<SearchForm onSubmit={onSubmit}/>)
  }

  function getShallowComponent (onSubmit = () => {}) {
    return shallow(<SearchForm onSubmit={onSubmit}/>)
  }

  it('input should have empty value', () => {
    expect(getRenderedComponent().toJSON()).toMatchSnapshot()
  })

  it('should have value when input changed', () => {
    const value = 'movie',
      form = getShallowComponent()
    form.find('input').simulate('change', {target: {value}})
    expect(form.find('input').prop('value')).toEqual(value)
  })

  it('should call "onSubmit" callback when input changed and form submitted', () => {
    const value = 'movie',
      onSubmit = jest.fn(),
      form = getShallowComponent(onSubmit)
    form.find('input').simulate('change', {target: {value}})
    form.simulate('submit', {preventDefault: jest.fn()})
    expect(form.find('input').prop('value')).toEqual('movie')
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toBeCalledWith(value)
  })

  it('should not call "onSubmit" callback when no input changed and form submitted', () => {
    const onSubmit = jest.fn(),
      form = getShallowComponent(onSubmit)
    form.simulate('submit', {preventDefault: jest.fn()})
    expect(onSubmit).toHaveBeenCalledTimes(0)
  })

  it('should not call "onSubmit" callback twice when input changed once and form submitted twice', () => {
    const value = 'movie',
      onSubmit = jest.fn(),
      form = getShallowComponent(onSubmit)
    form.find('input').simulate('change', {target: {value}})
    form.simulate('submit', {preventDefault: jest.fn()})
    form.simulate('submit', {preventDefault: jest.fn()})
    expect(form.find('input').prop('value')).toEqual(value)
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toBeCalledWith(value)
  })
})
