const mock = jest.fn()

jest.doMock('../validateEmail', () => mock)

export default mock
