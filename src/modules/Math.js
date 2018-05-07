import math from 'mathjs'
import _ from 'lodash'
import distance from 'euclidean-distance'

export default class MathModule {

    constructor(eq, target, type, varNumber, range, interationsAmount) {
        this.equations = eq
        this.target = target
        this.type = type
        this.varNumber = varNumber
        this.iterator = 0
        this.range = range
        this.interationsAmount = interationsAmount
    }

    compute(startingPoint) {
        this.iterator += 1
        let winningPoint = startingPoint
        let winningValue = null
        this.points = this.getRandomPoints(1000, this.range, winningPoint)

        for (const point of this.points) {
            const scope = {}
            for (let j = 1; j <= this.varNumber; j++) {
                Object.defineProperty(scope, 'x' + j, { value: point[j - 1] })
            }

            let allok = true
            for (const func of this.equations.filter(eg => eg.value !== '')) {
                if (!math.eval(func.value, scope)) {
                    allok = false
                    break
                }
            }

            if (allok) {
                const result = math.eval(this.target, scope)
                if (this.type === 'min') {
                    if (result < winningValue || winningValue === null) {
                        winningPoint = point
                        winningValue = result
                    }

                } else if (this.type === 'max') {
                    if (result > winningValue || winningValue === null) {
                        winningPoint = point
                        winningValue = result
                    }
                }
            }
        }

        if (distance(winningPoint, startingPoint) <= 0.01 || this.iterator > this.interationsAmount) {
            return winningPoint
        }

        return this.compute(winningPoint)
    }

    getRandomPoints(pointsAmount, range, startingPoint) {
        const points = []

        for (let i = 0; i < pointsAmount; i++) {
            const point = []

            for (let j = 0; j < this.varNumber; j++) {
                point[j] = _.random(-range - Math.abs(startingPoint[j]), range + Math.abs(startingPoint[j]), true)
            }

            points.push(point)
        }

        return points
    }
}
