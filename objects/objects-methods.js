let restaurant = {
    name: '1008',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount        
        return partySize <= seatsLeft
    }
}

let seatParty = function (restaurant, party) {
    restaurant.guestCount += party
}

let removeParty = function (restaurant, party) {
    restaurant.guestCount -= party
}

let checkAvailability = function () {
    if(restaurant.checkAvailability(20)){console.log(`We have ${restaurant.guestCapacity - restaurant.guestCount} available seats. You can come in.`)}
    else {console.log(`We don't have more space.`) }
}

seatParty(restaurant, 72)
checkAvailability()
removeParty(restaurant, 20)
checkAvailability()

