const accountId = 123441
let accountEmail = "santosh@google.com"
var accountPassword = "123456"
accountCity = "Banglore"
let accountState

// accountId = 2 not allowed, const cannot be changed

accountEmail = "sk@sk.com"
accountPassword = "212121221"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
