import * as hj from "./hj"
// @ponicode
describe("hj.hola", () => {
    test("0", () => {
        let callFunction: any = () => {
            hj.hola()
        }
    
        expect(callFunction).not.toThrow()
    })
})
