class Calculator {
private result: number;
    /** 
     * @param {number} value
     */
    constructor(value:number) {
        this.result = value
    }
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value:number):Calculator {
        this.result += value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value:number):Calculator  {
        this.result -= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value:number):Calculator  {
        this.result *= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value:number):Calculator  {
     if(value===0){
         throw new Error("Division by zero is not allowed")
     }
        this.result /= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value:number):Calculator  {
        this.result **= value
        return this
    }

    /** 
     * @return {number}
     */
    getResult():number {
        return this.result
    }
}