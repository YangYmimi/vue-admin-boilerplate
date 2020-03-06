// 存储相关辅助函数

// 获取普通数据类型
const getFromStorage = (key) => {
  return window.StorageStorage.getItem(key)
}

const setToStorage = (key, value) => {
  window.StorageStorage.setItem(key, value)
}

// 获取对象数据类型
const getObjFromStorage = (key) => {
  try {
    return JSON.parse(window.StorageStorage.getItem(key))
  } catch (e) {
    return ''
  }
}

const setObjToStorage = (key, value) => {
  window.StorageStorage.setItem(key, JSON.stringify(value))
}

const removeFromStorage = (key) => {
  window.StorageStorage.removeItem(key)
}

const clearStorage = () => {
  window.StorageStorage.clear()
}

export {
  getFromStorage,
  getObjFromStorage,
  setToStorage,
  setObjToStorage,
  removeFromStorage,
  clearStorage
}
