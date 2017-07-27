import * as t from './actionTypes'
import api from 'lib/api'
import messages from 'lib/text'

const receiveAccount = account => ({
  type: t.ACCOUNT_RECEIVE,
  account
})

const receiveServices = services => ({
  type: t.SERVICES_RECEIVE,
  services
})

const receiveService = service => ({
  type: t.SERVICE_RECEIVE,
  service
})

export const fetchAccount = () => (dispatch, getState) => {
  return api.webstore.account.retrieve()
  .then(({status, json}) => {
    dispatch(receiveAccount(json))
  })
}

export const updateAccount = account => (dispatch, getState) => {
  return api.webstore.account.update(account)
  .then(({status, json}) => {
    dispatch(receiveAccount(json))
  })
}

export const updateDeveloperAccount = account => (dispatch, getState) => {
  return api.webstore.account.updateDeveloper(account)
  .then(({status, json}) => {
    dispatch(receiveAccount(json))
  })
}

export const fetchServices = () => (dispatch, getState) => {
  return api.webstore.services.list()
  .then(({status, json}) => {
    dispatch(receiveServices(json))
  })
}

export const fetchService = (serviceId) => (dispatch, getState) => {
  return api.webstore.services.retrieve(serviceId)
  .then(({status, json}) => {
    dispatch(receiveService(json))
  })
}