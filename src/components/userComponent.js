import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import { UserService } from "../services/userService.js"

let logger1 = new MongoLogger()

let userService = new UserService(logger1)

let user1 = new User(1, "Ceren", "SAHIN", "Ankara")
let user2 = new User(2, "Aleyna", "MERIC", "Of")


userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

// userService.getById(1)


//let customer = { id: 1, firstName: "Ceren" }
// customer.lastName = "SAHIN"
// console.log(customer.lastName)