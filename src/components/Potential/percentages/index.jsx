import * as weaponOccult from './weapon/occultCube/index'
import * as weaponCraftman from './weapon/craftmanCube/index'
import * as weaponMeister from './weapon/meisterCube/index'
import * as weaponRed from './weapon/redCube/index'
import * as weaponBlack from './weapon/blackCube/index'
import * as weaponAdditional from './weapon/additionalCube/index'

export const processCube = (grade, additionalGrade, part, select) => {
    let first, second, third
    if (part == 0) { // case in Weapon
        if (select == 0) { // case in occultCube
            if (grade == 0) { // Case in rare
                first = weaponOccult.rareFirst
                second = weaponOccult.rareSecond
                third = weaponOccult.rareThird
            }
            else if (grade == 1) { // case in epic
                first = weaponOccult.epicFirst
                second = weaponOccult.epicSecond
                third = weaponOccult.epicThird
            }
        }
        else if (select == 1) { // case in craftmanCube
            if (grade == 0) { // Case in rare
                first = weaponCraftman.rareFirst
                second = weaponCraftman.rareSecond
                third = weaponCraftman.rareThird
            }
            else if (grade == 1) { // case in epic
                first = weaponCraftman.epicFirst
                second = weaponCraftman.epicSecond
                third = weaponCraftman.epicThird
            }
            else if (grade == 2) { // case in unique
                first = weaponCraftman.uniqueFirst
                second = weaponCraftman.uniqueSecond
                third = weaponCraftman.uniqueThird
            }
        }
        else if (select == 2) { // case in meisterCube
            if (grade == 0) { // Case in rare
                first = weaponMeister.rareFirst
                second = weaponMeister.rareSecond
                third = weaponMeister.rareThird
            }
            else if (grade == 1) { // case in epic
                first = weaponMeister.epicFirst
                second = weaponMeister.epicSecond
                third = weaponMeister.epicThird
            }
            else if (grade == 2) { // case in unique
                first = weaponMeister.uniqueFirst
                second = weaponMeister.uniqueSecond
                third = weaponMeister.uniqueThird
            }
            else if (grade == 3) { // case in legendary
                first = weaponMeister.legendaryFirst
                second = weaponMeister.legendarySecond
                third = weaponMeister.legendaryThird
            }
        }
        else if (select == 3) { // case in redCube
            if (grade == 0) { // Case in rare
                first = weaponRed.rareFirst
                second = weaponRed.rareSecond
                third = weaponRed.rareThird
            }
            else if (grade == 1) { // case in epic
                first = weaponRed.epicFirst
                second = weaponRed.epicSecond
                third = weaponRed.epicThird
            }
            else if (grade == 2) { // case in unique
                first = weaponRed.uniqueFirst
                second = weaponRed.uniqueSecond
                third = weaponRed.uniqueThird
            }
            else if (grade == 3) { // case in legendary
                first = weaponRed.legendaryFirst
                second = weaponRed.legendarySecond
                third = weaponRed.legendaryThird
            }
        }
        else if (select == 4) { // case in blackCube
            if (grade == 0) { // Case in rare
                first = weaponBlack.rareFirst
                second = weaponBlack.rareSecond
                third = weaponBlack.rareThird
            }
            else if (grade == 1) { // case in epic
                first = weaponBlack.epicFirst
                second = weaponBlack.epicSecond
                third = weaponBlack.epicThird
            }
            else if (grade == 2) { // case in unique
                first = weaponBlack.uniqueFirst
                second = weaponBlack.uniqueSecond
                third = weaponBlack.uniqueThird
            }
            else if (grade == 3) { // case in legendary
                first = weaponBlack.legendaryFirst
                second = weaponBlack.legendarySecond
                third = weaponBlack.legendaryThird
            }
        }
        else { // case in additionalCube
            if (additionalGrade == 0) { // case in rare
                first = weaponAdditional.rareFirst
                second = weaponAdditional.rareSecond
                third = weaponAdditional.rareThird
            }
            else if (additionalGrade == 1) { // case in epic
                first = weaponAdditional.epicFirst
                second = weaponAdditional.epicSecond
                third = weaponAdditional.epicThird   
            }
            else if (additionalGrade == 2) { // case in unique
                first = weaponAdditional.uniqueFirst
                second = weaponAdditional.uniqueSecond
                third = weaponAdditional.uniqueThird
            }
            else if (additionalGrade == 3) { // case in legendary
                first = weaponAdditional.legendaryFirst
                second = weaponAdditional.legendarySecond
                third = weaponAdditional.legendaryThird
            }
        
        }
    }
    else if (part == 1) { // case in emblem

    }
    let ret = ['', '', '']
    const firstRand = Math.random() * 100
    const secondRand = Math.random() * 100
    const thirdRand = Math.random() * 100
    for (let i of first) {
        if (firstRand >= i[1]) {
            ret[0] = i[0]
            break
        }
    }
    for (let i of second) {
        if (secondRand >= i[1]) {
            ret[1] = i[0]
            break
        }
    }
    for (let i of third) {
        if (thirdRand >= i[1]) {
            ret[2] = i[0]
            break
        }
    }
    return ret
}
export const processUpgrade = (grade, additionalGrade, select) => {
    let temp;
    if (select == 0) { // case in occultCube
        temp = grade == 0 ? 0.9901 : 0
    }
    else if (select == 1) { // case in craftmanCube
        temp = grade == 0 ? 4.7619 : grade == 1 ? 1.1858 : 0
    }
    else if (select == 2) { // case in meisterCube
        temp = grade == 0 ? 7.9994 : grade == 1 ? 1.6959 : grade == 2 ? 0.1996 : 0
    }
    else if (select == 3) { // case in redCube
        temp = grade == 0 ? 6.0000 : grade == 1 ? 1.8000 : grade == 2 ? 0.3000 : 0
    }
    else if (select == 4) { // case in blackCube
        temp = grade == 0 ? 15.0000 : grade == 1 ? 3.5000 : grade == 2 ? 1.2000 : 0
    }
    else if (select == 5) { // case in occultAdditionalCube
        temp = 0
    }
    else { // case in additionalCube
        temp = additionalGrade == 0 ? 4.7619 : additionalGrade == 1 ? 1.9608 : additionalGrade == 2 ? 0.6000 : 0
    }
    return temp
}