import { createDiscreteApi } from 'naive-ui'

export const { message } = createDiscreteApi(['message'], {
  messageProviderProps: {
    max: 1,
    containerStyle: {
      top: '40px'
    }
  }
})

const useMessage = () => {
  return message
}

export default useMessage
