export const addCard = (card) => {
  return {
    type: 'add-card',
    payload: card,
  }
}
export const saveIdToEdit = (id) => {
  return {
    type: 'id-to-edit-card',
    payload: id,
  }
}
export const resetAction = () => {
  return {
    type: 'reset'
  }
}